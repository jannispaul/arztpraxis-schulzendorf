import React from 'react'

import Layout from '../components/Layout/Layout'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Times from '../components/times'
import ServicesTeaser from '../components/ServicesTeaser'
import HeadlineText from '../components/Layout/HeadlineText'

import Emergency from '../components/emergency'
// // import News from '../components/news'
// // import Cookienotice from '../components/cookienotice'
import Notice from '../components/notice'
import NoticeVertretung from '../components/noticeVertretung'
import RezeptCard from '../components/RezeptCard'

const IndexPage = () => (
  <Layout>
    {/* <Cookienotice></Cookienotice> */}
    {/* <News></News>*/}
    <NoticeVertretung></NoticeVertretung>
    <Notice></Notice>
    <Hero></Hero>
    <Times></Times>
    <ServicesTeaser></ServicesTeaser>
    <HeadlineText
      h2="Unsere Praxis"
      p="Unser Leben ist die Medizin und die Betreuung von Menschen. Egal, wo der Schuh drückt. Wir freuen uns über das Vertrauen, dass Sie uns entgegenbringen und geben unser Bestes Ihren kostbarsten Besitz: Ihre Gesundheit, zu unterstützen und zu bewahren."
      link="/praxis"
      linkText="Mehr erfahren"
    ></HeadlineText>
    <RezeptCard></RezeptCard>
    <Contact></Contact>
    <Emergency></Emergency>
  </Layout>
)

export default IndexPage
