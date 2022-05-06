import type { Project } from "../types";
import { calculateGithubData } from "./calculateGithubData";
const { graphql: github } = require("@octokit/graphql");
const cliProgress = require("cli-progress");
require("dotenv").config();

export async function getGitHubDataForProjects(projects: Project[]) {
  let githubAPI;
  if (process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
    githubAPI = github.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  } else {
    console.log("No GitHub API Token set, GitHub data will not be available.");
    return;
  }

  const githubDataSet: { [key: string]: any } = {};

  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );

  console.log(`Fetching project data from GitHub`);
  progressBar.start(projects.length, 0);

  for (const project of projects) {
    const repoUrl = project.attributes.repoUrl;
    progressBar.increment();

    if (repoUrl.startsWith("https://github.com")) {
      const githubData = await calculateGithubData(githubAPI, repoUrl);

      if (githubData) {
        githubDataSet[project.slug] = {
          prsMerged: githubData.prsMerged,
          prsCreated: githubData.prsCreated,
          contributors: githubData.contributors,
          helpIssues: githubData.helpIssues,
          hacktoberfestIssues: githubData.hacktoberfestIssues,
        };
      }
    }
  }

  progressBar.stop();

  return githubDataSet;
}
