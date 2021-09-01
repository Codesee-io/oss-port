const path = require("path");
const { graphql: github } = require("@octokit/graphql");

exports.createPages = async ({ actions, graphql, reporter }) => {
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
      try {
        let thereMayBeMoreData = true;
        const data = await githubAPI(`
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
                    id
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
          owner: node.parent.relativeDirectory,
          repo: node.parent.name,
        });

        const mergedThisMonth = data.repository.pullRequests.nodes.filter(({mergedAt, author}) => {
          if (author?.id) {
            return false;
          }
          const date = new Date(mergedAt);
          const now = Date.now();
          const isThisMonth = now - date < 30 /* days */ * 24 * 60 * 60 * 1000;
          if (!isThisMonth) {
            // This PR is from more than a month ago.
            // Since the data is sorted (by updated_at),
            // this PROBABLY means we have fetched all relevant data
            thereMayBeMoreData = false; // most likely
          }
          
          return isThisMonth;
        });

        githubData['prsMerged'] = {
          count: mergedThisMonth.length,
          maybeMore: thereMayBeMoreData
        }

        thereMayBeMoreData = true;

        const createdThisMonth = data.repository.pullRequests.nodes.filter(({createdAt, author}) => {
          // If author.id is set, this means that the author is a bot because specifically cast
          // the author as a bot and get the id in the query.
          if (author?.id) {
            // TODO: Do we want to include bots?
            return false;
          }
          const date = new Date(createdAt);
          const now = Date.now();
          const isThisMonth = now - date < 30 /* days */ * 24 * 60 * 60 * 1000;
          if (!isThisMonth) {
            // This PR is from more than a month ago.
            // Since the data is sorted (by updated_at),
            // this PROBABLY means we have fetched all relevant data
            thereMayBeMoreData = false; // most likely
          }
          
          return isThisMonth;
        });

        githubData['prsCreated'] = {
          count: createdThisMonth.length,
          maybeMore: thereMayBeMoreData
        }

      } catch (err) {
        console.warn(err);
      }
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


/*
{
  repository(name: "shipment-tracker", owner: "distributeaid") {
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
      }
    }
  }
  rateLimit {
    cost,
    remaining,
    limit
  }
}
 */
