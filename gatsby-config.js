const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site`,
        short_name: `Site`,
        start_url: `/`,
        // icon: `src/images/logo_symbol.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
