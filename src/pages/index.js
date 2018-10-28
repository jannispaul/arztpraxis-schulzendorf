import React from 'react'

import  '../theme/font-face.css'
import  '../theme/variables.css'
import '../theme/styles.css'

import News from '../components/news'
import Times from '../components/times'
import Notdienst from '../components/notdienst'
import Kontakt from '../components/kontakt'
import Layout from '../components/layout'
import Hero from '../components/hero'




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
