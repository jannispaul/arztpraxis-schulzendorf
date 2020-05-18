import React from 'react'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

import PraxisGalleryImage1 from '../Images/PraxisGalleryImage1'
import PraxisGalleryImage2 from '../Images/PraxisGalleryImage2'
import PraxisGalleryImage3 from '../Images/PraxisGalleryImage3'
import PraxisGalleryImage4 from '../Images/PraxisGalleryImage4'

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
      <PraxisGalleryImage1></PraxisGalleryImage1>
      <PraxisGalleryImage3></PraxisGalleryImage3>
    </div>
    <div>
      <PraxisGalleryImage2></PraxisGalleryImage2>
      <PraxisGalleryImage4></PraxisGalleryImage4>
    </div>
  </StyledContainer>
)

export default HeadlineText
