module.exports = {
  siteMetadata: {
    title: `Platinum Demo`,
    description: `A basic implementation of gatsby-theme-platinum.`,
    author: `rmp`,
    // Change to your site's address, required for sitemap.xml and robots.txt file
    siteUrl: `https://gatsby-theme-platinum-demo.netlify.com`,
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`,
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `example@email.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/rogermparent`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-platinum`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-platinum-demo`,
        short_name: `platinum`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `assets/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
