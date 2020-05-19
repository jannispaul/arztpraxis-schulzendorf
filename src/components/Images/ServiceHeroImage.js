import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute !important;
    z-index: 0;
    top: 0;
    right: 0;
    height: 95%;
    width: 75%;
    margin-right: calc(25vw - 50%);
  }
  @media ${device.laptop} {
    margin-right: 0;
    display: block;
    position: absolute !important;
    z-index: 0;
    top: 0;
    right: 0;
    height: 90%;
    width: 55%;
  }
`

const ServiceHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        serviceheroImage: file(
          relativePath: { eq: "images/services/services-hero.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1168, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.serviceheroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          objectFit="contain"
          objectPosition="100% 50%"
          alt="Frau in blauem Kleid hält Tafeln mit Lebensmitteln zur Erklärung für dabei sitzende Patientetn"
        />
      )
    }}
  />
)
export default ServiceHeroImage
