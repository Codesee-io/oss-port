import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import { Project } from "../types";
import RootLayout from "../components/RootLayout";
import { Helmet } from "react-helmet";
import LocalSearch from "../components/local-search/LocalSearch";
import Logo from "../images/Logo";

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
      allLanguages: {
        fieldValue: string;
        totalCount: number;
      }[];
      allTags: {
        fieldValue: string;
        totalCount: number;
      }[];
      allSeeking: {
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
      <div className="max-w-7xl mx-auto pt-12 px-2">
        <Logo className="mx-auto w-32 lg:w-52 max-w-full mb-6" />
        <h1 className="text-black-500 font-accent text-3xl lg:text-4xl text-center mb-4">
          Welcome to OSS Port
        </h1>
        <p className="text-black-300 text-center mb-6 mt-2">
          Helping contributors and maintainers
          <br />
          find each other and onboard better.
        </p>
      </div>
      <LocalSearch
        searchIndex={searchIndex}
        allProjects={allProjects.nodes}
        githubDataSet={githubDataSet}
        allLanguages={allProjects.allLanguages.map((lang) => lang.fieldValue)}
        allTags={allProjects.allTags.map((tag) => tag.fieldValue)}
        allSeeking={allProjects.allSeeking.map(seek => seek.fieldValue)}
      />
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query AllProjectList {
    # Get a list of all the projects
    allProjects: allMdx {
      allLanguages: group(field: frontmatter___languages) {
        fieldValue
        totalCount
      }
      allTags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      allSeeking: group(field: frontmatter___currentlySeeking) {
        fieldValue
        totalCount
      }
      nodes {
        id
        slug
        frontmatter {
          name
          languages
          tags
          currentlySeeking
          repoUrl
          websiteUrl
          twitterUrl
          description
          avatar {
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 48
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default HomeTemplate;
