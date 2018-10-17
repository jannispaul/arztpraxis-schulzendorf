import React from 'react'
// import SectionStandard from '../components/sectionstandard'
import Buttonprimary from '../components/buttonprimary'
import img from '../images/testimage.png'
import styles from './sectionstandard.module.css'


const Kontakt = () => (
  <section className={styles.section}>
    <div className={styles.imageContainer}>
      <img src={img} alt="testimage" className={styles.img} />
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.contentContainerBody}>
        <h2>Kontakt</h2>
        <p>Wir freuen uns auf Ihren Anruf und Besuch und helfen Ihnen bei Fragen gerne weiter! Sie finden uns in der <a href="https://www.google.com/maps/dir//Illgenstraße+4,+15732+Schulzendorf/@52.3622333,13.5877513,17z/data=!4m17!1m7!3m6!1s0x47a838a4c5591be3:0x69c8c39fd2d3c403!2sIllgenstraße+4,+15732+Schulzendorf!3b1!8m2!3d52.36223!4d13.58994!4m8!1m0!1m5!1m1!1s0x47a838a4c5591be3:0x69c8c39fd2d3c403!2m2!1d13.58994!2d52.36223!3e3">Illgenstr. 4 in 15732 Schulzendorf</a>.</p>
        <Buttonprimary link="tel:+493376248550">Tel: 033762 48550</Buttonprimary>
        <Buttonprimary link="mailto:info@praxis-schulzendorf.de">info@praxis-schulzendorf.de</Buttonprimary>
      </div>
    </div>
  </section>
)

export default Kontakt

// export const query = graphql `
//   query LayoutQuery {
//     background: imageSharp(id: {regex:"/testimage.png/"}){
//       sizes(maxWidth: 1240){
//         GatsbyImageSharpSizes
//       }
//     }
//   }
//   `
