import React from 'react'
import { Link } from 'gatsby'
import styles from 'footer.module.css'


const Footer = ({ siteTitle }) => (
  <div className={styles.footer}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
  </div>
)

export default Footer
