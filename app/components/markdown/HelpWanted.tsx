import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";
import IssueList from "./IssueList";

const HelpWanted: FunctionComponent = () => {
  const { githubData, frontmatter } = useContext(ProjectContext);

  return (
    <IssueList
      title="Help wanted"
      repoUrl={frontmatter.repoUrl}
      issues={githubData.helpIssues}
      label="help wanted"
    />
  );
};

export default HelpWanted;
