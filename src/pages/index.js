import React from 'react'

import Layout from '../components/layout'
import News from '../components/news'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Times from '../components/times'
import Emergency from '../components/emergency'
import Cookienotice from '../components/cookienotice'
import Notice from '../components/notice'

const IndexPage = () => (
  <Layout>
    <Cookienotice></Cookienotice>
    <Notice></Notice>
    <News></News>
    <Hero></Hero>
    <Contact></Contact>
    <Times></Times>
    <Emergency></Emergency>
  </Layout>
)

export default IndexPage
