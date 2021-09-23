import React, { FunctionComponent } from "react";
import SlidersIcon from "../icons/SlidersIcon";

type Props = {
  onClick: () => void;
  numFilters: number;
};

const SidebarButton: FunctionComponent<Props> = ({ onClick, numFilters }) => (
  <button
    onClick={onClick}
    className="bg-aqua-500 flex items-center justify-center shadow-menu text-white w-12 h-12 rounded-full fixed bottom-6 right-6 z-20 md:hidden"
  >
    <SlidersIcon className="w-7 h-7" />
    {numFilters > 0 && (
      <div
        className="bg-magenta-500 px-1 font-semibold text-xs text-white rounded-lg absolute top-0 -right-1"
        style={{ minWidth: 16 }}
      >
        {numFilters}
      </div>
    )}
  </button>
);

export default SidebarButton;
