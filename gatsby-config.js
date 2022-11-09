module.exports = {
  siteMetadata: {
    title: `adeelfarzand`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-dark-mode`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/Layout.jsx"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
