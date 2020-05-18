import React from 'react'
import styled from 'styled-components'
import HeadlineText from './Layout/HeadlineText'
import Service1Image from './Images/Service1Image'
import Service2Image from './Images/Service2Image'
import Service3Image from './Images/Service3Image'
// import { device } from '../theme/breakpoints'

const StyledGrid = styled.div`
  max-width: 1168px;
  margin: 0 auto;
  display: flex;
  & > div {
    flex: 1 0 calc(50% - 12px);
  }
  & > div:first-of-type {
    margin-right: 24px;
  }
  & > div:nth-of-type(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div {
      height: 50%;
    }
    & > div:first-of-type {
      margin-bottom: 24px;
    }
  }
`

const ServicesTeaser = (props) => (
  <section>
    <HeadlineText
      h2="Unsere Leistungen"
      p="Von akuten Krankheitsymptomen über chronischen Problemen in Ihrer Gesundheit bis Durchführung der Vorsorgerichtlinien oder Planung Ihrer häuslichen Versorgung stehen wir Ihnen gerne beratend zur Seite."
      link="/leistungen"
      linkText="Mehr erfahren"
    ></HeadlineText>
    <StyledGrid>
      <Service1Image></Service1Image>
      <div>
        <Service2Image></Service2Image>
        <Service3Image></Service3Image>
      </div>
    </StyledGrid>
  </section>
)
export default ServicesTeaser
