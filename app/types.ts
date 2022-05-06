export type ProjectAttributes = {
  description?: string;
  repoUrl: string;
  name: string;
  languages?: string[];
  tags?: string[];
  currentlySeeking?: string[];
  contributionOverview?: {
    mainLocation?: string;
    idealEffort?: string;
    isMentorshipAvailable?: boolean;
    automatedDevEnvironment?: string;
    extras?: string[];
  };
  websiteUrl?: string;
  twitterUrl?: string;
  avatar?: string;
  featuredMap?: {
    url: string;
    description: string;
  };
  maps?: {
    url: string;
    description: string;
    subTitle?: string;
  }[];
  learnLinks?: {
    title?: string;
    url?: string;
  }[];
};

export type ProjectCategory = {
  fieldValue: string;
  totalCount: number;
};

export type Project = {
  attributes: ProjectAttributes;
  body: {
    contributing: string;
    overview: string;
  };
  slug: string;
  organization: string;
};

export type GitHubIssueData = {
  id: string;
  number: number;
  publishedAt: string;
  title: string;
  url: string;
  labels: {
    nodes: Array<{ name: string }>;
    totalCount: number;
  };
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
  entityRoleEveryone: string;
  featured: boolean;
  insights: {
    lastCommitDate: string;
    commitCountLast30Days: string;
    createDate: string;
    linesOfCode: string;
  };
  changed: string;
  repos: Array<{
    url: string;
    defaultBranch: string;
    isPublic: boolean;
  }>;
  hasPrivateRepos: false;
  thumbnail: string;
};
