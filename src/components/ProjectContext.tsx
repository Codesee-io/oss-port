import { createContext } from "react";
import { CodeSeeMapMetadata, GitHubData, ProjectFrontmatter } from "../types";

/**
 * We need to pass some data to components that are nested pretty deep inside
 * the MDX renderer, so instead of asking contributors to pass a bunch of props,
 * we store the frontmatter data into this context and retrieve it wherever we
 * need.
 */
const ProjectContext = createContext<{
  frontmatter: ProjectFrontmatter;
  githubData: GitHubData;
  featuredMapMetadata?: CodeSeeMapMetadata;
  organization: string;
}>(null);

export const ProjectContextProvider = ProjectContext.Provider;

export default ProjectContext;
