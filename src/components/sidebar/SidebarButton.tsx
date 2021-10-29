import React, { FunctionComponent } from "react";
import SlidersIcon from "../icons/SlidersIcon";

type Props = {
  onClick: () => void;
  numFilters: number;
};

const SidebarButton: FunctionComponent<Props> = ({ onClick, numFilters }) => (
  <button
    onClick={onClick}
    style={{ minWidth: "3rem" }}
    name="Show the filters"
    className="bg-aqua-500 flex items-center justify-center shadow-menu text-white md:px-6 h-12 rounded-full fixed bottom-6 md:bottom-10 right-6 z-20 supports-hover:hover:bg-aqua-700"
  >
    <span className="hidden md:inline-block tracking-wide mr-4 font-semibold">
      Filters
    </span>
    <SlidersIcon className="w-7 h-7 md:w-5 md:h-5" />
    {numFilters > 0 && (
      <span
        className="bg-magenta-500 block px-1 font-semibold text-xs text-white rounded-lg absolute top-0 -right-1"
        style={{ minWidth: 16 }}
      >
        {numFilters}
      </span>
    )}
  </button>
);

export default SidebarButton;
