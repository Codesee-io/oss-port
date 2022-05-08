import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo, useState } from "react";

import type { GitHubData, Project, ProjectCategory } from "~/types";
import { HOW_TO_LIST_PROJECT_URL } from "../utils/constants";
import {
  generateSearchIndex,
  getProjects,
  getProjectsMetadata,
} from "~/projects.server";
import { getGitHubData } from "~/github.server";
import Logo from "~/images/Logo";
import SearchWrapper from "~/components/local-search/SearchWrapper";
import ProjectList from "~/components/ProjectList";
import SearchInput from "~/components/local-search/SearchInput";
import SidebarWithFilters from "~/components/SidebarWithFilters";
import ToggleFiltersButton from "~/components/ToggleFiltersButton";
import CallToAction from "~/components/CallToAction";
import RootLayout from "~/components/RootLayout";

import projectsStyles from "~/styles/projects-list.css";

export function links() {
  return [{ rel: "stylesheet", href: projectsStyles }];
}

export const meta: MetaFunction = () => ({
  title: "OSS Port | Find open-source projects",
});

export const loader: LoaderFunction = async () => {
  const projects = getProjects();

  const searchIndex = generateSearchIndex();

  const helpfulness = projects.reduce((prev, current) => {
    return { ...prev, [current.slug]: 0 };
  }, {});

  const { allLanguages, allTags, allSeeking } = getProjectsMetadata();
  const githubData = getGitHubData();

  const payload: LoaderData = {
    projects,
    searchIndex,
    helpfulness,
    allLanguages,
    allTags,
    allSeeking,
    githubData,
  };

  return json(payload);
};

type LoaderData = {
  projects: Project[];
  searchIndex: any;
  helpfulness: any;
  allLanguages: ProjectCategory[];
  allTags: ProjectCategory[];
  allSeeking: ProjectCategory[];
  githubData: { [key: string]: GitHubData };
};

export default function Index() {
  const {
    projects,
    searchIndex,
    helpfulness,
    allLanguages,
    allTags,
    allSeeking,
    githubData,
  } = useLoaderData<LoaderData>();

  const [showSidebar, setShowSidebar] = useState(false);

  const tags = useMemo(() => {
    return {
      allLanguages: allLanguages.map((lang) => lang.fieldValue).sort(),
      allTags: allTags.map((lang) => lang.fieldValue).sort(),
      allSeeking: allSeeking.map((lang) => lang.fieldValue).sort(),
    };
  }, [allLanguages, allSeeking, allTags]);

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto pt-12 px-2">
        <Logo className="mx-auto w-32 lg:w-52 max-w-full mb-6" />
        <h1 className="text-black-500 font-accent text-3xl lg:text-4xl text-center mb-4">
          Welcome to OSS Port
        </h1>
        <p className="text-black-500 text-center mb-6 mt-2">
          Connecting 100,000+ potential contributors with maintainers.
          <br />
          Helping all onboard better.
        </p>
      </div>
      <div className="mb-6 text-center">
        <CallToAction
          href={HOW_TO_LIST_PROJECT_URL}
          rel="noopener"
          target="_blank"
        >
          List Your Project
        </CallToAction>
      </div>
      <SearchWrapper searchIndex={searchIndex} allProjects={projects}>
        <div className="max-w-5xl space-x-4 flex justify-center mx-auto px-2 mb-4">
          <SearchInput />
        </div>
        <div className="filters-wrapper">
          <ToggleFiltersButton onClick={() => setShowSidebar(true)} />
        </div>
        <div className="mx-auto" style={{ maxWidth: 1600 }}>
          <ProjectList
            allProjects={projects}
            githubDataSet={githubData}
            helpfulnessDataSet={helpfulness}
          />
          <SidebarWithFilters
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            allLanguages={tags.allLanguages}
            allTags={tags.allTags}
            allSeeking={tags.allSeeking}
          />
        </div>
      </SearchWrapper>
    </RootLayout>
  );
}
