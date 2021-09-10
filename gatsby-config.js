require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.oss-port.com",
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
  ],
};
