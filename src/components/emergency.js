import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from './Layout/ButtonPrimary'
import ContentCard from './Layout/ContentCard'
import EmergencyImage from './Images/EmergencyImage'

const StyledContent = styled.div`
  padding: 16px;
  font-size: 18px;
  flex: 1 0 50%;
`

const Emergency = (props) => (
  <section>
    <ContentCard>
      <EmergencyImage></EmergencyImage>
      <StyledContent>
        <h2>Notdienst</h2>
        <p>
          Falls wir nicht erreichbar sind, wenden Sie sich bei
          allgemeinmedizinischen Erkrankungen an die hausärztliche Notfallpraxis
          im Aachenbach Krankenhaus in Königs Wusterhausen.
        </p>
        {/* <ButtonPrimary link="tel:+493375288231">Tel: 03375 288231</ButtonPrimary> */}
        <p>
          Wenn ein Hausbesuch notwendig ist, erreichen Sie den telefonischen
          hausärztlichen Notdienst Ihrer Umgebung unter
        </p>
        <ButtonPrimary link="tel:116117 ">Tel: 116117 </ButtonPrimary>
      </StyledContent>
    </ContentCard>
  </section>
)
export default Emergency
// export default (props) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         imageOne: file(relativePath: { eq: "images/emergency.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => <Emergency data={data} {...props} />}
//   />
// )
