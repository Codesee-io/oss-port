import type { FC } from "react";
import type { Project } from "~/types";
import Tag from "../Tag";

type Props = {
  currentlySeeking: Project["attributes"]["currentlySeeking"];
};

const CurrentlySeeking: FC<Props> = ({ currentlySeeking }) => {
  if (!currentlySeeking) {
    return null;
  }

  return (
    <article className="bg-white p-4 max-w-full mb-4" style={{ width: 300 }}>
      <h3 className="text-black-500 font-bold mb-4">Currently seeking</h3>
      {currentlySeeking.map((item) => (
        <Tag tag={item} key={item} className="mr-2 mb-2" />
      ))}
    </article>
  );
};

export default CurrentlySeeking;
