import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";

const FeaturedCodeSeeMap: FunctionComponent = () => {
  const { featuredMapMetadata, frontmatter } = useContext(ProjectContext);

  if (!featuredMapMetadata) {
    return null;
  }

  const [organization, mapName] = featuredMapMetadata.name.split("/");

  return (
    <article
      className="bg-white p-4 sm:flex max-w-full mb-4"
      style={{ width: 550 }}
    >
      <a
        href={frontmatter.featuredMapUrl}
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
          href={frontmatter.featuredMapUrl}
          className="font-bold text-lg hover:text-blue-500"
        >
          {mapName}
        </a>
        <div className="text-xs mb-2">{organization}</div>
        <div className="text-sm">
          Get a quick overview of the major areas of our repo! Take the tour on
          this map to discover our current areas of focus.
        </div>
      </div>
    </article>
  );
};

export default FeaturedCodeSeeMap;
