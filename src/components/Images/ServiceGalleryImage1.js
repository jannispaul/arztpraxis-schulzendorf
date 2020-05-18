import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  min-height: 100%;
  width: 100%;
  margin-right: 16px;
  @media ${device.tablet} {
    flex: 1 0 calc(50% - 16px);
    margin-right: 32px;
  }
  @media ${device.laptop} {
  }
`

const ServiceGalleryImage1 = () => (
  <StaticQuery
    query={graphql`
      query {
        serviceGalleryImage1: file(
          relativePath: { eq: "images/services/service1.jpg" }
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
      const image = data.serviceGalleryImage1.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'cover' }}
          alt="Einladender Eingang zur Arztpraxis mit Topfpflanzen an den Seiten"
        />
      )
    }}
  />
)
export default ServiceGalleryImage1
