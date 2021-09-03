const path = require("path");
const calculateGithubData = require("./src/utils/calculateGithubData");
const getCodeSeeMapMetadata = require("./src/utils/getCodeSeeMapMetadata");
const { graphql: github } = require("@octokit/graphql");

exports.createPages = async ({ actions, graphql, reporter, cache }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/ProjectTemplate.tsx`);
  const homeTemplate = path.resolve(`src/templates/HomeTemplate.tsx`);

  const projects = await graphql(`
    {
      allProjects: allMdx(
        sort: { order: ASC, fields: [frontmatter___name] }
        limit: 1000
      ) {
        nodes {
          id
          slug
          frontmatter {
            name
            featuredMapUrl
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

  let githubAPI;
  if (process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
    githubAPI = github.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  }

  // Create a page for each project
  const nodes = projects.data.allProjects.nodes;
  const githubDataSet = {};
  for (const node of nodes) {
    let githubData = {};

    if (githubAPI) {
      githubData = await calculateGithubData(
        githubAPI,
        node.parent.relativeDirectory,
        node.parent.name,
        cache
      );

      githubDataSet[node.slug] = {
        prsMerged: githubData.prsMerged,
        prsCreated: githubData.prsCreated,
        contributors: githubData.contributors,
      };
    }

    // If the project has a featured map, load its metadata
    let featuredMapMetadata;
    if (node.frontmatter.featuredMapUrl) {
      featuredMapMetadata = await getCodeSeeMapMetadata(
        node.frontmatter.featuredMapUrl,
        cache
      );
    }

    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        id: node.id,
        slug: node.slug,
        githubData,
        featuredMapMetadata,
      },
    });
  }

  // Create the index page once we have all the GitHub data
  createPage({
    path: "/",
    component: homeTemplate,
    context: {
      githubDataSet,
    },
  });
};
