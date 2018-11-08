module.exports = {
  siteMetadata: {
    title: 'Arztpraxis Schulzendorf',
    siteUrl: 'https://youthful-brown-8d4f3a.netlify.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Arztpraxis Schulzendorf',
        short_name: 'Hausarzt',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'fullscreen',
        icon: 'content/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
