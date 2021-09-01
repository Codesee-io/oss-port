const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.tsx`);

  const projects = await graphql(`
    {
      allMdx(sort: { order: ASC, fields: [frontmatter___name] }, limit: 1000) {
        nodes {
          id
          slug
          frontmatter {
            name
            avatar {
              publicURL
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
  projects.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        id: node.id,
        slug: node.slug,
      },
    });
  });
};
