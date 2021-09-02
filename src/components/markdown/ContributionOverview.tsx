import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";
import { GitPullRequestIcon, ClockIcon } from "@primer/octicons-react";
import ToolsIcon from "../icons/ToolsIcon";
import UsersIcon from "../icons/UsersIcon";

const ContributionOverview: FunctionComponent = () => {
  const { frontmatter } = useContext(ProjectContext);

  if (!frontmatter?.contributionOverview) {
    return null;
  }

  const {
    mainLocation,
    isMentorshipAvailable,
    automatedDevEnvironment,
    idealEffort,
  } = frontmatter.contributionOverview;

  return (
    <article className="bg-white p-4 max-w-full mb-4" style={{ width: 300 }}>
      <h3 className="text-black-500 font-bold mb-4">Contribution overview</h3>
      <div className="text-black-500 text-sm space-y-2">
        {mainLocation && (
          <p>
            <ClockIcon size={16} className="fill-black-200 mr-2" />
            Most contributors are in <strong>{mainLocation}</strong>
          </p>
        )}
        {idealEffort && (
          <p>
            <GitPullRequestIcon size={16} className="fill-black-200 mr-2" />
            Ideal: <strong>{idealEffort}</strong>
          </p>
        )}
        {isMentorshipAvailable && (
          <p>
            <UsersIcon className="inline-block mr-2 text-black-200" />
            Mentorship & pairing available
          </p>
        )}
        {automatedDevEnvironment && (
          <p>
            <ToolsIcon className="inline-block mr-2 text-black-200" />
            <a href={automatedDevEnvironment} target="_blank">
              Automated dev environment available
            </a>
          </p>
        )}
      </div>
    </article>
  );
};

export default ContributionOverview;
