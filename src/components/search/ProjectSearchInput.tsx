import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { SearchIcon } from "@primer/octicons-react";

/**
 * We don't want to call the Algolia API on every keystroke, so we use this
 * method to wait until either the user is done typing or 300 milliseconds
 * have passed.
 */
function debouncePromise(fn: Function, timeMS: number) {
  let timerId = undefined;

  return function debounced(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    return new Promise((resolve) => {
      timerId = setTimeout(() => resolve(fn(...args)), timeMS);
    });
  };
}

const ProjectSearchInput = connectSearchBox(({ refine }) => {
  const debounceRefine = debouncePromise(refine, 300);

  return (
    <form className="mb-8 relative mx-auto max-w-full" style={{ width: 400 }}>
      <label className="hidden" aria-hidden htmlFor="search">
        Search for open-source projects
      </label>
      <input
        id="search"
        type="search"
        className="mx-auto border border-black-100 bg-black-50 rounded p-2 pl-9 block mb-8 text-black-300 text-sm w-full"
        placeholder="Find your next open-source project"
        onChange={(e) => debounceRefine(e.target.value)}
      />
      <SearchIcon
        size={16}
        className="absolute top-1/2 -mt-2 left-3 text-black-200 pointer-events-none"
      />
    </form>
  );
});

export default ProjectSearchInput;
