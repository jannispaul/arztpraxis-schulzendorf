import React from 'react'
import { graphql, navigate } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix } from 'gatsby-link'

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

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args)
    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata
      const langKey = getUserLangKey(langs, defaultLangKey)
      if (langKey !== defaultLangKey) {
        let homeUrl = withPrefix(`/${langKey}/`)
        navigate(homeUrl)
      }
    }
  }
  render() {
    return (
      <Layout lang="de">
        <Helmet>
          <html lang="de" />
          <title>Arztpraxis Schulzendorf - Peggy von Niederhäusern</title>
          <meta
            name="keywords"
            content="Hausarzt, Arztpraxis, krank, Schulzendorf, Peggy von Niederhäusern, Arzt, Familienarzt, Kinderarzt, Grippe, Impfung, Untersuchung, Hausbesuch"
          ></meta>
          <meta
            name="description"
            content="Wir freuen uns auf Sie – Ihre Hausarztpraxis Schulzendorf. Ärztin Peggy von Niederhäusern sorgt für die ganze Familie ✓ Öffnungszeiten ✓ Kontakt ✓ Termine"
          ></meta>
          <meta
            name="google-site-verification"
            content="g_1gjLq6VVDauSPHKRiXRS-LtLs4Z79gTWVih9juzxE"
          />
        </Helmet>
        {/* <News></News>*/}
        {/* <NoticeVertretung></NoticeVertretung> */}
        <Notice
          p=" Liebe Patientin, lieber Patient,
            <br /> sollten Sie den Verdacht haben, mit dem neuen Coronavirus
            infiziert zu sein <b>bitte die Praxis nicht betreten! </b>
            Um das Ausbreitungsrisiko zu minimieren, sind Sie aufgerufen zu
            Hause zu bleiben und nicht in die Praxis zu kommen.
            <br />
            <br />
            Nehmen Sie zuerst telefonisch Kontakt auf: <br />
            Arztpraxis: 033762-48550 / Wochenende: 116 117 <br />
            Gesundheitsamt (Mo.-So. 8-18 Uhr): 03375-262146 <br />
            Bürgertelefon (Mo.-Fr. 9-15 Uhr): 0331-8683777"
        ></Notice>
        <Hero
          h1="Arztpraxis Schulzendorf"
          p="Sie suchen einen Hausarzt in Schulzendorf? Wir freuen uns auf Sie! Als Familienpraxis betreuen wir Patienten aller Altersgruppen ab drei Jahren bis ins Senium."
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
  }
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLangKey
        langs
      }
    }
  }
`
