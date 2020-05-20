import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 0 auto 16px;

  @media ${device.tablet} {
    width: 190px;
    height: 190px;
  }
  @media ${device.laptop} {
  }
`

const FaceImage4 = () => (
  <StaticQuery
    query={graphql`
      query {
        faceImage4: file(relativePath: { eq: "images/praxis/face4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.faceImage4.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'cover' }}
          alt="Portraitaufnahme einer braunhaarigen Frau"
        />
      )
    }}
  />
)
export default FaceImage4
