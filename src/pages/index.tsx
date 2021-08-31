import { graphql, Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import ProjectCard from "../components/ProjectCard";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  return (
    <main style={pageStyles}>
      <Helmet title="OSS Port" />
      <h1 className="text-black-500 font-bold text-4xl text-center mb-4">
        Explore open source communities
      </h1>
      <h2 className="text-black-300 text-xl text-center mb-8">
        Onboard and contribute to your next project with ease
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {allMarkdownRemark.nodes.map((node) => (
          <ProjectCard key={node.id} {...node} />
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
          tags
          repoUrl
          avatar {
            publicURL
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
