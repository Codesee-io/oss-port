import React, { FunctionComponent, useState } from "react";
import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided } from "react-instantsearch-core";
import ClickableTag from "../ClickableTag";

type Props = RefinementListProvided & {
  allTags: string[];
};

const FilterByTag: FunctionComponent<Props> = ({ items, refine, allTags }) => {
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

  const itemsMap = new Map(items.map((item) => [item.label, item.isRefined]));

  return (
    <div className="space-x-2 space-y-2 text-center mb-12">
      {allTags.map((item) => (
        <ClickableTag
          isActive={itemsMap.get(item) || false}
          key={item}
          tag={item}
          onClick={toggleRefineTag}
        />
      ))}
    </div>
  );
};

export default connectRefinementList(FilterByTag);
