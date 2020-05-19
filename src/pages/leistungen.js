import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import ContentCard from '../components/Layout/ContentCard'
import News from '../components/news'
import ServiceHero from '../components/servicehero'
import Service from '../components/service'
import Contact from '../components/contact'
import Emergency from '../components/emergency'
import RezeptCard from '../components/RezeptCard'

import { device } from '../theme/breakpoints'

import ServiceCRPImage from '../components/Images/ServiceCRPImage'
import ServiceSeniumImage from '../components/Images/ServiceSeniumImage'
import ServicesImageGrid from '../components/Layout/ServicesImageGrid'

const StyledContent = styled.div`
  padding: 16px;
  font-size: 18px;
  flex: 1 0 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    order: -1;
    padding: 32px;
  }
  @media ${device.laptop} {
    padding: 64px;
  }
`

const Leistungen = () => (
  <Layout>
    <News></News>
    <ServiceHero></ServiceHero>
    <Service></Service>
    <ContentCard>
      <ServiceCRPImage></ServiceCRPImage>
      <StyledContent>
        <h3>Geriatrische Beratung / Im Senium Zuhause</h3>
        <p>
          Sie vergessen machmal etwas? Wir Sie nicht. Sie dürfen kein Auto mehr
          führen? Wir kommen ins Haus. Ihre Hausarztpraxis betreut Sie auch,
          wenn Sie uns nicht mehr allein aufsuchen können. Wir bieten
          Routinehausbesuche, um objektiv uns zu überzeugen, dass Sie gut
          versorgt sind. Dafür haben wir eine speziell ausgebildete medizinische
          Fachangestellte (NäPah), die feste Hausbesuchsrunden betreut. Bei
          akuten Erkrankungen und geplant kommt auch die Praxisärztin zu Ihnen
          nach Hause.
        </p>
      </StyledContent>
    </ContentCard>
    <ContentCard>
      <ServiceSeniumImage></ServiceSeniumImage>
      <StyledContent>
        <h3>CRP Messung in Ihrer Praxis</h3>
        <p>
          Wir bieten Ihnen eine Untersuchung, die aktuell nur in vereinzelten
          Vertragspraxen in Deutschland angeboten wird. Mittels Bluttropfen aus
          Ihrem Finger kann in 3 Minuten entschieden werden, ob überhaupt ein
          Antibiotikum notwendig ist bzw. eine Erkrankung sogar zu einer
          Krankenhauseinweisung führt. Wir sind sehr stolz, Ihnen diese
          Technology jetzt schon bieten zu können. Sie interessieren sich für
          neue Technologien-wir auch. Wir sind als Berater für 2 software
          Unternehmen tätig mit dem Ziel, Technik und Patienten-Arzt-Alltag zu
          vereinen. Ein Blick über den Tellerrand, ....
        </p>
      </StyledContent>
    </ContentCard>
    <ServicesImageGrid></ServicesImageGrid>
    <RezeptCard></RezeptCard>

    <Contact></Contact>
    <Emergency></Emergency>
  </Layout>
)

export default Leistungen
