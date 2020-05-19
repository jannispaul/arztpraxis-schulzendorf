import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  min-height: 100%;
  width: 100%;

  @media ${device.tablet} {
    flex: 1 0 50%;
    margin-right: 16px;
  }
  @media ${device.laptop} {
  }
`

const Service3Image = () => (
  <StaticQuery
    query={graphql`
      query {
        service3Image: file(
          relativePath: { eq: "images/services/services3.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 560, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.service3Image.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'cover' }}
          alt="Wartezimmer mit Kinderspielecke"
        />
      )
    }}
  />
)
export default Service3Image
