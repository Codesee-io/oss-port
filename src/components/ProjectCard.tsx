import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Tag from "./Tag";
import { Project } from "../types";

const ProjectCard: FunctionComponent<Project> = ({ id, frontmatter, slug }) => {
  return (
    <div className="p-4 bg-white relative" key={id}>
      {frontmatter.avatar && (
        <img
          src={frontmatter.avatar.publicURL}
          className="w-12 h-12 rounded-full absolute -right-2 -top-2"
        />
      )}
      <h3 className="font-bold text-black-500">
        <Link to={slug}>{frontmatter.name}</Link>
      </h3>
      <a href={frontmatter.repoUrl} target="_blank">
        Repo
      </a>
      <div className="mt-4">
        {frontmatter.tags.map((language) => (
          <Tag tag={language} key={language} className="mr-2 mb-2" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
