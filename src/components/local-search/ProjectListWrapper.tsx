import React, { FunctionComponent } from "react";

const ProjectListWrapper: FunctionComponent = ({ children }) => {
  return (
    <div
      className="px-2 md:px-6 lg:px-12 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mx-auto mb-32"
      data-qa="project-list-wrapper"
      style={{ maxWidth: 1600 }}
    >
      {children}
    </div>
  );
};

export default ProjectListWrapper;
