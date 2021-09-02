import React, { FunctionComponent } from "react";
import { ProjectFrontmatter } from "../types";
import TwitterIcon from "./icons/TwitterIcon";
import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";

type Props = {
  frontmatter: ProjectFrontmatter;
};

const RepoLinks: FunctionComponent<Props> = ({ frontmatter }) => {
  return (
    <div className="flex-grow md:mr-4">
      <p className="text-black-300 mb-6 flex-grow">{frontmatter.description}</p>
      <div className="flex space-x-4 mb-8">
        <a
          target="_blank"
          className="text-black-300 hover:text-primary-400"
          href={frontmatter.repoUrl}
        >
          <MarkGithubIcon size={24} />
        </a>
        {frontmatter.twitterUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={frontmatter.twitterUrl}
          >
            <TwitterIcon />
          </a>
        )}
        {frontmatter.websiteUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={frontmatter.websiteUrl}
          >
            <LinkIcon size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default RepoLinks;
