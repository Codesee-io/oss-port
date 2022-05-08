import React, { FunctionComponent } from "react";
import cx from "classnames";
import BookIcon from "./icons/BookIcon";
import HomeIcon from "./icons/HomeIcon";
import CodeIcon from "./icons/CodeIcon";

type TabProps = {
  isActive?: boolean;
  href: string;
};

const Tab: FunctionComponent<TabProps> = ({ children, isActive, href }) => {
  return (
    <a
      href={href}
      className={cx(
        "text-black-500 px-3 py-1 inline-flex items-center border-b-2 border-transparent -mb-px",
        {
          "border-black-500 font-semibold": isActive,
          "supports-hover:hover:border-blue-500": !isActive,
        }
      )}
    >
      {children}
    </a>
  );
};

type ProjectTabProps = {
  hasOverviewTab: boolean;
  hasContributingTab: boolean;
  hasLearnTab: boolean;
};

const ProjectTabs: FunctionComponent<ProjectTabProps> = ({
  hasOverviewTab,
  hasContributingTab,
  hasLearnTab,
}) => {
  if (!hasOverviewTab && !hasContributingTab && !hasLearnTab) {
    return null;
  }

  return (
    <div className="border-b border-black-100 space-x-2 mb-8">
      {hasOverviewTab && (
        <Tab href="#overview">
          <HomeIcon className="w-4 h-4 mr-2" /> Overview
        </Tab>
      )}
      {hasContributingTab && (
        <Tab href="#contributing">
          <CodeIcon className="w-4 h-4 mr-2" /> Contributing
        </Tab>
      )}
      {hasLearnTab && (
        <Tab href="#learn">
          <BookIcon className="w-4 h-4 mr-2" /> Learn
        </Tab>
      )}
    </div>
  );
};

export default ProjectTabs;
