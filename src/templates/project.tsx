import { Helmet } from "react-helmet";
import React from "react";
import { graphql, Link } from "gatsby";
import TwitterIcon from "../components/icons/TwitterIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkIcon from "../components/icons/LinkIcon";

export default function ProjectTemplate({ data: { markdownRemark } }) {
  return (
    <main className="max-w-4xl mx-auto py-12">
      <Helmet title={`OSS Port | ${markdownRemark.frontmatter.name}`} />
      <Link to="/">Home</Link>
      <h1 className="text-black-500 font-bold text-4xl mb-4">
        {markdownRemark.frontmatter.name}
      </h1>
      <p className="text-black-300 mb-6">
        {markdownRemark.frontmatter.description}
      </p>
      <div className="flex space-x-4">
        <a
          target="_blank"
          className="text-black-300 hover:text-primary-400"
          href={markdownRemark.frontmatter.repoUrl}
        >
          <GitHubIcon />
        </a>
        {markdownRemark.frontmatter.twitterUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={markdownRemark.frontmatter.twitterUrl}
          >
            <TwitterIcon />
          </a>
        )}
        {markdownRemark.frontmatter.websiteUrl && (
          <a
            target="_blank"
            className="text-black-300 hover:text-primary-400"
            href={markdownRemark.frontmatter.websiteUrl}
          >
            <LinkIcon />
          </a>
        )}
      </div>
      <section
        className="project-content mt-8"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </main>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        description
        repoUrl
        websiteUrl
        twitterUrl
      }
    }
  }
`;
