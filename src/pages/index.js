import React from 'react'
import { Link } from 'gatsby'
import News from '../components/news'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <News></News>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
