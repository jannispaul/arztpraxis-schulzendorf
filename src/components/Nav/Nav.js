import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BurgerButton from './BurgerButton'
import logo from '../../../content/images/logo.svg'
// import Button from '../../components/Button'
import { device } from '../../theme/breakpoints'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 68px;
  width: 100%;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding-left: 14px;
  font-size: var(--small);

  /*Nav bar on desktop*/
  @media ${device.laptop} {
    height: 100px;
    padding: 0 32px;
  }
  /*Vertically center the Logo*/
  & > a {
    margin-top: 1px;
    display: flex;
  }

  /*Hide BurgerButton on Dektop*/
  @media ${device.laptop} {
    & > :last-child {
      display: none;
    }
  }
`
const StyledLogo = styled.img`
  height: 34px;
  @media ${device.laptop} {
    height: 48px;
  }
`

const DesktopLinks = styled.div`
  /*Hide Dekstop Nav links on mobile*/
  display: none;

  @media ${device.laptop} {
    display: inline-block;
  }
  /*Desktop Nav links*/
  & > a {
    /* color: #0a1468; */
    text-decoration: none;
    font-weight: 500;
    font-size: 19px;
    transition: all 100ms;
    margin-left: var(--space-l);

    :hover {
      transition: all 100ms;
      color: #2a72d3;
      /* color: var(--color-primary); */
    }

    &.active {
      color: #2a72d3;
      color: var(--color-primary);
      padding-bottom: 37px;
      border-bottom: 4px solid var(--color-primary);
    }
    :not(:last-of-type) {
      margin-right: 24px;
    }
  }
`

const StyledButton = styled.a`
  background: ${(props) => props.background};
  color: #fff !important;
  padding: 12px 16px 11px;
  border-radius: 4px;
  :hover {
    color: #fff !important;
    cursor: pointer;
  }
`

const NavBar = (props) => (
  <Header>
    <Nav>
      <Link to="/">
        <StyledLogo src={logo} alt="Arztpraxis Schulzendorf Logo" />
      </Link>
      <DesktopLinks>
        <Link to="/leistungen" activeClassName="active">
          Unsere Leistungen
        </Link>
        <Link to="/praxis" activeClassName="active">
          Unsere Praxis
        </Link>
        <StyledButton href="/online-rezept" background="#FF2D7F">
          Online-Rezept
        </StyledButton>
        <StyledButton
          href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/?utm_source=OTB-Button&utm_campaign=Kunden-Homepages"
          background="#00892F"
        >
          Online-Termin
        </StyledButton>
      </DesktopLinks>
      <BurgerButton
        click={props.burgerButtonClickHandler}
        showMobileMenu={props.showMobileMenu}
      />
    </Nav>
  </Header>
)

export default NavBar
