import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './nav'
import Footer from './footer'
import styles from './layout.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'Hausarzt, Arztpraxis, krank, Schulzendorf' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Nav/>
        <div className={styles.app}>
            {children}
          <Footer></Footer>
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
