import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { SearchIcon } from "@primer/octicons-react";
const ProjectSearchInput = connectSearchBox(({ refine, currentRefinement }) => (
  <form className="mb-8 relative mx-auto max-w-full" style={{ width: 400 }}>
    <label className="hidden" aria-hidden htmlFor="search">
      Search for open-source projects
    </label>
    <input
      id="search"
      type="search"
      className="mx-auto border border-black-100 bg-black-50 rounded p-2 pl-9 block mb-8 text-black-300 text-sm w-full"
      placeholder="Find your next open-source project"
      onChange={(e) => refine(e.target.value)}
      value={currentRefinement}
    />
    <SearchIcon
      size={16}
      className="absolute top-1/2 -mt-2 left-3 text-black-200 pointer-events-none"
    />
  </form>
));

export default ProjectSearchInput;
