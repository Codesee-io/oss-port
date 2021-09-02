const path = require("path");
const { graphql: github } = require("@octokit/graphql");

exports.createPages = async ({ actions, graphql, reporter, cache }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.tsx`);

  const projects = await graphql(`
  {
    allMdx(sort: {order: ASC, fields: [frontmatter___name]}, limit: 1000) {
      nodes {
        id
        slug
        frontmatter {
          name
        }
        parent {
          ... on File {
            name
            relativeDirectory
          }
        }
      }
    }
  }
  `);

  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  let githubAPI;
  if (process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
    githubAPI = github.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });  
  }

  // Create a page for each project
  const nodes = projects.data.allMdx.nodes;
  for (const node of nodes) {
    let githubData = {};

    if (githubAPI) {
      githubData = await calculateGithubData(
        githubAPI, 
        node.parent.relativeDirectory, 
        node.parent.name,
        cache,
      );
    }

    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        id: node.id,
        slug: node.slug,
        githubData,
      },
    });
  }
};



async function calculateGithubData(githubAPI, owner, repo, cache) {
  let githubData = {};
  const today = (new Date()).toISOString().substr(0, 10); // YYYY-MM-DD

  const cacheKey = `github:${owner}/${repo}:${today}`;
  const cached = await cache.get(cacheKey);
  if (cached && !process.env.GITHUB_IGNORE_BUILD_CACHE) {
    return cached;
  }

  try {
    const mergedPRs = await githubAPI(`
    query mergedPRs($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        pullRequests(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}, states: MERGED) {
          pageInfo {
            startCursor
            endCursor
          }
          totalCount
          nodes {
            createdAt
            mergedAt
            number
            author {
              ... on Bot {
                botId: id
              }
              ... on User {
                login
              }
            }
    
          }
        }
      }
      rateLimit {
        cost,
        remaining,
        limit
      }
    }
    `, {
      owner,
      repo,
    });


    let mergedThisMonth = 0;
    const contributorsThisMonth = new Set();
    let thereMayBeMoreMergeData = true;

    mergedPRs.repository.pullRequests.nodes.forEach(({mergedAt, author}) => {
      // If author.botId is set, this means that the author is a bot because specifically cast
      // the author as a bot and get the id in the query.
      if (author?.botId) {
        return false;
      }
      const date = new Date(mergedAt);
      const now = Date.now();
      const isThisMonth = now - date < 30 /* days */ * 24 * 60 * 60 * 1000;
      if (isThisMonth) {
        mergedThisMonth += 1;
        if (author?.login) {
          contributorsThisMonth.add(author.login);
        }
      } else {
        // This PR is from more than a month ago.
        // Since the data is sorted (by updated_at),
        // this PROBABLY means we have fetched all relevant data
        thereMayBeMoreMergeData = false; // most likely
      }
    });

    githubData['prsMerged'] = {
      count: mergedThisMonth,
      maybeMore: thereMayBeMoreMergeData,
    };

    let thereMayBeMoreCreatedData = true;
    const createdPRs = await githubAPI(`
    query createdPRs($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        pullRequests(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          pageInfo {
            startCursor
            endCursor
          }
          totalCount
          nodes {
            createdAt
            mergedAt
            number
            author {
              ... on Bot {
                botId: id
              }
              ... on User {
                login
              }
            }
          }
        }
      }
      rateLimit {
        cost
        remaining
        limit
      }
    }        
    `, {
      owner,
      repo,
    });

    let createdThisMonth = 0;
    createdPRs.repository.pullRequests.nodes.forEach(({createdAt, author}) => {
      // If author.botId is set, this means that the author is a bot because specifically cast
      // the author as a bot and get the id in the query.
      if (author?.botId) {
        // TODO: Do we want to include bots?
        return false;
      }
      const date = new Date(createdAt);
      const now = Date.now();
      const isThisMonth = now - date < 30 /* days */ * 24 * 60 * 60 * 1000;
      if (isThisMonth) {
        createdThisMonth += 1;
        if (author?.login) {
          contributorsThisMonth.add(author.login);
        }
      } else {
        // This PR is from more than a month ago.
        // Since the data is sorted (by created_at),
        // this PROBABLY means we have fetched all relevant data
        thereMayBeMoreCreatedData = false; // most likely
      }
    });

    githubData['prsCreated'] = {
      count: createdThisMonth,
      maybeMore: thereMayBeMoreCreatedData
    }
    githubData['contributors'] = {
      count: contributorsThisMonth.size,
      maybeMore: thereMayBeMoreMergeData || thereMayBeMoreCreatedData,
    }


    const helpIssuesResults = await issueQuery(githubAPI, owner, repo, "help wanted");
    const hacktoberfestIssuesResults = await issueQuery(githubAPI, owner, repo, "hacktoberfest");

    const helpIssues = helpIssuesResults.repository.issues.nodes;
    const hacktoberfestIssues = hacktoberfestIssuesResults.repository.issues.nodes;

    githubData['helpIssues'] = helpIssues;
    githubData['hacktoberfestIssues'] = hacktoberfestIssues;

    await cache.set(cacheKey, githubData);

  } catch (err) {
    console.warn(err);
  }

  return githubData;
}


function issueQuery(githubAPI, owner, repo, label) {
  return githubAPI(`
  query issues($owner: String!, $repo: String!, $label: [String!]) {
    repository(owner: $owner, name: $repo) {
      issues(labels: $label, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}, first: 10) {
        nodes {
          id
          number
          publishedAt
          title
          url
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
  `, 
  { owner, repo, label }
  );
}
