import type { FC } from "react";
import type { Project } from "~/types";
import FormattedLink from "./markdown/FormattedLink";

type Props = {
  mapsMetadata: any;
  maps: Project["attributes"]["maps"];
};

const Maps: FC<Props> = ({ mapsMetadata, maps = [] }) => {
  if (!maps.length) return null;

  return (
    <section>
      <h3 className="my-4">Our CodeSee Maps</h3>
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
                      src={
                        mapsMetadata[i].thumbnail ||
                        "https://app.codesee.io/sample_map.svg"
                      }
                      width="260"
                      height="150"
                      className="object-cover rounded"
                      alt="Preview of a CodeSee Map"
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
