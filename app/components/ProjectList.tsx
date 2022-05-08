import React, { FunctionComponent } from "react";
import { Project } from "../types";
import ProjectListWrapper from "./local-search/ProjectListWrapper";
import useSearch from "./local-search/useSearch";
import ProjectCard from "./ProjectCard";

type Props = {
  allProjects: Project[];
  githubDataSet: any;
  helpfulnessDataSet: { [slug: string]: number };
};

const ProjectList: FunctionComponent<Props> = ({
  allProjects,
  githubDataSet,
  helpfulnessDataSet,
}) => {
  const { filteredProjectIds, allActiveTags } = useSearch();

  if (filteredProjectIds.length === 0) {
    return (
      <div className="text-center px-4 mt-24 mb-32 flex-grow">
        <h3 className="text-black-500 text-2xl font-semibold mb-4">
          No results
        </h3>
        <p className="text-black-300">
          No projects matched your search. Try adjusting your filters.
        </p>
      </div>
    );
  }

  const filteredProjects = allProjects.filter((project) =>
    filteredProjectIds.includes(project.slug)
  );

  filteredProjects.sort((a: Project, b: Project) => {
    return helpfulnessDataSet[b.slug] - helpfulnessDataSet[a.slug];
  });

  return (
    <ProjectListWrapper>
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          githubData={githubDataSet[project.slug]}
          activeTags={allActiveTags}
        />
      ))}
    </ProjectListWrapper>
  );
};

export default ProjectList;
