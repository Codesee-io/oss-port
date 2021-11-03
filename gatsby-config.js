require("dotenv").config();
const emoji = require("remark-emoji");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.oss-port.com",
    title: "OSS Port",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `OSS Port`,
        short_name: `OSS Port`,
        start_url: `/`,
        background_color: `#fafafb`,
        theme_color: `#1777c1`,
        display: `standalone`,
        icon: "src/images/ossport_avatar_circle.svg",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./projects",
        ignore: ["**/_template.mdx"],
      },
    },
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        remarkPlugins: [emoji],
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: "CXMNKQGD",
        honorDnt: true, // Honor visitors' "do not track" policy
      },
    },
  ],
};
