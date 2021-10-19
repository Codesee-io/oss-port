import React, { FunctionComponent } from "react";
import { ProjectFrontmatter } from "../types";
import TwitterIcon from "./icons/TwitterIcon";
import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import MapIcon from "./icons/MapIcon";

type Props = {
  frontmatter: ProjectFrontmatter;
};

const RepoLinks: FunctionComponent<Props> = ({ frontmatter }) => {
  return (
    <div className="flex-grow md:mr-4">
      <p className="text-black-500 mb-6">{frontmatter.description}</p>
      <div className="flex space-x-4 mb-8">
        <a
          target="_blank"
          className="text-black-300 supports-hover:hover:text-blue-400"
          href={frontmatter.repoUrl}
          title="Visit this repository on GitHub"
        >
          <MarkGithubIcon size={24} />
        </a>
        {frontmatter.featuredMap?.url && (
          <a
            target="_blank"
            className="text-black-300 supports-hover:hover:text-blue-400"
            href={frontmatter.featuredMap.url}
            title={
              frontmatter.featuredMap.description ||
              "View this project's CodeSee map"
            }
          >
            <MapIcon width={24} />
          </a>
        )}
        {frontmatter.twitterUrl && (
          <a
            target="_blank"
            className="text-black-300 supports-hover:hover:text-blue-400"
            href={frontmatter.twitterUrl}
            title="Connect with this community on Twitter"
          >
            <TwitterIcon />
          </a>
        )}
        {frontmatter.websiteUrl && (
          <a
            target="_blank"
            className="text-black-300 supports-hover:hover:text-blue-400"
            href={frontmatter.websiteUrl}
            title="Visit this project's website"
          >
            <LinkIcon size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default RepoLinks;
