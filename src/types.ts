export type ProjectFrontmatter = {
  description?: string;
  repoUrl: string;
  name: string;
  tags: string[];
  currentlySeeking?: string[];
  contributionOverview?: {
    mainLocation?: string;
    idealEffort?: string;
    isMentorshipAvailable?: boolean;
    automatedDevEnvironment?: string;
  };
  websiteUrl?: string;
  twitterUrl?: string;
  avatar?: {
    publicURL: string;
  };
};

export type Project = {
  id: string;
  frontmatter: ProjectFrontmatter;
  slug: string;
};

export type GitHubIssueData = {
  id: string;
  number: number;
  publishedAt: string;
  title: string;
  url: string;
};

export type GitHubData = {
  helpIssues: GitHubIssueData[];
  hacktoberfestIssues: GitHubIssueData[];
};
