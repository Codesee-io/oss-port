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
