import React from 'react'
import styled from 'styled-components'
import ContentCard from './Layout/ContentCard'
import ButtonPrimary from './Layout/ButtonPrimary'
import ContactImage from './Images/ContactImage'

const StyledContent = styled.div`
  padding: 16px;
  font-size: 18px;
  flex: 1 0 50%;
`

const Contact = (props) => (
  <section>
    <ContentCard>
      <ContactImage></ContactImage>
      <StyledContent>
        <h2>Kontakt</h2>
        <p>
          Wir freuen uns auf Ihren Anruf und Besuch und helfen Ihnen bei Fragen
          gerne weiter! Sie finden uns in der{' '}
          <a href="https://www.google.com/maps/dir//Illgenstraße+4,+15732+Schulzendorf/@52.3622333,13.5877513,17z/data=!4m17!1m7!3m6!1s0x47a838a4c5591be3:0x69c8c39fd2d3c403!2sIllgenstraße+4,+15732+Schulzendorf!3b1!8m2!3d52.36223!4d13.58994!4m8!1m0!1m5!1m1!1s0x47a838a4c5591be3:0x69c8c39fd2d3c403!2m2!1d13.58994!2d52.36223!3e3">
            Illgenstr. 4 in 15732 Schulzendorf
          </a>
          .
        </p>
        <ButtonPrimary link="tel:+493376248550">
          Tel: 033762 48550
        </ButtonPrimary>
        <ButtonPrimary link="mailto:info@arztpraxis-schulzendorf.de">
          info@arztpraxis-schulzendorf.de
        </ButtonPrimary>
      </StyledContent>
    </ContentCard>
  </section>
)
export default Contact
// export default (props) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         imageOne: file(relativePath: { eq: "images/contact.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => <Contact data={data} {...props} />}
//   />
// )

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "images/testimage.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
