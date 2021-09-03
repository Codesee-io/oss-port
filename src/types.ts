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
  featuredMapUrl?: string;
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

export type GitHubMetric = {
  count: number;
  maybeMore: boolean;
};

export type GitHubData = {
  prsMerged: GitHubMetric;
  prsCreated: GitHubMetric;
  contributors: GitHubMetric;
  helpIssues: GitHubIssueData[];
  hacktoberfestIssues: GitHubIssueData[];
};

export type CodeSeeMapMetadata = {
  id: string;
  name: string;
  visibility: string;
  featured: boolean;
  changed: string;
  thumbnail: string;
};
