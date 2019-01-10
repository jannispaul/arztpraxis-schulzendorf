import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Legalcontainer from '../components/legalcontainer'

const Impressum = () => (
  <Layout>
    <Legalcontainer>
      <h1>Impressum</h1>
      <p>
      Hausarztpraxis Schulzendorf<br />
      Peggy von Niederhäusern<br />
      Fachärztin für Allgemeinmedizin<br />
      Illgenstraße 4<br />
      15732 Schulzendorf
      </p>
      <p></p>
      <ul>
        <li>Email: <Link to="mailto:arztpraxis.schulzendorf@t-online.de">arztpraxis.schulzendorf@t-online.de</Link> </li>
        <li>Telefon: 033762 48550</li>
        <li>Fax: 033752 48552</li>
      </ul>
      <p>
      
      </p>
      <Link to="/">Zurück zur Startseite</Link>
    </Legalcontainer>
  </Layout>
)

export default Impressum
