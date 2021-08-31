const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.tsx`);

  const projects = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___name] }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `);

  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create a page for each project
  projects.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: projectTemplate,
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });
};
