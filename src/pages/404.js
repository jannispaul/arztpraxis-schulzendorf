import React from 'react'
import Layout from '../components/Layout/Layout'
import Contact from '../components/contact'

const NotFoundPage = () => (
  <Layout>
    <p>Ups, da ist etwas schief gelaufen.</p>
    <h1>Diese Seite wurde nicht gefunden.</h1>
    <Contact></Contact>
  </Layout>
)

export default NotFoundPage
