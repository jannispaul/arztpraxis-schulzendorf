import React from 'react'
import Buttonprimary from '../components/buttonprimary'
import { StaticQuery, graphql } from 'gatsby'
import styles from './sectionstandard.module.css'
import Img from 'gatsby-image'

const Emergency = (props) => (
  <section className={styles.section}>
    <div className={styles.imageContainer}>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} className={styles.img} alt="Ein bunter Blumenstrauß steht auf einem Tisch vor dem Hintergrund der Arztpraxis von innen"/>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.contentContainerBody}>
        <h2>Notdienst</h2>
        <p>Falls wir nicht erreichbar sind, wenden Sie sich bei allgemeinmedizinischen Erkrankungen an die hausärztliche Notfallpraxis im Aachenbach Krankenhaus in Königs Wusterhausen.</p>
        {/* <Buttonprimary link="tel:+493375288231">Tel: 03375 288231</Buttonprimary> */}
        <p>Wenn ein Hausbesuch notwendig ist, erreichen Sie den telefonischen hausärztlichen Notdienst Ihrer Umgebung unter</p>
        <Buttonprimary link="tel:116117 ">Tel: 116117 </Buttonprimary>
      </div>
    </div>
  </section>

)


export default props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "images/emergency.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  render={data => <Emergency data={data} {...props} />}
/>
)
