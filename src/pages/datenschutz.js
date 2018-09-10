import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Legalcontainer from '../components/legalcontainer'

const Datenschutz = () => (
  <Layout>
    <Legalcontainer>
      <h1>Datenschutz</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <Link to="/">Go back to the homepage</Link>
    </Legalcontainer>
  </Layout>
)

export default Datenschutz
