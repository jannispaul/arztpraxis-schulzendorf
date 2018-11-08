import React from 'react'

import Layout from '../components/layout'
import News from '../components/news'
import Hero from '../components/hero'
import Kontakt from '../components/kontakt'
import Times from '../components/times'
import Notdienst from '../components/notdienst'


const IndexPage = () => (
  <Layout>
    <News></News>
    <Hero></Hero>
    <Kontakt></Kontakt>
    <Times></Times>
    <Notdienst></Notdienst>
  </Layout>
)

export default IndexPage
