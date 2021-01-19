module.exports = {
  siteMetadata: {
    title: `Arztpraxis Schulzendorf`,
    siteUrl: `https://arztpraxis-schulzendorf.de`,
    description: `Wir freuen uns auf Sie – Ihre Hausarztpraxis Schulzendorf. Ärztin Peggy von Niederhäusern sofgt für die ganze Familie ✓ Öffnungszeiten ✓ Kontakt ✓ Termine`,
    keywords: [
      'Hausarzt, Arztpraxis, krank, Schulzendorf, Peggy von Niederhäusern, Familienarzt, Kinderarzt, Grippe, Impfung, Untersuchung, Hausbesuch',
    ],
    langs: ['de', 'en'],
    defaultLangKey: 'de',
    image: '/social-image.jpg', // Path to your image you placed in the 'static' folder
    siteUrl: `https://arztpraxis-schulzendorf.de/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'de',
        langKeyForNull: 'de',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arztpraxis Schulzendorf`,
        title: `Arztpraxis Schulzendorf`,
        short_name: `Hausarzt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
        icon: `content/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-css-customs`,
      // defaults
      options: {
        cssModules: false,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
