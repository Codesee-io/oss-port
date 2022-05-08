import type { FC } from "react";
import type { GitHubIssueData } from "~/types";

type Props = {
  issues?: GitHubIssueData[];
  title: string;
  repoUrl?: string;
  label: string;
};

const MAX_ISSUES = 5 as const;

/**
 * Returns the URL for the specific issue label. If the label contains spaces,
 * they get replaced with `+` characters.
 */
function getLabelUrl(repoUrl: string, label: string) {
  return (
    repoUrl +
    `/issues?q=is%3Aissue+is%3Aopen+label%3A%22${label.split(" ").join("+")}%22`
  );
}

const IssueList: FC<Props> = ({ issues, repoUrl, title, label }) => {
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
              rel="noreferrer"
              className="ml-2 font-semibold supports-hover:hover:text-blue-500"
            >
              {issue.title}
            </a>
          </div>
        ))}
      </div>
      {repoUrl && (
        <div className="text-right mt-4">
          <a
            href={getLabelUrl(repoUrl, label)}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold supports-hover:hover:text-blue-500"
          >
            View all
          </a>
        </div>
      )}
    </article>
  );
};

export default IssueList;
