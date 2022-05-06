import githubData from "./data/github.json";
import type { GitHubData } from "./types";

export function getGitHubData() {
  return githubData as { [key: string]: GitHubData };
}

export function getGitHubDataForProject(slug: string) {
  return getGitHubData()[slug] || undefined;
}
