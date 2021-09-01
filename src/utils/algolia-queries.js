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
    // Note: by supplying settings, we overwrite all existing settings on the index
    settings: {
      searchableAttributes: [
        "frontmatter.name",
        "frontmatter.description",
        "frontmatter.tags",
      ],
      ranking: [
        "asc(frontmatter.name)",
        "typo",
        "words",
        "proximity",
        "attribute",
        "exact",
      ],
    },
    // matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
  },
];

module.exports = queries;
