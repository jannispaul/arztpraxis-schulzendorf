import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  min-height: 100%;
  width: calc(100% - 32px);
  margin: auto;
  padding-top: 24px;

  @media ${device.tablet} {
    width: 100%;
    margin: 24px 24px 24px 0;
    flex: 1 0 calc(50% - 16px);
    max-width: 50%;
    right: 0;
  }
  @media ${device.laptop} {
  }
`

const RezeptTeaserImage = () => (
  <StaticQuery
    query={graphql`
      query {
        rezeptTeaserImage: file(
          relativePath: { eq: "images/rezept/rezept0.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.rezeptTeaserImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Illustration eines Kalenders"
        />
      )
    }}
  />
)
export default RezeptTeaserImage
