import type { FC } from "react";
import { GitPullRequestIcon, ClockIcon } from "@primer/octicons-react";
import ToolsIcon from "../icons/ToolsIcon";
import UsersIcon from "../icons/UsersIcon";
import InfoIcon from "../icons/InfoIcon";
import type { Project } from "~/types";

type Props = {
  contributionOverview: Project["attributes"]["contributionOverview"];
};

const ContributionOverview: FC<Props> = ({ contributionOverview }) => {
  if (!contributionOverview) {
    return null;
  }

  const {
    mainLocation,
    isMentorshipAvailable,
    automatedDevEnvironment,
    idealEffort,
    extras,
  } = contributionOverview;

  return (
    <article className="bg-white p-4 max-w-full mb-4" style={{ width: 300 }}>
      <h3 className="text-black-500 font-bold mb-4">Contribution overview</h3>
      <div className="text-black-500 text-sm space-y-2">
        {mainLocation && (
          <p className="flex items-center">
            <ClockIcon size={16} className="fill-black-200 mr-2" />
            Most contributors are in&nbsp;<strong>{mainLocation}</strong>
          </p>
        )}
        {idealEffort && (
          <p className="flex items-center">
            <GitPullRequestIcon size={16} className="fill-black-200 mr-2" />
            Ideal:&nbsp;<strong>{idealEffort}</strong>
          </p>
        )}
        {isMentorshipAvailable && (
          <p className="flex items-center">
            <UsersIcon className="inline-block mr-2 text-black-200" />
            Mentorship & pairing available
          </p>
        )}
        {automatedDevEnvironment && (
          <p className="flex items-center">
            <ToolsIcon className="inline-block mr-2 text-black-200" />
            <a href={automatedDevEnvironment} target="_blank">
              Automated dev environment available
            </a>
          </p>
        )}
        {extras &&
          extras.map((extra, index) => (
            <p key={`extra-${index}`} className="flex items-center">
              <InfoIcon className="inline-block w-4 h-4 mr-2 text-black-200" />
              {extra}
            </p>
          ))}
      </div>
    </article>
  );
};

export default ContributionOverview;
