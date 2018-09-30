import React from 'react'
import News from '../components/news'
import Times from '../components/times'
import Notdienst from '../components/notdienst'
import Layout from '../components/layout'
import  '../components/variables.css'

const IndexPage = () => (
  <Layout>
    <News></News>
    <Times></Times>
    <Notdienst></Notdienst>
  </Layout>
)

export default IndexPage
