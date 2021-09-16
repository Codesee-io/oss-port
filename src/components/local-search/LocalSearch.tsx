import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { SearchIndexItem } from "../../templates/HomeTemplate";
import { Search } from "js-search";
import { Project } from "../../types";
import ProjectListWrapper from "./ProjectListWrapper";
import ProjectCard from "../ProjectCard";
import SearchInput from "./SearchInput";
import TagFilters from "./TagFilters";

type Props = {
  searchIndex: SearchIndexItem[];
  allProjects: Project[];
  githubDataSet: any; // TODO type this lad
  allLanguages: string[];
  allTags: string[];
  allSeeking: string[];
};

type Filters = {
  search: string;
  tags: string[];
  languages: string[];
  seeking: string[];
};

const LocalSearch: FunctionComponent<Props> = ({
  searchIndex,
  allProjects,
  githubDataSet,
  allLanguages,
  allTags,
  allSeeking,
}) => {
  const projectSearch = useRef<Search>();
  const [filters, setFilters] = useState<Filters>({
    search: "",
    tags: [],
    languages: [],
    seeking: [],
  });

  useEffect(function buildSearchIndex() {
    const search = new Search("id"); // `id` is the unique identifier for search results
    search.addIndex("name");
    search.addIndex("languages");
    search.addIndex("tags");
    search.addIndex("description");

    search.addDocuments(searchIndex);

    projectSearch.current = search;
  }, []);

  const performSearch = (searchValue: string) => {
    setFilters((prev) => ({ ...prev, search: searchValue.trim() }));
  };

  const filterByTag = (tags: string[]) => {
    setFilters((prev) => ({ ...prev, tags }));
  };

  const filterByLanguage = (languages: string[]) => {
    setFilters((prev) => ({ ...prev, languages }));
  };

  const filterBySeeking = (seeking: string[]) => {
    setFilters((prev) => ({...prev, seeking}))
  }

  // Filter projects
  let filteredProjects = [...allProjects];
  if (
    filters.languages.length + 
    filters.tags.length +
    filters.seeking.length > 0
  ) {
    filteredProjects = allProjects.filter((project) => {
      // Only show projects that include ALL the tags
      const langs = project.frontmatter.languages || [];
      const tags = project.frontmatter.tags || [];
      const seeking = project.frontmatter.currentlySeeking || [];
      const hasAllTags = filters.tags.every((tag) => tags.includes(tag));
      const hasAllLangs = filters.languages.every((lang) =>
        langs.includes(lang)
      );
      const hasAllSeeking = filters.seeking.every((seek) => 
        seeking.includes(seek)
      );

      return hasAllTags && hasAllLangs && hasAllSeeking;
    });
  }

  if (filters.search.length > 0) {
    const searchProjects = projectSearch.current.search(
      filters.search
    ) as Project[];
    const matchingProjectIds = searchProjects.map((project) => project.id);

    filteredProjects = filteredProjects.filter((project) =>
      matchingProjectIds.includes(project.id)
    );
  }

  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-2 mb-12">
        <SearchInput refine={performSearch} />
        <TagFilters tags={allLanguages} refine={filterByLanguage} />
        <TagFilters tags={allTags} refine={filterByTag} />
        <TagFilters tags={allSeeking} refine={filterBySeeking} />
      </div>
      <ProjectListWrapper>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            id={project.id}
            frontmatter={project.frontmatter}
            slug={project.slug}
            githubData={githubDataSet[project.slug]}
          />
        ))}
      </ProjectListWrapper>
      {filteredProjects.length === 0 && (
        <div className="text-center px-4">
          <h3 className="text-black-500 text-2xl font-semibold mb-4">
            No results
          </h3>
          <p className="text-black-300">
            No projects matched your search. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default LocalSearch;
