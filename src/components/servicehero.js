import React from 'react'
// import { Link } from 'gatsby'
import MobileServiceHeroImage from '../components/Images/MobileServiceHeroImage'
import ServiceHeroImage from '../components/Images/ServiceHeroImage'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'

const StyledSection = styled.section`
  background: #fff;
  position: relative;
  padding-bottom: 40px;
  position: relative;
  svg {
    margin: 0 auto -20px;
    position: absolute;
    bottom: 0;
    min-width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0) 45%, #f8f9fb 46%);
  }

  @media ${device.tablet} {
    min-height: 50vw;
    margin: 0 auto -5vw;
  }
`

const ContentContainer = styled.div`
  padding: 16px;
  z-index: 2;
  @media ${device.tablet} {
    margin-top: -10vw;
    order: -1;
    padding: 12vw 32px;
    max-width: 1168px;
    margin: 0 auto;
    & > div {
      position: relative;
      max-width: 480px;
    }
  }
  @media ${device.laptop} {
    p {
      font-size: 24px;
    }
  }
`

const Hero = () => (
  <StyledSection>
    <MobileServiceHeroImage></MobileServiceHeroImage>
    <ServiceHeroImage></ServiceHeroImage>
    <ContentContainer>
      <div>
        <h1>Unsere Leistungen</h1>
        <p>
          Wir sind eine Facharztpraxis für Allgemeine Medizin mit Schwerpunkt
          Hausärztliche Versorgung. Wir betreuen alle Altersgruppen ab dem 3.
          Lebensjahr. Wir sehen uns als Praxis für die gesamte Familie. Unser
          ausgesprochenens Ziel ist, eine umfassende häusliche Versorgung zu
          ermöglichen.
        </p>
      </div>
    </ContentContainer>

    <svg
      viewBox="0 0 1440 148"
      // width="1441"
      // height="148"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          d="M1440 53.343v63.773c-438 109.923-936-118.153-1440 0l.002-28.831C505.244 91.544 996.699-33.835 1440 53.343z"
          fill="#A4ADF6"
        />
        <path
          d="M1440 .986v116.13c-438 109.923-936-118.153-1440 0L-.001 8.043C454.663 3.43 946.536 104.776 1440.556.872l-.556.114z"
          fill="#F1437F"
        />
        <path
          d="M-.005 17.938C462.797 38.809 947.742 95.065 1440 78.073l.001 39.043c-438 109.923-936-118.153-1440 0z"
          fill="#FFD300"
        />
      </g>
    </svg>
  </StyledSection>
)

export default Hero
