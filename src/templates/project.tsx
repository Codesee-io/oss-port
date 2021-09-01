import { Helmet } from "react-helmet";
import React from "react";
import { graphql, Link } from "gatsby";
import TwitterIcon from "../components/icons/TwitterIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkIcon from "../components/icons/LinkIcon";
import { MDXProvider } from "@mdx-js/react";
import Overview from "../components/markdown/Overview";
import Contributing from "../components/markdown/Contributing";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ProjectFrontmatterContextProvider } from "../components/ProjectFrontmatterContext";
import mdxElements from "../components/markdown/mdxElements";

// Make some React components available globally in MDX files
const mdxComponents = {
  ...mdxElements,
  // Make some custom React components available as shortcodes
  Overview,
  Contributing,
} as const;

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <main className="max-w-4xl mx-auto py-12">
      <Helmet title={`OSS Port | ${mdx.frontmatter.name}`} />
      <Link to="/">Home</Link>
      <h1 className="text-black-500 font-bold text-4xl mb-4">
        {mdx.frontmatter.name}
      </h1>
      <p className="text-black-300 mb-6">{mdx.frontmatter.description}</p>
      <div className="flex space-x-4 mb-8">
        <a
          target="_blank"
          className="text-black-300 hover:text-primary-400"
          href={mdx.frontmatter.repoUrl}
        >
          <GitHubIcon />
        </a>
        {mdx.frontmatter.twitterUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={mdx.frontmatter.twitterUrl}
          >
            <TwitterIcon />
          </a>
        )}
        {mdx.frontmatter.websiteUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={mdx.frontmatter.websiteUrl}
          >
            <LinkIcon />
          </a>
        )}
      </div>

      <ProjectFrontmatterContextProvider value={mdx.frontmatter}>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ProjectFrontmatterContextProvider>
    </main>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    mdx(slug: { eq: $slug }) {
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
