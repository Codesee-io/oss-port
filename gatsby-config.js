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
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-slug",
  ],
};
