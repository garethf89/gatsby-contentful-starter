/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"

import { Global } from "@emotion/core"
import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
import globalStyles from "../styles/globals"
import styled from "@emotion/styled"

const Root = styled.div`
    font-family: ${props => props.theme.fonts.body};
`
const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Root>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
            <Global styles={globalStyles} />
        </Root>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
