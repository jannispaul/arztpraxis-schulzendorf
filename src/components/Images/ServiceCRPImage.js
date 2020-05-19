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
    /* margin-right: 16px; */
  }
  @media ${device.laptop} {
  }
`

const ServiceCRPImage = () => (
  <StaticQuery
    query={graphql`
      query {
        serviceCRPImage: file(
          relativePath: { eq: "images/services/service-crp.jpg" }
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
      const image = data.serviceCRPImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'cover' }}
          alt="CRP-Messgerät in Benutzung"
        />
      )
    }}
  />
)
export default ServiceCRPImage
