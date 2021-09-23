import { useContext } from "react";
import SearchResultsContext from "./SearchResultsContext";

const useSearch = () => {
  return useContext(SearchResultsContext);
};

export default useSearch;
