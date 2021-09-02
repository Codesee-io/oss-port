import React, { FunctionComponent } from "react";
import { GitHubIssueData } from "../../types";

type Props = {
  issues?: GitHubIssueData[];
  title: string;
  repoUrl?: string;
};

const MAX_ISSUES = 5 as const;

const IssueList: FunctionComponent<Props> = ({ issues, repoUrl, title }) => {
  if (!issues?.length) {
    return null;
  }

  return (
    <article className="bg-white p-4 max-w-full mb-6" style={{ width: 500 }}>
      <h3 className="text-black-500 font-bold mb-4">{title}</h3>
      <div className="space-y-2">
        {issues.slice(0, MAX_ISSUES).map((issue) => (
          <div key={issue.id} className="text-sm text-black-400">
            <span>#{issue.number}</span>
            <a
              href={issue.url}
              target="_blank"
              className="ml-2 font-semibold hover:text-blue-500"
            >
              {issue.title}
            </a>
          </div>
        ))}
      </div>
      {repoUrl && (
        <div className="text-right mt-4">
          <a
            href={
              repoUrl +
              `/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22`
            }
            target="_blank"
            className="text-sm font-bold hover:text-blue-500"
            rel="noreferrer"
          >
            View all
          </a>
        </div>
      )}
    </article>
  );
};

export default IssueList;
