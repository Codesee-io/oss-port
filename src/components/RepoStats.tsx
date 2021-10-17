import { InfoIcon } from "@primer/octicons-react";
import React, { FunctionComponent } from "react";
import { GitHubIssueData, GitHubMetric } from "../types";

const STATS_ARE_MISSING = process.env.NODE_ENV !== "production";

type Props = {
  className?: string;
  stats?: {
    prsCreated: GitHubMetric;
    prsMerged: GitHubMetric;
    contributors: GitHubMetric;
    hacktoberfestIssues?: GitHubIssueData[];
    helpIssues?: GitHubIssueData[];
  };
};

function formatMetric(metric: GitHubMetric) {
  if (metric === null) {
    return "0";
  }

  if (metric.maybeMore) {
    if (metric.count > 20) {
      return Math.floor(metric.count / 10) * 10 + "+";
    } else {
      return metric.count + "+";
    }
  }
  return metric.count;
}

const RepoStats: FunctionComponent<Props> = ({ stats, className }) => {

  const helpWantedCount = stats?.helpIssues?.length || 0;
  const hacktoberfestCount = stats?.hacktoberfestIssues?.length || 0;
  const [issueName, issueCount] = hacktoberfestCount === 0 && helpWantedCount !== 0
    ? ["Help Wanted", helpWantedCount] 
    : ["Hack-🎃-fest", hacktoberfestCount];

  return (
    <div className={className}>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xs font-bold text-blue-500 mb-4">Open issues</h2>
        <h2 className="text-xs font-bold text-blue-500 mb-4">Last 30 days</h2>
      </div>
      <div className="flex justify-between text-black-500 space-x-4 text-center">
        <div>
          <div className="text-2xl font-bold">
            {formatMetric({count: issueCount, maybeMore: false})}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            {issueName}
          </small>
        </div>
        <div style={{width: '10px', paddingRight: '10px', borderRight: '1px solid rgba(240, 242, 246, var(--tw-border-opacity))'}}></div>
        <div>
          <div className="text-2xl font-bold">
            {formatMetric(stats?.prsCreated)}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            PRs opened
          </small>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {formatMetric(stats?.contributors)}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            Contributors
          </small>
        </div>
      </div>
      {STATS_ARE_MISSING && (
        <div
          title="This text is only visible during local development"
          className="mt-2 text-xs flex items-center text-gray-400"
        >
          <InfoIcon size={12} className="mr-1" />
          Stats will appear during Netlify builds
        </div>
      )}
    </div>
  );
};

export default RepoStats;
