import type { FC } from "react";
import type { GitHubData } from "~/types";
import IssueList from "./IssueList";

type Props = {
  repoUrl: string;
  githubData: GitHubData;
};

const HelpWanted: FC<Props> = ({ githubData, repoUrl }) => (
  <IssueList
    title="Help wanted"
    repoUrl={repoUrl}
    issues={githubData.helpIssues}
    label="help wanted"
  />
);

export default HelpWanted;
