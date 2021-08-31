import { graphql, Link } from "gatsby";
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
      <h1>Explore open source communities</h1>
      <h2>Onboard and contribute to your next project with ease</h2>

      <div className="grid grid-cols-4 gap-4">
        {allMarkdownRemark.nodes.map((node) => (
          <div className="p-4 bg-white" key={node.id}>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.name}</Link>
            </h3>
            <a href={node.frontmatter.repoUrl} target="_blank">
              Repo
            </a>
          </div>
        ))}
      </div>
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
          repoUrl
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
