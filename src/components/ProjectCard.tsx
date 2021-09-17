import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Tag from "./Tag";
import { GitHubMetric, Project } from "../types";
import RepoStats from "./RepoStats";
import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import TwitterIcon from "./icons/TwitterIcon";
import ProjectAvatar from "./ProjectAvatar";
import MapIcon from "./icons/MapIcon";

type Props = Project & {
  githubData?: {
    prsMerged: GitHubMetric;
    prsCreated: GitHubMetric;
    contributors: GitHubMetric;
  };
};

const ProjectCard: FunctionComponent<Props> = ({
  id,
  frontmatter,
  slug,
  githubData,
}) => {
  const badges = [
    ...(frontmatter.languages || []),
    ...(frontmatter.tags || []),
  ];

  return (
    <div className="p-4 bg-white relative flex flex-col" key={id}>
      {/* The container below should take up as much vertical space as possible
      so that the GitHub stats are vertically-aligned in a row even when the
      number of tag varies between projects. */}
      <div className="flex-grow">
        {frontmatter.avatar && (
          <div className="absolute -left-2 -top-3">
            <ProjectAvatar
              image={frontmatter.avatar}
              alt={frontmatter.name}
              size={48}
            />
          </div>
        )}
        <h3 className="font-bold text-black-500 pl-8">
          <Link to={slug} className="supports-hover:hover:text-blue-400">
            {frontmatter.name}
          </Link>
        </h3>
        {frontmatter.description && (
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
            {frontmatter.description}
          </p>
        )}
        <div className="mt-3 flex space-x-2">
          <a
            href={frontmatter.repoUrl}
            target="_blank"
            title="Visit this repository"
            rel="noopener"
            className="text-black-300 supports-hover:hover:text-blue-400 p-1"
          >
            <MarkGithubIcon size={20} />
          </a>
          {frontmatter.featuredMap?.url && (
            <a
              href={frontmatter.featuredMap.url}
              target="_blank"
              title={
                frontmatter.featuredMap.description ||
                "View this project's CodeSee map"
              }
              rel="noopener"
              className="text-black-300 supports-hover:hover:text-blue-400 p-1"
            >
              <MapIcon width={20} />
            </a>
          )}
          {frontmatter.websiteUrl && (
            <a
              href={frontmatter.websiteUrl}
              target="_blank"
              title="Visit this project's website"
              rel="noopener"
              className="text-black-300 supports-hover:hover:text-blue-400 p-1"
            >
              <LinkIcon size={20} />
            </a>
          )}
          {frontmatter.twitterUrl && (
            <a
              href={frontmatter.twitterUrl}
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
            <Tag tag={badge} key={badge} className="mr-2 mb-2" />
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
