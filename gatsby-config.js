/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `John Doe`,
    author: `John Doe`,
    firstName: `John`,
    lastName: `Doe`,
    description: `John Doe's personal site`,
    occupation: `Software Engineer`,
    keywords: [`John`, `Doe`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Coding Monkey`,
      `Jedi Master`,
      `Proactive movie reference-er`,
      `Donut Enthusiast`,
    ],
    readingList: [
      {
        title: `Sapiens: A Brief History of Humankind`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/23692271-sapiens`,
      },
      {
        title: `Behave: The Biology of Humans at our Best and Worst`,
        author: `Robert Sapolsky`,
        link: `https://www.goodreads.com/book/show/31170723-behave`,
      },
      {
        title: `Homo Deus: A History of Tomorrow`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/31138556-homo-deus`,
      },
      {
        title: `The Gene: An Intimate History`,
        author: `Siddhartha Mukeherjee`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
      {
        title: `The Emperor of All Maladies: A Biography of Cancer`,
        author: `Siddhartha Mukeherjee`,
        link: `https://www.goodreads.com/book/show/7170627-the-emperor-of-all-maladies`,
      },
      {
        title: `The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma`,
        author: `Bessel A. van der Kolk`,
        link: `https://www.goodreads.com/book/show/18693771-the-body-keeps-the-score`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Batman: The Animated Series`,
        author: `Bob Kane, Eric Radomski, Bruce Timm `,
        link: `https://www.imdb.com/title/tt0103359/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
      {
        title: `Rick and Morty`,
        author: ` Dan Harmon, Justin Roiland`,
        link: `https://www.imdb.com/title/tt2861424/`,
      },
      {
        title: `Death Note`,
        author: `Mamoru Miyano, Brad Swaile, Vincent Tong`,
        link: `https://www.imdb.com/title/tt0877057/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ggg`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
