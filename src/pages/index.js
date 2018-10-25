import React from 'react'
import News from '../components/news'
import Times from '../components/times'
import Notdienst from '../components/notdienst'
import Kontakt from '../components/kontakt'
import Layout from '../components/layout'
import Hero from '../components/hero'

import  '../theme/font-face.css'
import '../theme/styles.css'
import  '../theme/variables.css'


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
