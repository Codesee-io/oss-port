import React, { FC } from "react";
import SlidersIcon from "./icons/SlidersIcon";
import useSearch from "./local-search/useSearch";
import SecondaryButton from "./SecondaryButton";

type Props = {
  onClick: () => void;
};

const ToggleFiltersButton: FC<Props> = (props) => {
  const { allActiveTags } = useSearch();

  let label = "";
  if (allActiveTags.length > 0) {
    label = allActiveTags.length.toString();
  }
  return (
    <SecondaryButton {...props} className="inline-flex items-center space-x-2">
      <SlidersIcon className="w-4 h-4" />
      <span>Filters</span>
      {label && (
        <span
          className="inline-block bg-magenta-500 px-1 right-2 font-semibold text-xs text-white rounded-lg"
          style={{ minWidth: 16 }}
        >
          {label}
        </span>
      )}
    </SecondaryButton>
  );
};

export default ToggleFiltersButton;
