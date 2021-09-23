import React, { FunctionComponent } from "react";

const ProjectListWrapper: FunctionComponent = ({ children }) => {
  return (
    <div className="flex-grow mb-32">
      <div
        className="px-2 md:px-6 lg:px-12 grid gap-8 projects-wrapper"
        data-qa="project-list-wrapper"
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectListWrapper;
