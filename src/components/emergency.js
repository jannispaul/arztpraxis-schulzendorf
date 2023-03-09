import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from './Layout/ButtonPrimary'
import ContentCard from './Layout/ContentCard'
import EmergencyImage from './Images/EmergencyImage'
import { device } from '../theme/breakpoints'

const StyledSection = styled.section`
  @media ${device.tablet} {
    padding: 0 16px 0;
  }
`

const StyledContent = styled.div`
  padding: 16px;
  font-size: 18px;
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Emergency = (props) => (
  <StyledSection>
    <ContentCard>
      <EmergencyImage></EmergencyImage>
      <StyledContent>
        <h2>{props.h2}</h2>
        <p>{props.p1}</p>
        {/* <ButtonPrimary link="tel:+493375288231">Tel: 03375 288231</ButtonPrimary> */}
        <p>{props.p2}</p>
        <ButtonPrimary link="tel:116117 ">Tel: 116117 </ButtonPrimary>
      </StyledContent>
    </ContentCard>
  </StyledSection>
)
Emergency.defaultProps = {
  h2: 'Notdienst',
  p1:
    'Falls wir nicht erreichbar sind, wenden Sie sich bei allgemeinmedizinischen Erkrankungen an die hausärztliche Notfallpraxis im Aachenbach Krankenhaus in Königs Wusterhausen.',
  p2:
    'Wenn ein Hausbesuch notwendig ist, erreichen Sie den telefonischen hausärztlichen Notdienst Ihrer Umgebung unter',
}

export default Emergency
