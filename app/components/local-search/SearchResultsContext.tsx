import { createContext } from "react";

type SearchContext = {
  filteredProjectIds: string[];
  allActiveTags: string[];
  clearAllTags: () => void;
  filterByTag: (tag: string) => void;
  searchByText: (search: string) => void;
};

const SearchResultsContext = createContext<SearchContext>(undefined);

export const SearchResultsProvider = SearchResultsContext.Provider;
export default SearchResultsContext;
