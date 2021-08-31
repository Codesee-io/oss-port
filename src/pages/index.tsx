import { graphql } from "gatsby";
import React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  return (
    <main style={pageStyles}>
      <h1>OSS Port</h1>
      <h2>Projects</h2>

      <ul className="list-disc list-inside">
        {allMarkdownRemark.nodes.map((node) => (
          <li key={node.id}>{node.frontmatter.name}</li>
        ))}
      </ul>
    </main>
  );
};

export const pageQuery = graphql`
  query ProjectList {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          name
          languages
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
