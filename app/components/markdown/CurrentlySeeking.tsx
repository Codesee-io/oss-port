import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";
import Tag from "../Tag";

const CurrentlySeeking: FunctionComponent = () => {
  const { frontmatter } = useContext(ProjectContext);

  if (!frontmatter?.currentlySeeking) {
    return null;
  }

  return (
    <article className="bg-white p-4 max-w-full mb-4" style={{ width: 300 }}>
      <h3 className="text-black-500 font-bold mb-4">Currently seeking</h3>

      {frontmatter.currentlySeeking.map((item) => (
        <Tag tag={item} key={item} className="mr-2 mb-2" />
      ))}
    </article>
  );
};

export default CurrentlySeeking;
