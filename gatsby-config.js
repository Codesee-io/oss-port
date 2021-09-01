require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "OSS Port",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./projects",
      },
    },
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      // https://github.com/algolia/gatsby-plugin-algolia
      // NOTE: the index is only generated when running `gatsby build`
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000, // default: 1000
        // settings: {
        // optional, any index settings
        // Note: by supplying settings, you will overwrite all existing settings on the index
        // },
        // Only index new, changed, and deleted records
        // enablePartialUpdates: false, // default: false
        // Used to determine whether an object changed since the last index
        // matchFields: ["slug", "modified"], // Array<String> default: ['modified']
        // concurrentQueries: false, // default: true
        skipIndexing: process.env.ALGOLIA_ADMIN_KEY == null, // default: false, useful for e.g. preview deploys or local development
        // continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
      },
    },
  ],
};
