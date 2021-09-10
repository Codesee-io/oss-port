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
  allTags: string[];
};

type Filters = {
  search: string;
  tags: string[];
};

const LocalSearch: FunctionComponent<Props> = ({
  searchIndex,
  allProjects,
  githubDataSet,
  allTags,
}) => {
  const projectSearch = useRef<Search>();
  const [filters, setFilters] = useState<Filters>({
    search: "",
    tags: [],
  });

  useEffect(function buildSearchIndex() {
    const search = new Search("id"); // `id` is the unique identifier for search results
    search.addIndex("name");
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

  // Filter projects
  let filteredProjects = [...allProjects];
  if (filters.tags.length > 0) {
    filteredProjects = allProjects.filter((project) => {
      // Only show projects that include ALL the tags
      const tags = project.frontmatter.tags;
      const hasAllTags = filters.tags.every((tag) => tags.includes(tag));

      return hasAllTags;
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
    <div>
      <SearchInput refine={performSearch} />
      <TagFilters tags={allTags} refine={filterByTag} />
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
    </div>
  );
};

export default LocalSearch;
