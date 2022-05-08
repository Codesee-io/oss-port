import type { FC } from "react";
import type { GitHubData } from "~/types";
import IssueList from "./IssueList";

type Props = {
  githubData: GitHubData;
  repoUrl: string;
};

const HacktoberfestIssues: FC<Props> = ({ githubData, repoUrl }) => (
  <IssueList
    title="🎃 Hacktoberfest"
    repoUrl={repoUrl}
    issues={githubData.hacktoberfestIssues}
    label="hacktoberfest"
  />
);

export default HacktoberfestIssues;
