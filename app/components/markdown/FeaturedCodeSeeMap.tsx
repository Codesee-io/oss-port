import type { FC } from "react";
import type { Project } from "~/types";

type Props = {
  organization: string;
  featuredMap: Project["attributes"]["featuredMap"];
  featuredMapMetadata: any;
};

const FeaturedCodeSeeMap: FC<Props> = ({
  featuredMapMetadata,
  featuredMap,
  organization,
}) => {
  if (!featuredMap?.url) {
    return null;
  }

  return (
    <article
      className="bg-white p-4 sm:flex max-w-full mb-4"
      style={{ width: 624 }}
    >
      <a
        href={featuredMap.url}
        target="_blank"
        rel="noreferrer"
        className="block"
        style={{ minWidth: 260 }}
      >
        <img
          src={
            featuredMapMetadata.thumbnail ||
            "https://app.codesee.io/sample_map.svg"
          }
          width="260"
          height="150"
          className="object-cover rounded"
          alt="CodeSee map of this codebase"
        />
      </a>
      <div className="sm:pl-8 mt-6 sm:mt-0 text-black-500">
        <a
          href={featuredMap.url}
          className="font-bold text-lg supports-hover:hover:text-blue-500 leading-4 mb-2"
        >
          {featuredMapMetadata.name || "CodeSee Map"}
        </a>
        <div className="text-xs mb-2">{organization}</div>
        <div className="text-sm">
          {featuredMap.description ||
            "Get a quick visual overview of the major areas of our repo!"}
        </div>
      </div>
    </article>
  );
};

export default FeaturedCodeSeeMap;
