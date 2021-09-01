import React, { FunctionComponent } from "react";
import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided } from "react-instantsearch-core";
import ClickableTag from "../ClickableTag";

const FilterByTag: FunctionComponent<RefinementListProvided> = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}) => {
  const toggleRefineTag = (tag: string) => {
    if (items.find((item) => item.label === tag).isRefined) {
      refine([]);
    } else refine([tag]);
  };

  // Algolia likes to reorder the tags, so we sort them to prevent that
  const orderedTags = items.sort((itemA, itemB) => {
    if (itemA.label > itemB.label) {
      return 1;
    } else if (itemA.label < itemB.label) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="space-x-2 text-center mb-12">
      {orderedTags.map((item) => (
        <ClickableTag
          isActive={item.isRefined}
          key={item.objectID}
          tag={item.label}
          onClick={toggleRefineTag}
        />
      ))}
    </div>
  );
};

export default connectRefinementList(FilterByTag);
