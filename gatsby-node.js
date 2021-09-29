const path = require("path");
const calculateGithubData = require("./src/utils/calculateGithubData");
const { getCodeSeeMapMetadata } = require("./src/utils/getCodeSeeMapMetadata");
const { graphql: github } = require("@octokit/graphql");

// TODO maybe look into using TS config files?
// https://www.gatsbyjs.com/plugins/gatsby-plugin-ts-config/

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  /**
   * Gatsby automatically infers the type of our data by inspecting each file
   * and generating a GraphQL schema. However, we've run into issues where an
   * `avatar` field contains a string that isn't a valid path. If that's the
   * case and that file is processed first, Gatsby will infer that `avatar` is a
   * string, and this will break the queries that assume otherwise, like:
   * ```
   * avatar {
   *   publicURL
   * }
   * ```
   *
   * To prevent this, we override the generated schema by stating that the
   * `avatar` field is always a file with a relative path.
   *
   * @see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization
   *
   * If you'd like to inspect the GraphQL schema, use the Gatsby playground:
   * ```
   * GATSBY_GRAPHQL_IDE=playground yarn start
   * # visit http://localhost:8000/___graphql
   * ```
   *
   * You can also export the schema using gatsby-plugin-extract-schema
   * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-extract-schema/
   *
   */
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter @infer {
      avatar: File @fileByRelativePath
    }
  `;

  createTypes(typeDefs);
};

// We have to do this manually right now, but hopefully can automate this soon
// 1 - doing anything more than default
// 2 - used one of: labels, notes, tours
// 3 - used more than one of: labels, notes, tours
// 4 - a fully fleshed-out map
// 5 - a truly helpful map
const helpfulMaps = {
  "avneesh0612/ChatCube": 3,
  "thvardhan/Youtuber-s-Lucky-Blocks": 1,
  "dhruvsaxena1998/node-typescript-starter": 1,
  "thamara/time-to-leave": 5,
  "erik-whiting/LuluTest": 2,
  "nil1729/food-order-app": 5,
  "luisFilipePT/github-covid-finder": 5,
  "akshat157/meditate-app": 5,
  "graysonarts/rust-gpio-mqtt-bridge": 4,
  "devcer/hydrator": 1,
  "PaulSayantan/TermTube": 4,
  "l2ig/aqua": 2,
  "GeekBoySupreme/mongodb-boilerplate": 1,
  "ANovokmet/node-csproj-util": 1,
  "akanksha-raghav/Minor_Project": 1,
};


exports.createPages = async ({ actions, graphql, reporter, cache }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/ProjectTemplate.tsx`);
  const homeTemplate = path.resolve(`src/templates/HomeTemplate.tsx`);

  const projects = await graphql(`
    {
      allProjects: allMdx(limit: 1000) {
        nodes {
          id
          slug
          body
          frontmatter {
            name
            repoUrl
            featuredMap {
              url
            }
            languages
            tags
            description
            currentlySeeking
            contributionOverview {
              mainLocation
              idealEffort
              isMentorshipAvailable
              automatedDevEnvironment
            }
            learnLinks {
              title
              url
            }
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
  } else {
    console.warn("No GitHub API Token set, github data will not be available.");
  }

  // Create a page for each project
  const nodes = projects.data.allProjects.nodes;
  const githubDataSet = {};
  const helpfulnessDataSet = {};
  for (const node of nodes) {
    let githubData = {};

    if (
      githubAPI &&
      node.frontmatter.repoUrl &&
      node.frontmatter.repoUrl.includes("github")
    ) {
      githubData = await calculateGithubData(
        githubAPI,
        node.frontmatter.repoUrl,
        cache
      );

      githubDataSet[node.slug] = {
        prsMerged: githubData.prsMerged,
        prsCreated: githubData.prsCreated,
        contributors: githubData.contributors,
        helpIssues: githubData.helpIssues,
        hacktoberfestIssues: githubData.hacktoberfestIssues,
      };
    }

    // If the project has a featured map, load its metadata
    let featuredMapMetadata;
    if (node.frontmatter.featuredMap?.url) {
      featuredMapMetadata = await getCodeSeeMapMetadata(
        node.frontmatter.featuredMap.url,
        cache
      );
    }

    let helpfulness = 0;
    if (node.frontmatter.featuredMap?.url) {
      helpfulness += 5;
    }
    if (node.frontmatter.currentlySeeking?.length) {
      helpfulness += 1;
    }
    if (node.frontmatter.contributionOverview) {
      helpfulness += Object.keys(node.frontmatter.contributionOverview).length / 2;
    }
    if (node.frontmatter.learnLinks?.length) {
      helpfulness += Math.min(3, node.frontmatter.learnLinks.length);
    }
    if (node.body) {
      if (node.body.includes("mdx(Overview")) {
        helpfulness += 4;
      }
      if (node.body.includes("mdx(Contributing")) {
        helpfulness += 4;
      }
    }

    helpfulness += helpfulMaps[node.slug] || 0;

    // tie breaker, count open issues:
    const openHelpIssues = (githubData.helpIssues || 0) + (githubData.hacktoberfestIssues || 0)
    helpfulness += Math.min(0.9, openHelpIssues/10.0);

    helpfulnessDataSet[node.slug] = helpfulness;

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
      helpfulnessDataSet,
      searchIndex: generateSearchIndex(projects.data.allProjects.nodes),
    },
  });
};

function generateSearchIndex(nodes) {
  return nodes.map((node) => ({
    id: node.id,
    languages: node.frontmatter.languages,
    tags: node.frontmatter.tags,
    description: node.frontmatter.description,
    name: node.frontmatter.name,
  }));
}
