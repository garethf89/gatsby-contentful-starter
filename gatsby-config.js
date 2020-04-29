module.exports = {
    siteMetadata: {
        title: "Alex",
        description: "Portfolio of Web Designer Alex Ionna",
        siteUrl: "http://TODO",
        author: "Gareth Ferguson",
        image: "/images/AlexLogo.jpg",
        menuLinks: [
            {
                name: "Home",
                slug: "/",
            },
            {
                name: "About",
                slug: "/about/",
            },
            {
                name: "Contact",
                slug: "/contact/",
            },
        ],
        basePath: "/",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        "gatsby-plugin-theme-ui",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Alex Ionna Portfolio`,
                short_name: `Alex`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `static/images/AlexLogo.png`,
            },
        },
        {
            resolve: `gatsby-plugin-schema-snapshot`,
            options: {
                path: `./src/gatsby/schema/schema.gql`,
                update: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
