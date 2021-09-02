import { Helmet } from "react-helmet";
import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Overview from "../components/markdown/Overview";
import Contributing from "../components/markdown/Contributing";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ProjectFrontmatterContextProvider } from "../components/ProjectFrontmatterContext";
import mdxElements from "../components/markdown/mdxElements";
import RepoStats from "../components/RepoStats";
import RepoLinks from "../components/RepoLinks";

// Make some React components available globally in MDX files
const mdxComponents = {
  ...mdxElements,
  // Make some custom React components available as shortcodes
  Overview,
  Contributing,
} as const;

export default function ProjectTemplate({
  data: { allProjects },
  pageContext,
}) {
  const { githubData } = pageContext;

  return (
    <main className="max-w-4xl mx-auto py-12 px-2">
      <Helmet title={`OSS Port | ${allProjects.frontmatter.name}`} />
      <Link to="/">Home</Link>
      <h1 className="text-black-500 font-bold text-4xl mb-4">
        {allProjects.frontmatter.name}
      </h1>
      <div className="md:flex mb-6">
        <RepoLinks frontmatter={allProjects.frontmatter} />
        <RepoStats stats={githubData} />
      </div>

      <ProjectFrontmatterContextProvider value={allProjects.frontmatter}>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{allProjects.body}</MDXRenderer>
        </MDXProvider>
      </ProjectFrontmatterContextProvider>
    </main>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    allProjects: mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        name
        description
        repoUrl
        websiteUrl
        twitterUrl
        currentlySeeking
        contributionOverview {
          mainLocation
          idealEffort
          isMentorshipAvailable
          automatedDevEnvironment
        }
      }
    }
  }
`;
