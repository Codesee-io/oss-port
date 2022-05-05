import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "./ProjectContext";
import FormattedLink from "./markdown/FormattedLink";

const Maps: FunctionComponent = () => {
  const { frontmatter, mapsMetadata } = useContext(ProjectContext);
  const maps = frontmatter.maps || [];

  if (!maps.length) return null;

  return (
    <section>
      <h2 className="markdown-element mt-4">Our CodeSee Maps</h2>
      <div className="md:flex md:space-x-4">
        <ul className="md:flex gap-2 m-0 p-0">
          {maps.map(({ url, description, subTitle }, i) => (
            <li
              key={`map-${i}`}
              className="p-4 bg-white mb-2"
              style={{
                width: 300,
              }}
            >
              <div className="flex justify-center">
                <FormattedLink href={url}>
                  {mapsMetadata[i] ? (
                    <img
                      src={mapsMetadata[i].thumbnail}
                      width="260"
                      height="150"
                      className="object-cover rounded"
                    />
                  ) : (
                    <div
                      className="bg-gray-50 rounded flex items-center justify-center text-sm text-center"
                      style={{ height: 150, width: 260 }}
                    >
                      [placeholder will be filled in production]
                    </div>
                  )}
                </FormattedLink>
              </div>
              <h3 className="text-black-500 font-bold mt-4">{description}</h3>
              {subTitle && (
                <span className="text-black-500 text-sm font-normal">
                  {subTitle}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Maps;
