import { FC } from "react";
import { Link } from "@remix-run/react";
import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import cx from "classnames";
import Tag from "./Tag";
import { GitHubIssueData, GitHubMetric, Project } from "../types";
import RepoStats from "./RepoStats";
import TwitterIcon from "./icons/TwitterIcon";
import ProjectAvatar from "./ProjectAvatar";
import MapIcon from "./icons/MapIcon";

type Props = {
  project: Project;
  githubData?: {
    prsMerged: GitHubMetric;
    prsCreated: GitHubMetric;
    contributors: GitHubMetric;
    hacktoberfestIssues?: GitHubIssueData[];
    helpIssues?: GitHubIssueData[];
  };
  activeTags?: string[];
};

const ProjectCard: FC<Props> = ({ project, githubData, activeTags = [] }) => {
  const { attributes, slug } = project;

  const badges = [...(attributes.languages || []), ...(attributes.tags || [])];

  return (
    <div
      className="p-4 bg-white relative flex flex-col w-full"
      style={{ maxWidth: 400 }}
    >
      {/* The container below should take up as much vertical space as possible
      so that the GitHub stats are vertically-aligned in a row even when the
      number of tag varies between projects. */}
      <div className="flex-grow">
        {!!attributes.avatar && (
          <div className="absolute -left-2 -top-3">
            <ProjectAvatar
              avatar={attributes.avatar}
              alt={attributes.name}
              size={48}
            />
          </div>
        )}
        <h3
          className={cx("font-bold text-black-500", {
            "pl-8": attributes.avatar != null,
          })}
        >
          <Link to={"/" + slug} className="supports-hover:hover:text-blue-400">
            {attributes.name}
          </Link>
        </h3>
        {attributes.description && (
          <p
            className="text-sm text-black-500 mt-2 overflow-hidden"
            style={{
              lineClamp: 3,
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              height: 60,
              maxHeight: 60,
              lineHeight: "20px",
            }}
          >
            {attributes.description}
          </p>
        )}
        <div className="mt-3 flex space-x-2">
          <a
            href={attributes.repoUrl}
            target="_blank"
            title="Visit this repository"
            rel="noopener"
            className="text-black-300 supports-hover:hover:text-blue-400 p-1"
          >
            <MarkGithubIcon size={20} />
          </a>
          {attributes.featuredMap?.url && (
            <a
              href={attributes.featuredMap.url}
              target="_blank"
              title={
                attributes.featuredMap.description ||
                "View this project's CodeSee map"
              }
              rel="noopener"
              className="text-black-300 supports-hover:hover:text-blue-400 p-1"
            >
              <MapIcon width={20} />
            </a>
          )}
          {attributes.websiteUrl && (
            <a
              href={attributes.websiteUrl}
              target="_blank"
              title="Visit this project's website"
              rel="noopener"
              className="text-black-300 supports-hover:hover:text-blue-400 p-1"
            >
              <LinkIcon size={20} />
            </a>
          )}
          {attributes.twitterUrl && (
            <a
              href={attributes.twitterUrl}
              target="_blank"
              title="Visit this project's Twitter feed"
              rel="noopener"
              className="text-black-300 supports-hover:hover:text-blue-400 p-1"
            >
              <TwitterIcon />
            </a>
          )}
        </div>
        <div className="mt-4">
          {badges.map((badge) => (
            <Tag
              tag={badge}
              key={badge}
              className="mr-2 mb-2"
              isActive={activeTags.includes(badge)}
            />
          ))}
        </div>
      </div>
      <div>
        <hr className="border-black-50 -ml-4 -mr-4 mt-2" />
        <RepoStats className="mt-4" stats={githubData} />
      </div>
    </div>
  );
};

export default ProjectCard;
