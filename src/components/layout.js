import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"
import "./fonts.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        <Nav />
        <p
          style={{
            textAlign: "center",
            color: "var(--primary-medium)",
            paddingTop: 15,
          }}
        >
          © {new Date().getFullYear()}, Built by{" "}
          <a
            href="https://github.com/kenput3r"
            style={{ color: "var(--primary-light)" }}
          >
            @kenput3r
          </a>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
