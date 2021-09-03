import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import algoliasearch from "algoliasearch/lite";
import ProjectSearchInput from "../components/search/ProjectSearchInput";
import { InstantSearch } from "react-instantsearch-dom";
import FilterByTag from "../components/search/FilterByTag";
import ProjectList from "../components/search/ProjectList";
import { Project } from "../types";
import RootLayout from "../components/RootLayout";

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
      allTags: {
        fieldValue: string;
        totalCount: number;
      }[];
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
    <RootLayout>
      <div className="max-w-7xl mx-auto py-12 px-2">
        <h1 className="text-black-500 font-bold text-4xl text-center mb-4">
          Welcome to the OSS Port
        </h1>
        <h2 className="text-black-300 uppercase text-center font-medium text-lg">
          Contribute <span className="opacity-50">&bull;</span> Maintain{" "}
          <span className="opacity-50">&bull;</span> Impact
        </h2>
        <p className="text-black-300 text-center mb-6">
          the open-source communities you care about
        </p>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <ProjectSearchInput />
          <FilterByTag
            attribute="frontmatter.tags"
            allTags={allProjects.allTags.map((tag) => tag.fieldValue)}
          />

          <ProjectList
            allProjects={allProjects.nodes}
            githubDataSet={githubDataSet}
          />
        </InstantSearch>
      </div>
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query AllProjectList {
    # Get a list of all the projects
    allProjects: allMdx {
      allTags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        id
        slug
        frontmatter {
          name
          tags
          repoUrl
          websiteUrl
          twitterUrl
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
