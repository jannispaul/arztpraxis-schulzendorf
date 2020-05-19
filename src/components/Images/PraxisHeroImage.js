import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  /* display: none; */

  width: 120%;
  margin-top: -30%;
  @media ${device.tablet} {
    position: absolute !important;
    z-index: 0;
    top: 0;
    left: 0;
    margin-top: 0;
    height: 95%;
    width: 75%;
    margin-left: calc(25vw - 50%);
  }
  @media ${device.laptop} {
    margin-left: 0;
    height: 90%;
    width: 55%;
  }
`

const PraxisHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        praxisheroImage: file(
          relativePath: { eq: "images/praxis/praxis-hero.jpg" }
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
      const image = data.praxisheroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          objectFit="contain"
          objectPosition="100% 50%"
          alt="Helles Wartezimmer mit Menschen"
        />
      )
    }}
  />
)
export default PraxisHeroImage
