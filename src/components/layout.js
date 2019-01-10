import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../theme/font-face.css'
import '../theme/variables.css'
import '../theme/styles.css'
import styles from './layout.module.css'
import Nav from './nav'
import Footer from './footer'

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
            { name: 'description', content: 'Wir freuen uns auf Sie – Ihre Hausarztpraxis Schulzendorf. Ärztin Peggy von Niederhäusern sofgt für die ganze Familie ✓ Öffnungszeiten ✓ Kontakt ✓ Termine' },
            { name: 'keywords', content: 'Hausarzt, Arztpraxis, krank, Schulzendorf, Peggy von Niederhäusern, Familienarzt, Kinderarzt, Grippe, Impfung, Untersuchung, Hausbesuch' }
          ]}
        >
            <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@1"></script>
          <html lang="de" />
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
