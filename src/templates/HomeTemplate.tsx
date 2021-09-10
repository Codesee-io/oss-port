import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import { Project } from "../types";
import RootLayout from "../components/RootLayout";
import { Helmet } from "react-helmet";
import LocalSearch from "../components/local-search/LocalSearch";

export type SearchIndexItem = {
  id: string;
  tags: string[];
  description: string;
  name: string;
};

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
  pageContext: {
    githubDataSet: any; // TODO type this
    searchIndex: SearchIndexItem[];
  };
};

const HomeTemplate: FunctionComponent<Props> = ({
  data: { allProjects },
  pageContext,
}) => {
  const { githubDataSet, searchIndex } = pageContext;

  return (
    <RootLayout>
      <Helmet title="OSS Port | Find open-source projects" />
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
        <LocalSearch
          searchIndex={searchIndex}
          allProjects={allProjects.nodes}
          githubDataSet={githubDataSet}
          allTags={allProjects.allTags.map((tag) => tag.fieldValue)}
        />
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
