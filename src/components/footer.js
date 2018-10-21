import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'


const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
      <div>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
  </footer>
)

export default Footer