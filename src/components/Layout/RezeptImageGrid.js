import React from 'react'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

import RezeptGalleryImage1 from '../Images/RezeptGalleryImage1'
import RezeptGalleryImage2 from '../Images/RezeptGalleryImage2'
import RezeptGalleryImage3 from '../Images/RezeptGalleryImage3'
import RezeptGalleryImage4 from '../Images/RezeptGalleryImage4'

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
      <RezeptGalleryImage1></RezeptGalleryImage1>
      <RezeptGalleryImage3></RezeptGalleryImage3>
    </div>
    <div>
      <RezeptGalleryImage2></RezeptGalleryImage2>
      <RezeptGalleryImage4></RezeptGalleryImage4>
    </div>
  </StyledContainer>
)

export default HeadlineText
