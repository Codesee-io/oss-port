import type { FC } from "react";
import IssueList from "./IssueList";

type Props = {
  repoUrl: string;
  githubData: any;
};

const HelpWanted: FC<Props> = ({ githubData, repoUrl }) => {
  return (
    <IssueList
      title="Help wanted"
      repoUrl={repoUrl}
      issues={githubData.helpIssues}
      label="help wanted"
    />
  );
};

export default HelpWanted;
