import React, { FunctionComponent } from "react";
import { StateResultsProvided } from "react-instantsearch-core";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import ProjectCard, { Project } from "../ProjectCard";
import ProjectListWrapper from "./ProjectListWrapper";

type Props = StateResultsProvided<Project> & {
  defaultProjects: Project[];
};

const ProjectSearchResults: FunctionComponent<Props> = ({
  searchResults,
  defaultProjects,
}) => {
  if (!searchResults) {
    return (
      <ProjectListWrapper>
        {defaultProjects.map((hit) => (
          <ProjectCard
            key={hit.slug}
            id={hit.id}
            frontmatter={hit.frontmatter}
            slug={hit.slug}
          />
        ))}
      </ProjectListWrapper>
    );
  }

  return (
    <ProjectListWrapper>
      {searchResults.hits.map((hit) => (
        <ProjectCard
          key={hit.slug}
          id={hit.id}
          frontmatter={hit.frontmatter}
          slug={hit.slug}
        />
      ))}
    </ProjectListWrapper>
  );
};

export default connectStateResults(ProjectSearchResults);
