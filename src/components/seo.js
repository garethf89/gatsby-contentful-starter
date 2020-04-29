/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import React from "react"

const SEO = ({ title, description, image }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        image
                        siteUrl
                    }
                }
            }
        `
    )

    const defaultImage = site.siteMetadata.siteUrl + site.siteMetadata.image
    const metaDescription = description || site.siteMetadata.description
    const metaImage = image || defaultImage

    return (
        <Helmet
            htmlAttributes={{
                lang: `en`,
            }}
            title={title}
            defaultTitle={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            {/* General tags */}
            <meta name="image" content={image} />
            <meta name="description" content={metaDescription} />

            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
