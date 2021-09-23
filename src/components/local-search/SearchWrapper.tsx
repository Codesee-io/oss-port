import { Search } from "js-search";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { SearchIndexItem } from "../../templates/HomeTemplate";
import { Project } from "../../types";
import { SearchResultsProvider } from "./SearchResultsContext";

type Props = {
  searchIndex: SearchIndexItem[];
  allProjects: Project[];
};

type Filters = {
  search: string;
  tags: string[];
};

const SearchWrapper: FunctionComponent<Props> = ({
  searchIndex,
  allProjects,
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    tags: [],
  });

  const projectSearch = useRef<Search>();
  const [filteredProjectIds, setFilteredProjectIds] = useState(
    allProjects.map((project) => project.id)
  );

  useEffect(
    function buildSearchIndex() {
      const search = new Search("id"); // `id` is the unique identifier for search results
      search.addIndex("name");
      search.addIndex("languages");
      search.addIndex("tags");
      search.addIndex("description");

      search.addDocuments(searchIndex);

      projectSearch.current = search;
    },
    [searchIndex]
  );

  const performSearch = (searchValue: string) => {
    updateSearchResults(searchValue.trim(), filters.tags);
  };

  const filterByTag = (tag: string) => {
    let newTagList: string[];
    if (filters.tags.includes(tag)) {
      newTagList = filters.tags.filter((t) => t !== tag);
    } else {
      newTagList = [...filters.tags, tag];
    }

    // Toggle tags in our list
    if (newTagList.includes) updateSearchResults(filters.search, newTagList);
  };

  /**
   * Perform the search and cache the results
   */
  const updateSearchResults = (newSearchValue: string, newTags: string[]) => {
    // Filter projects
    let filteredProjects = [...allProjects];

    if (newTags.length > 0) {
      filteredProjects = allProjects.filter((project) => {
        // Only show projects that include ALL the tags
        const projectLangs = project.frontmatter.languages || [];
        const projectTags = project.frontmatter.tags || [];
        const projectSeeking = project.frontmatter.currentlySeeking || [];

        const allTagsForProject = [
          ...projectLangs,
          ...projectTags,
          ...projectSeeking,
        ];

        const projectHasAllTags = newTags.every((filteredTag) =>
          allTagsForProject.includes(filteredTag)
        );

        return projectHasAllTags;
      });
    }

    if (newSearchValue.length > 0) {
      const searchProjects = projectSearch.current.search(
        newSearchValue
      ) as Project[];

      const matchingProjectIds = searchProjects.map((project) => project.id);
      filteredProjects = filteredProjects.filter((project) =>
        matchingProjectIds.includes(project.id)
      );
    }

    // Update the state
    setFilteredProjectIds(filteredProjects.map((project) => project.id));
    setFilters({
      search: newSearchValue,
      tags: newTags,
    });
  };

  return (
    <SearchResultsProvider
      value={{
        searchByText: performSearch,
        filterByTag,
        filteredProjectIds,
        allActiveTags: filters.tags,
      }}
    >
      {children}
    </SearchResultsProvider>
  );
};

export default SearchWrapper;
