import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

const ProjectSearchInput = connectSearchBox(
  ({ refine, currentRefinement, onBlur, onFocus }) => {
    return (
      <form className="mb-8">
        <input
          type="search"
          className="mx-auto border border-black-100 bg-black-50 rounded p-2 block mb-8 text-black-300 text-sm w-60"
          placeholder="Find an open-source project"
          onChange={(e) => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
      </form>
    );
  }
);

export default ProjectSearchInput;
