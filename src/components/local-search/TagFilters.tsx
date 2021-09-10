import React, { FunctionComponent, useState } from "react";
import ClickableTag from "../ClickableTag";

type Props = {
  tags: string[];
  refine: (tags: string[]) => void;
};

const TagFilters: FunctionComponent<Props> = ({ tags, refine }) => {
  const [currentFilters, setCurrentFilters] = useState<string[]>([]);

  const toggleRefineTag = (tag: string) => {
    let updatedFilters: string[];
    if (currentFilters.includes(tag)) {
      updatedFilters = currentFilters.filter((filter) => filter !== tag);
    } else {
      updatedFilters = [...currentFilters, tag];
    }

    setCurrentFilters(updatedFilters);
    refine(updatedFilters);
  };

  return (
    <div className="space-x-2 space-y-2 text-center mb-12">
      {tags.map((item) => (
        <ClickableTag
          isActive={currentFilters.includes(item)}
          key={item}
          tag={item}
          onClick={toggleRefineTag}
        />
      ))}
    </div>
  );
};

export default TagFilters;
