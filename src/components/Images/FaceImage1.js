import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: 0 auto 16px;

  @media ${device.tablet} {
    width: 190px;
    height: 190px;
  }
  @media ${device.laptop} {
  }
`

const FaceImage1 = () => (
  <StaticQuery
    query={graphql`
      query {
        faceImage1: file(relativePath: { eq: "images/praxis/face1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.faceImage1.childImageSharp
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
export default FaceImage1
