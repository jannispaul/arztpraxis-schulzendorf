import React from 'react'

import Layout from '../components/Layout/Layout'
import News from '../components/news'
import PraxisHero from '../components/PraxisHero'
import Contact from '../components/contact'
import Times from '../components/times'
import ServicesTeaser from '../components/ServicesTeaser'
import HeadlineText from '../components/Layout/HeadlineText'
import PraxisImageGrid from '../components/Layout/PraxisImageGrid'
import Team from '../components/Team'

import Emergency from '../components/emergency'
import Cookienotice from '../components/cookienotice'
import Notice from '../components/notice'

const IndexPage = () => (
  <Layout>
    <PraxisHero></PraxisHero>
    <HeadlineText
      h2="Weitere Informationen zu Unserer Praxis"
      p="Keiner geht gerne zum Arzt. Das verstehen wir. Um die Wartezeit zu verkürzen haben wir Zeitschriften und Bücher ausgelegt. Es besteht ein Gast wlan. Unsere Kinderecke ist liebevoll ausgestattet mit Büchern, Malutensilien und Spielen. Aktuell müssen 4 Treppenstufen gestiegen werden. Die Praxis selbst ist ebenerdig. An der Barrierefreiheit arbeiten wir."
    ></HeadlineText>
    <Team></Team>
    <PraxisImageGrid></PraxisImageGrid>
    <Contact></Contact>
    <Emergency></Emergency>
  </Layout>
)

export default IndexPage
