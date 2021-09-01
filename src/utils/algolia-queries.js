const myQuery = `{
  allMarkdownRemark {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        description
        name
        tags
        repoUrl
        websiteUrl
        twitterUrl
        avatar {
          publicURL
        }
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => {
      return data.allMarkdownRemark.nodes.map((node) => ({
        objectID: node.id,
        slug: node.fields.slug,
        frontmatter: node.frontmatter,
      }));
    },
    // settings: {
    // optional, any index settings
    // Note: by supplying settings, you will overwrite all existing settings on the index
    // },
    // matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
  },
];

module.exports = queries;
