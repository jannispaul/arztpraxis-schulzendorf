import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  min-height: 100%;
  width: 100%;
  /* margin-right: 16px; */
  @media ${device.tablet} {
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
            fluid(maxWidth: 500, quality: 60) {
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
          alt="Einladender Eingang zur Arztpraxis mit Topfpflanzen an den Seiten"
        />
      )
    }}
  />
)
export default RezeptTeaserImage
