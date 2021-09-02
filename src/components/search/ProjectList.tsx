import React, { FunctionComponent } from "react";
import { Project } from "../../types";
import { StateResultsProvided } from "react-instantsearch-core";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import ProjectListWrapper from "./ProjectListWrapper";
import ProjectCard from "../ProjectCard";

type Props = StateResultsProvided<Project> & {
  allProjects: Project[];
  githubDataSet: any; // TODO type this lad
};

const ProjectList: FunctionComponent<Props> = ({
  allProjects,
  searchResults,
  githubDataSet,
}) => {
  // Reconcile the search results
  let filteredResults = [...allProjects];

  if (searchResults?.hits) {
    const slugsSet = new Set(searchResults.hits.map((hit) => hit.slug));

    filteredResults = allProjects.filter((project) =>
      slugsSet.has(project.slug)
    );
  }

  return (
    <ProjectListWrapper>
      {filteredResults.map((project) => (
        <ProjectCard
          key={project.slug}
          id={project.id}
          frontmatter={project.frontmatter}
          slug={project.slug}
          githubData={githubDataSet[project.slug]}
        />
      ))}
    </ProjectListWrapper>
  );
};

export default connectStateResults(ProjectList);
