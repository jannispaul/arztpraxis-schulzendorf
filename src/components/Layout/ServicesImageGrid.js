import React from 'react'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

import ServiceGalleryImage1 from '../Images/ServiceGalleryImage1'
import ServiceGalleryImage2 from '../Images/ServiceGalleryImage2'
import ServiceGalleryImage3 from '../Images/ServiceGalleryImage3'
import ServiceGalleryImage4 from '../Images/ServiceGalleryImage4'

const StyledContainer = styled.div`
  max-width: 1168px;
  margin: 0 auto;
  & > div {
    display: flex;
    margin-bottom: 16px;
    @media ${device.tablet} {
      margin-bottom: 32px;
    }
  }
`

const HeadlineText = (props) => (
  <StyledContainer>
    <div>
      <ServiceGalleryImage1></ServiceGalleryImage1>
      <ServiceGalleryImage2></ServiceGalleryImage2>
    </div>
    <div>
      <ServiceGalleryImage3></ServiceGalleryImage3>
      <ServiceGalleryImage4></ServiceGalleryImage4>
    </div>
  </StyledContainer>
)

export default HeadlineText
