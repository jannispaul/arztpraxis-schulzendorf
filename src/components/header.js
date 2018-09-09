import React from 'react'
import { Link } from 'gatsby'
import styles from 'header.module.css'
import logo from '../images/gatsby-icon.png'
import Icon from './icon'
import {ICONS} from '../constants/icons.js'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div className={styles.headerGroup}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo"/>
        Logo
      </Link>
      <div className={styles.links}>
        <Link to="tel:0">
          <Icon icon={ICONS.BUBBLE} color="var(--primary-color)"/> 010101010
        </Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/termine">Termine</Link>
      </div>
    </div>
  </div>
)

export default Header
