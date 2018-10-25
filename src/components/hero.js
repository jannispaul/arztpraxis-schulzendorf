import React from 'react'
// import { Link } from 'gatsby'
import styles from './hero.module.css'
import logo from '../../content/images/logo.svg'


const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
    <img src={logo} alt="Arztpraxis Schulzendorf Logo" className={styles.logo}/>
      <div className={styles.copy}>
        {/* <hr/> */}
        {/* <h1>Arztpraxis Schulzendorf</h1> */}
        <p>Sie suchen einen Hausarzt in Schulzendorf? Wir freuen uns auf Sie! Als Familienpraxis betreuen wir Patienten aller Altersgruppen ab drei Jahren bis ins Senium. Wir bieten Ihnen modernste Behandlungsmethoden und bilden uns selbstverständlich stetig an Universitäten und wissenschaftlich anerkannten Instituten weiter.</p>
      </div>
    </div>
     
  </section>
)

export default Hero
