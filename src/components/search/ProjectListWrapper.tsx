import React, { FunctionComponent } from "react";

const ProjectListWrapper: FunctionComponent = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4" data-qa="project-list-wrapper">
      {children}
    </div>
  );
};

export default ProjectListWrapper;
