import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";

const FeaturedCodeSeeMap: FunctionComponent = () => {
  const { featuredMapMetadata, frontmatter, organization } =
    useContext(ProjectContext);

  if (!featuredMapMetadata || !frontmatter?.featuredMap?.url) {
    return null;
  }

  return (
    <article
      className="bg-white p-4 sm:flex max-w-full mb-4"
      style={{ width: 624 }}
    >
      <a
        href={frontmatter.featuredMap.url}
        target="_blank"
        className="block"
        style={{ minWidth: 260 }}
      >
        <img
          src={featuredMapMetadata.thumbnail}
          width="260"
          height="150"
          className="object-cover rounded"
        />
      </a>
      <div className="sm:pl-8 mt-6 sm:mt-0 text-black-500">
        <a
          href={frontmatter.featuredMap.url}
          className="font-bold text-lg supports-hover:hover:text-blue-500 leading-4 mb-2"
        >
          {featuredMapMetadata.name}
        </a>
        <div className="text-xs mb-2">{organization}</div>
        { frontmatter.featuredMap.description &&
          <div className="text-sm">
            {frontmatter.featuredMap.description || ""}
          </div>
        }
      </div>
    </article>
  );
};

export default FeaturedCodeSeeMap;
