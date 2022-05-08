import type { graphql } from "@octokit/graphql/dist-types/types";
import { getInfoFromGitHubUrl } from "./getInfoFromGitHubUrl";
import type { GitHubData, GitHubIssueData } from "../types";

type QueryReturnValue = {
  repository: {
    mergedPullRequests: {
      pageInfo: {
        startCursor: string;
        endCursor: string;
      };
      totalCount: number;
      nodes: Array<{
        createdAt: string;
        mergedAt: string;
        number: string;
        author: {
          login?: string;
          botId?: string;
        };
      }>;
    };
    openPullRequests: {
      pageInfo: {
        startCursor: string;
        endCursor: string;
      };
      totalCount: number;
      nodes: Array<{
        createdAt: string;
        number: string;
        author: {
          login?: string;
          botId?: string;
        };
      }>;
    };
    issues: {
      nodes: Array<GitHubIssueData>;
      totalCount: number;
      pageInfo: {
        startCursor: string;
        endCursor: string;
      };
    };
  };
};

function repoInfoQuery(githubAPI: graphql, owner: string, repoName: string) {
  return githubAPI<QueryReturnValue>(
    `
    query repoInfo($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        mergedPullRequests:pullRequests(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}, states: MERGED) {
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
        openPullRequests:pullRequests(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          pageInfo {
            startCursor
            endCursor
          }
          totalCount
          nodes {
            createdAt
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
        issues(
          labels: ["help wanted", "hacktoberfest"]
          states: OPEN
          orderBy: {field: CREATED_AT, direction: DESC}
          first: 10
        ) {
          nodes {
            id
            number
            publishedAt
            title
            url
            labels(first: 100) {
              nodes {
                name
              }
              totalCount
            }
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
    { owner, name: repoName }
  );
}

export async function calculateGithubData(githubAPI: any, repoUrl: string) {
  const { owner, repoName } = getInfoFromGitHubUrl(repoUrl);

  if (!owner || !repoName) {
    throw new Error(`The url "${repoUrl}" is not a valid GitHub repo URL"`);
  }

  // TODO we used to cache this data during Gatsby builds, but we took that out
  // when we moved to Remix and Vercel. We could definitely bring it back if
  // needed!

  // const today = new Date().toISOString().substring(0, "YYYY-MM-DD".length);
  // const cacheKey = `github:${owner}/${repoName}:${today}`;
  // const cached = await cache.get(cacheKey);

  // if (cached && !process.env.GITHUB_IGNORE_BUILD_CACHE) {
  //   return cached;
  // }

  try {
    const repoInfo = await repoInfoQuery(githubAPI, owner, repoName);
    const { openPullRequests, mergedPullRequests, issues } =
      repoInfo.repository;

    let mergedThisMonth = 0;
    const contributorsThisMonth = new Set();
    let thereMayBeMoreMergeData = mergedPullRequests.totalCount > 100;

    mergedPullRequests.nodes.forEach(({ mergedAt, author }) => {
      // If author.botId is set, this means that the author is a bot because specifically cast
      // the author as a bot and get the id in the query.
      if (author?.botId) {
        return false;
      }
      const date = new Date(mergedAt).getTime();
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

    let thereMayBeMoreCreatedData = openPullRequests.totalCount > 100;
    openPullRequests.nodes.forEach(({ createdAt, author }) => {
      // If author.botId is set, this means that the author is a bot because specifically cast
      // the author as a bot and get the id in the query.
      if (author?.botId) {
        // TODO: Do we want to include bots?
        return;
      }
      const date = new Date(createdAt).getTime();
      const now = Date.now();
      const isThisMonth = now - date < 30 /* days */ * 24 * 60 * 60 * 1000;
      if (isThisMonth) {
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

    const githubData: GitHubData = {
      prsMerged: {
        count: mergedThisMonth,
        maybeMore: thereMayBeMoreMergeData,
      },
      prsCreated: {
        count: 0,
        maybeMore: thereMayBeMoreCreatedData,
      },
      contributors: {
        count: contributorsThisMonth.size,
        maybeMore: thereMayBeMoreMergeData || thereMayBeMoreCreatedData,
      },
      helpIssues: issues.nodes.filter((issue) =>
        issue.labels.nodes.some((i) => i.name === "help wanted")
      ),
      hacktoberfestIssues: issues.nodes.filter((issue) =>
        issue.labels.nodes.some((i) => i.name === "hacktoberfest")
      ),
    };

    // await cache.set(cacheKey, githubData);

    return githubData;
  } catch (err) {
    console.warn(err);
  }
}
