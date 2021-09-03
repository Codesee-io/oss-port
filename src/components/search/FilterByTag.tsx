import React, { FunctionComponent } from "react";
import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided } from "react-instantsearch-core";
import ClickableTag from "../ClickableTag";

type Props = RefinementListProvided & {
  allTags: string[];
};

const FilterByTag: FunctionComponent<Props> = ({ items, refine, allTags }) => {
  const toggleRefineTag = (tag: string) => {
    const matchingItem = items.find(
      (item) => item.label.toLowerCase() === tag.toLowerCase()
    );
    if (matchingItem?.isRefined) {
      refine([]);
    } else refine([tag]);
  };

  const itemsMap = new Map(items.map((item) => [item.label, item.isRefined]));

  return (
    <div className="space-x-2 text-center mb-12">
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
