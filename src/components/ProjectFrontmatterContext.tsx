import { createContext } from "react";
import { ProjectFrontmatter } from "../types";

/**
 * We need to pass some data to components that are nested pretty deep inside
 * the MDX renderer, so instead of asking contributors to pass a bunch of props,
 * we store the frontmatter data into this context and retrieve it wherever we
 * need.
 */
const ProjectFrontmatterContext = createContext<ProjectFrontmatter>(null);

export const ProjectFrontmatterContextProvider =
  ProjectFrontmatterContext.Provider;

export default ProjectFrontmatterContext;
