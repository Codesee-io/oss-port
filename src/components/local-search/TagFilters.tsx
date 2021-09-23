import React, { FunctionComponent, useState } from "react";
import ClickableTag from "../ClickableTag";
import useSearch from "./useSearch";

type Props = {
  tags: string[];
};

const TagFilters: FunctionComponent<Props> = ({ tags }) => {
  const { filterByTag, allActiveTags } = useSearch();

  return (
    <div className="space-x-2 space-y-2 text-center mb-1">
      {tags.map((item) => (
        <ClickableTag
          isActive={allActiveTags.includes(item)}
          key={item}
          tag={item}
          onClick={filterByTag}
        />
      ))}
    </div>
  );
};

export default TagFilters;
