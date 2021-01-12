import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'
import ContentCard from './Layout/ContentCard'
import RezeptTeaserImage from './Images/RezeptTeaserImage'

const StyledSection = styled.section`
  @media ${device.tablet} {
    padding: 0 16px;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px 64px;
  @media ${device.tablet} {
    max-width: 500px;
    margin: 0 auto;
    padding: 32px 32px 32px;
    order: -1;
    & > p {
      font-size: 20px;
    }
  }
  @media ${device.laptop} {
    padding: 32px 32px 32px;
    order: -1;
    & > p {
      font-size: 24px;
    }
  }
`

const StyledButton = styled(Link)`
  text-decoration: none;
  background: ${(props) => props.background};
  color: #fff !important;
  padding: 12px 24px 11px;
  border-radius: 4px;
  :hover {
    color: #fff !important;
    cursor: pointer;
    background: ${(props) => props.bgHover};
  }
`

const RezeptCard = (props) => (
  <StyledSection>
    <ContentCard>
      <RezeptTeaserImage></RezeptTeaserImage>
      <ContentContainer>
        <h2 dangerouslySetInnerHTML={{ __html: props.h2 }}></h2>
        <p>{props.p}</p>
        <StyledButton
          to="/online-rezept"
          background="#FF2D7F"
          bgHover="#ff619e"
        >
          {props.button}
        </StyledButton>
      </ContentContainer>
    </ContentCard>
  </StyledSection>
)

export default RezeptCard
