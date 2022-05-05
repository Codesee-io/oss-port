import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";
import IssueList from "./IssueList";

const HacktoberfestIssues: FunctionComponent = () => {
  const { githubData, frontmatter } = useContext(ProjectContext);

  return (
    <IssueList
      title="🎃 Hacktoberfest"
      repoUrl={frontmatter.repoUrl}
      issues={githubData.hacktoberfestIssues}
      label="hacktoberfest"
    />
  );
};

export default HacktoberfestIssues;
