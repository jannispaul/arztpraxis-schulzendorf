import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  min-height: 100%;
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
  }
`

const MobileHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(
          relativePath: { eq: "images/services/services-hero-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.mobileHeroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'cover' }}
          alt="Frau in blauem Kleid kümmert sich um Kind"
        />
      )
    }}
  />
)
export default MobileHeroImage
