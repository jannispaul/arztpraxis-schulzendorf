import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'


const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <div>
      <p>Peggy von Niederhäusern<br />
      Illgenstr. 4<br />
      15732 Schulzendorf</p>
    </div>
    <div>
      <p>Telefon: <a href="tel:03376248550">033762 48550</a><br />
      Fax: 033762 48552<br />
      Email: <a href="mailto:info@arztpraxis-schulzendorf.de">info@arztpraxis-schulzendorf.de</a>
      </p>
    </div>
    <div>
      <ul>
        <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/">Jameda</a>
        <li><Link to="/impressum">Impressum</Link></li>
        <li><Link to="/datenschutz">Datenschutz</Link></li>
      </ul>
    </div>
  </footer>
)

export default Footer