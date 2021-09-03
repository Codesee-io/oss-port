import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import algoliasearch from "algoliasearch/lite";
import ProjectSearchInput from "../components/search/ProjectSearchInput";
import { InstantSearch } from "react-instantsearch-dom";
import FilterByTag from "../components/search/FilterByTag";
import ProjectList from "../components/search/ProjectList";
import { Helmet } from "react-helmet";
import { Project } from "../types";
import Footer from "../components/Footer";

// TODO disable the search if the env vars are missing
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_API_KEY
);

const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

type Props = {
  data: {
    allProjects: {
      nodes: Project[];
    };
  };
  pageContext: any;
};

const HomeTemplate: FunctionComponent<Props> = ({
  data: { allProjects },
  pageContext,
}) => {
  const { githubDataSet } = pageContext;

  return (
    <>
      <main className="max-w-7xl mx-auto py-12 px-2">
        <Helmet title="OSS Port">
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚓️</text></svg>"
          />
        </Helmet>
        <h1 className="text-black-500 font-bold text-4xl text-center mb-4">
          Explore open source communities
        </h1>
        <h2 className="text-black-300 text-xl text-center mb-6">
          Onboard and contribute to your next project with ease
        </h2>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <ProjectSearchInput />
          <FilterByTag attribute="frontmatter.tags" />

          <ProjectList
            allProjects={allProjects.nodes}
            githubDataSet={githubDataSet}
          />
        </InstantSearch>
      </main>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query AllProjectList {
    # Get a list of all the projects
    allProjects: allMdx {
      nodes {
        id
        slug
        frontmatter {
          name
          tags
          repoUrl
          websiteUrl
          description
          avatar {
            publicURL
          }
        }
      }
    }
  }
`;

export default HomeTemplate;
