import { SearchIcon } from "@primer/octicons-react";
import React, { FunctionComponent } from "react";
import debouncePromise from "../../utils/debouncePromise";
import useSearch from "./useSearch";

type Props = {
  debounceDelay?: number;
};

const SearchInput: FunctionComponent<Props> = ({ debounceDelay = 300 }) => {
  const { searchByText } = useSearch();
  const debounceRefine = debouncePromise(searchByText, debounceDelay);
  const onSubmit = (e: React.SyntheticEvent) => e.preventDefault();

  return (
    <form
      className="relative max-w-full"
      style={{ width: 500 }}
      onSubmit={onSubmit}
    >
      <label className="hidden" aria-hidden htmlFor="search">
        Search for open-source projects
      </label>
      <input
        id="search"
        type="search"
        className="border border-black-100 bg-black-50 rounded p-2 pl-9 block text-black-300 text-sm w-full appearance-none focus:bg-white"
        placeholder="Find your next open-source project"
        onChange={(e) => debounceRefine(e.target.value)}
      />
      <SearchIcon
        size={16}
        className="absolute top-1/2 -mt-2 left-3 text-black-200 pointer-events-none"
      />
    </form>
  );
};

export default SearchInput;
