import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";

const HelpWanted: FunctionComponent = () => {
  const { githubData, frontmatter } = useContext(ProjectContext);

  if (!githubData) {
    return null;
  }

  return (
    <article className="bg-white p-4 max-w-full" style={{ width: 500 }}>
      <h3 className="text-black-500 font-bold mb-4">Help wanted</h3>
      <div className="space-y-2">
        {githubData.helpIssues.slice(0, 5).map((issue) => (
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
      {frontmatter.repoUrl && (
        <div className="text-right mt-4">
          <a
            href={
              frontmatter.repoUrl +
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

export default HelpWanted;
