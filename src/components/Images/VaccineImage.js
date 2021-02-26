import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledImage = styled(Img)`
  /* min-height: 100%;*/
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin-bottom: 16px;

  @media ${device.laptop} {
    width: 100%;
    flex: 1 0 50%;
    margin-right: 16px;
    margin-bottom: 0;
  }
`

const VaccineImage = () => (
  <StaticQuery
    query={graphql`
      query {
        vaccineImage: file(relativePath: { eq: "images/vaccine-notice.png" }) {
          childImageSharp {
            fluid(maxWidth: 710, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.vaccineImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Frau wird geimpft und zeigt einen Daumen hoch und ihren Impfpass."
        />
      )
    }}
  />
)
export default VaccineImage
