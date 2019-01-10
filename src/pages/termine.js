import React from 'react'
import { Link } from 'gatsby'
// import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Termine = () => (
  <Layout>
    <h1>Termine</h1>
    <p>Welcome to page 2</p>
    {/* <div id="jam-ota-info_81191615_1"><div style={{ float: `left` }}><span style={{ color: `#01a3d4` }}>&#x1f512;</span> SSL-verschlüsselt</div><div style={{ float: `right` }}>ein Service von <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/" target="_blank" rel="noopener noreferrer" style={{ color: `#01a3d4`, textDecoration: `none` }}><strong>jameda</strong></a>&nbsp;</div></div> */}
    <Link to="/">Zurück zur Startseite</Link>
  </Layout>
)

export default Termine
