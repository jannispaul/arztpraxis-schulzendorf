import React from 'react'

import Layout from '../components/Layout/Layout'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Times from '../components/times'
import ServicesTeaser from '../components/ServicesTeaser'
import HeadlineText from '../components/Layout/HeadlineText'
import Emergency from '../components/emergency'
import Notice from '../components/notice'
import RezeptCard from '../components/RezeptCard'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Arztpraxis Schulzendorf</title>
      <html lang="de" />
    </Helmet>
    {/* <Cookienotice></Cookienotice> */}
    {/* <News></News>*/}
    {/* <NoticeVertretung></NoticeVertretung> */}
    <Notice></Notice>
    <Hero
      h1="Arztpraxis Schulzendorf"
      p="Sie suchen einen Hausarzt in Schulzendorf? Wir freuen uns auf Sie! Als Familienpraxis betreuen wir Patienten aller Altersgruppen ab drei
          Jahren bis ins Senium."
      button="Online Termin buchen"
      anchor="Unsere Öffnungszeiten"
    ></Hero>
    <Times
      h3="Öffnungszeiten"
      monday="Montag"
      tuesday="Dienstag"
      wednesday="Mittwoch"
      thursday="Donnerstag"
      friday="Freitag"
    ></Times>
    <ServicesTeaser
      h2="Unsere Leistungen"
      p="Von akuten Krankheitsymptomen über chronischen Problemen in Ihrer Gesundheit bis Durchführung der Vorsorgerichtlinien oder Planung Ihrer häuslichen Versorgung stehen wir Ihnen gerne beratend zur Seite."
      link="/leistungen"
      linkText="Mehr erfahren"
    ></ServicesTeaser>
    <HeadlineText
      h2="Unsere Praxis"
      p="Unser Leben ist die Medizin und die Betreuung von Menschen. Egal, wo der Schuh drückt. Wir freuen uns über das Vertrauen, dass Sie uns entgegenbringen und geben unser Bestes Ihren kostbarsten Besitz: Ihre Gesundheit, zu unterstützen und zu bewahren."
      link="/praxis"
      linkText="Mehr erfahren"
    ></HeadlineText>
    <RezeptCard
      h2="Jetzt Online<br/>Folgerezept anfordern"
      p="Sie können auch ganz einfach online ein Folgerezept anfordern."
      button="Online-Rezept"
    ></RezeptCard>
    <Contact
      h2="Kontakt"
      p="Wir freuen uns auf Ihren Anruf und Besuch und helfen Ihnen bei Fragen
          gerne weiter! Sie finden uns in der"
    ></Contact>
    <Emergency
      h2="Notdienst"
      p1="Falls wir nicht erreichbar sind, wenden Sie sich bei
          allgemeinmedizinischen Erkrankungen an die hausärztliche Notfallpraxis
          im Aachenbach Krankenhaus in Königs Wusterhausen."
      p2="Wenn ein Hausbesuch notwendig ist, erreichen Sie den telefonischen
          hausärztlichen Notdienst Ihrer Umgebung unter"
    ></Emergency>
  </Layout>
)

export default IndexPage
