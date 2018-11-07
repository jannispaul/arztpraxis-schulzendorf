import React from 'react'
// import { Link } from 'gatsby'
import styles from './hero.module.css'
import logoIcon from '../../content/images/logo-icon.svg'


const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <img src={logoIcon} alt="Arztpraxis Schulzendorf Logo" className={styles.logo}/>
      <div className={styles.copy}>
        <h1>Arztpraxis Schulzendorf</h1>
        <p>Sie suchen einen Hausarzt in Schulzendorf? Wir freuen uns auf Sie! Als Familienpraxis betreuen wir Patienten aller Altersgruppen ab drei Jahren bis ins Senium. Wir bieten Ihnen modernste Behandlungsmethoden und bilden uns selbstverständlich stetig an Universitäten und wissenschaftlich anerkannten Instituten weiter.</p>
      </div>
    </div>
    <svg viewBox="0 0 1440 93" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.wave} alt="Wavy Designelement">
      <path d="M409.228 50.1749C528.22 53.3157 646.024 62.5784 761.898 71.6893C998.043 90.2568 1226.17 108.194 1440 72.3997V39.6003C1167.07 3.8058 875.892 21.7431 574.478 40.3107C519.717 43.6841 464.617 47.0783 409.228 50.1749Z" fill="#F5F6FE"/>
      <path d="M1440 72.3997C1226.17 108.194 998.043 90.2568 761.898 71.6893C514.33 52.2236 257.951 32.065 0 72.3997V0H0.379325C145.93 4.38147 293.671 11.0948 443.139 17.8867C768.812 32.6854 1102.69 47.8569 1440 40.092V72.3997Z" fill="#FFF9E3"/>
      <path d="M761.898 71.6893C514.33 52.2236 257.951 32.065 0 72.3997V13.2451C152.204 14.8865 308.438 24.5108 467.521 34.3107C783.515 53.7765 1110.75 73.935 1440 33.6004V72.3997C1226.17 108.194 998.043 90.2569 761.898 71.6893Z" fill="#FFE6D7"/>
    </svg>
  </section>
)

export default Hero
