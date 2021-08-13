import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'
import HeadlineText from '../components/Layout/HeadlineText'
import FaceImage1 from '../components/Images/FaceImage1'
import FaceImage2 from '../components/Images/FaceImage2'
import FaceImage3 from '../components/Images/FaceImage3'
import FaceImage4 from '../components/Images/FaceImage4'

const StyledSection = styled.section`
  max-width: 1168px;
  margin: 0 auto;
`
const ContentContainer = styled.div`
  padding: 32px 16px;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  p {
    font-size: 14px;
  }
  & > div {
    flex: 1 0 50%;
    text-align: center;
    margin-bottom: 16px;
  }
  @media ${device.tablet} {
    p {
      font-size: 16px;
    }
  }
  @media ${device.laptop} {
    flex-wrap: no-wrap;
    & > div {
      flex: 1 0 25%;
    }
    p {
      font-size: 18px;
    }
  }
`

const Team = (props) => (
  <StyledSection>
    <HeadlineText
      h2="Das Praxisteam"
      p="Gesucht und gefunden. Das sind wir. 4 Frauen mitten im Leben mit Kind und Kegel. Wir versuchen die Arztpraxis zu leben, die wir uns für die Versorgung unserer eigenen Familien wünschen -freundlich, ruhig , mit jedem Problem ansprechbar."
    ></HeadlineText>
    <ContentContainer>
      <div>
        <FaceImage1></FaceImage1>
        <p>
          <strong>Peggy von Niederhäusern</strong>
          <br />
          FÄ für Allgemeinmedizin, Praxisinhaberin
        </p>
      </div>
      <div>
        <FaceImage2></FaceImage2>
        <p>
          <strong>Cindy Heinrich</strong>
          <br />
          Medizin. Fachangestellte, NäPa (Weiterbildung der KBV /
          "Gemeindeschwester Agnes")
        </p>
      </div>
      <div>
        <FaceImage3></FaceImage3>
        <p>
          <strong>Tanja Neumann</strong>
          <br />
          Medizin. Fachangestellte
        </p>
      </div>
    </ContentContainer>
  </StyledSection>
)
export default Team
