import { useContext } from "react";
import SearchResultsContext from "./SearchResultsContext";

const useSearch = () => useContext(SearchResultsContext);

export default useSearch;
