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

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1168, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.heroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          objectFit="contain"
          objectPosition="100% 50%"
          alt="Frau in blauem Kleid kümmert sich um Kind"
        />
      )
    }}
  />
)
export default HeroImage
