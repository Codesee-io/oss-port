import { createContext } from "react";

type SearchContext = {
  filteredProjectIds: string[];
  allActiveTags: string[];
  filterByTag: (tag: string) => void;
  searchByText: (search: string) => void;
};

const SearchResultsContext = createContext<SearchContext>({
  filteredProjectIds: [],
  allActiveTags: [],
  filterByTag: () => null,
  searchByText: () => null,
});

export const SearchResultsProvider = SearchResultsContext.Provider;
export default SearchResultsContext;
