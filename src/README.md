## STARTER README

- I highly recommend going through Gatsby's [tutorial](https://www.gatsbyjs.org/tutorial/) before getting started.

- This is a semi-biased starter that uses the context api to push a theme across the entire app

### What does this starter offer?

- The starter is based off of the official [hello-world starter provided](https://github.com/gatsbyjs/gatsby-starter-hello-world).
- Everything in the starter is reconfigurable.
- Built in support for `SEO`, light/dark mode and `bootstrap`
- Starter comes with a locally hosted font `Aurebesh`, but feel free to remove/replace it
- Starter uses fontawesome icons for affiliate links

### The file structure is as follows:

- **Components**: Re-usable components to be used throughout the app
- **Content**: Contains relevant markdown files and images for blog posts or projects
- **Templates**: Contains files that create the template html for a blog post or project details page
- **Styles**: Contains the sass files used for adding custom styling to the app
- **Utils**: Contains helper files, seo, and theme management
- **Pages**: Contains the different pages
- **Static**: Contains static assets (i.e. self-hosted fonts or images) that are directly added to `/public`

### Understanding dependencies:

- Gatbsy recommends using its plugins whenever possible, but not always. See [documentation](https://www.gatsbyjs.org/docs/plugins/) for more details.
- Gatsby plugins are used by Gatsby's build process and provide and API for certain tasks.
- `Bootstrap` is a CSS framework that comes with already defined CSS classes
- `React Bootstrap` is an abstraction of `Bootstrap` providing some basic styling built-in to its components
- `Helmet` is used to add SEO to the site making it easier for search engines to relate search keywords to your website.
- `Fontawesome` is used for icons
- `Howler` is used to manage audio files
