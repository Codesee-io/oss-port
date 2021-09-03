import { Helmet } from "react-helmet";
import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Overview from "../components/markdown/Overview";
import Contributing from "../components/markdown/Contributing";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ProjectContextProvider } from "../components/ProjectContext";
import mdxElements from "../components/markdown/mdxElements";
import RepoStats from "../components/RepoStats";
import RepoLinks from "../components/RepoLinks";
import ProjectTabs from "../components/ProjectTabs";

// Make some React components available globally in MDX files
const mdxComponents = {
  ...mdxElements,
  // Make some custom React components available as shortcodes
  Overview,
  Contributing,
} as const;

export default function ProjectTemplate({
  data: { projectData },
  pageContext,
}) {
  const { githubData } = pageContext;

  // Dynamically populate the tabs based on the existing sections
  const hasOverviewTab = projectData.body.includes("mdx(Overview,");
  const hasContributingTab = projectData.body.includes("mdx(Contributing,");
  const hasLearnTab = projectData.body.includes("mdx(Learn,");

  return (
    <main className="max-w-4xl mx-auto py-12 px-2">
      <Helmet title={`OSS Port | ${projectData.frontmatter.name}`} />
      <Link to="/">Home</Link>
      <h1 className="text-black-500 font-bold text-4xl mb-4">
        {projectData.frontmatter.name}
      </h1>
      <div className="md:flex mb-6">
        <RepoLinks frontmatter={projectData.frontmatter} />
        <RepoStats className="bg-white p-4 flex-shrink" stats={githubData} />
      </div>
      <ProjectTabs
        hasContributingTab={hasContributingTab}
        hasOverviewTab={hasOverviewTab}
        hasLearnTab={hasLearnTab}
      />
      <ProjectContextProvider
        value={{ frontmatter: projectData.frontmatter, githubData }}
      >
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{projectData.body}</MDXRenderer>
        </MDXProvider>
      </ProjectContextProvider>
    </main>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    projectData: mdx(slug: { eq: $slug }) {
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
