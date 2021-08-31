import { Helmet } from "react-helmet";
import React from "react";
import { graphql } from "gatsby";

export default function ProjectTemplate({ data: { markdownRemark } }) {
  return (
    <div>
      <Helmet title={markdownRemark.frontmatter.name || "I am a project"} />
      <h1>{markdownRemark.frontmatter.name}</h1>
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
      }
    }
  }
`;
