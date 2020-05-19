import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'
import RezeptImageGrid from '../components/Layout/RezeptImageGrid'

const StyledSection = styled.section``
const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 32px 16px;
  @media ${device.tablet} {
    p {
      font-size: 24px;
      margin-bottom: 48px;
    }
  }
`

const ErfolgPage = () => (
  <Layout>
    <StyledSection>
      <StyledContainer>
        <h1>Anfrage erfolgreich</h1>
        <p>Vielen Dank für Ihre Rezeptanfrage.</p>
      </StyledContainer>
      <RezeptImageGrid></RezeptImageGrid>
    </StyledSection>
  </Layout>
)

export default ErfolgPage
