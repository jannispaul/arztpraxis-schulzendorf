import React from 'react'
import Layout from '../components/layout'
import Kontakt from '../components/kontakt'

const NotFoundPage = () => (
  <Layout>
    <p>Ups, da ist etwas schief gelaufen.</p>
    <h1>Diese Seite wurde nicht gefunden.</h1>
    <Kontakt></Kontakt>
  </Layout>
)

export default NotFoundPage
