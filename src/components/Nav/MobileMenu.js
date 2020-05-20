import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MobileNav = styled.div`
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    padding-top: 100px;
    width: 100%;
    z-index: 50;
    background: #fff;
    /* background: ${(props) => (props.showMobileMenu ? 'blue' : 'green')}; */
    transform: ${(props) =>
      props.showMobileMenu ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: transform 400ms cubic-bezier(0.215, 0.610, 0.355, 1);
    & a{
          transform: ${(props) =>
            props.showMobileMenu ? 'translateY(0%)' : 'translateY(-100px)'};
    }
`

/*Mobile Nav Links with animation based on prop */
const StyledLink = styled(Link)`
  margin-top: 5vh;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;

  &.active {
    color: #ff2d7f;
  }

  /*animation of Menu items flying in slightly delayed*/
  &:last-of-type {
    transition-delay: 0;
  }
  &:nth-of-type(4) {
    transition-delay: 50ms;
  }
  &:nth-of-type(3) {
    transition-delay: 100ms;
  }
  &:nth-of-type(2) {
    transition-delay: 150ms;
  }
  &:nth-of-type(1) {
    transition-delay: 200ms;
  }
  transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
`
const StyledButton = styled(Link)`
  margin: 5vh auto;
  display: block;
  width: max-content;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  background: ${(props) => props.background};
  color: #fff !important;
  padding: 12px 16px 11px;
  border-radius: 4px;
`

const StyledExternal = styled.a`
  margin: 5vh auto;
  display: block;
  width: max-content;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  background: ${(props) => props.background};
  color: #fff !important;
  padding: 12px 16px 11px;
  border-radius: 4px;
`

const MobileMenu = (props) => {
  return (
    <MobileNav showMobileMenu={props.showMobileMenu}>
      <StyledLink
        to="/"
        // showMobileMenu={props.showMobileMenu}
        activeClassName="active"
      >
        Home
      </StyledLink>
      <StyledLink
        to="/leistungen/"
        // showMobileMenu={props.showMobileMenu}
        activeClassName="active"
      >
        Unsere Leistungen
      </StyledLink>
      <StyledLink
        to="/praxis/"
        // showMobileMenu={props.showMobileMenu}
        activeClassName="active"
      >
        Unsere Praxis
      </StyledLink>
      <StyledButton
        background="#FF2D7F"
        to="/online-rezept/"
        // showMobileMenu={props.showMobileMenu}
        activeClassName="active"
      >
        Online-Rezept
      </StyledButton>
      <StyledExternal
        href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/?utm_source=OTB-Button&utm_campaign=Kunden-Homepages"
        background="#00892F"
      >
        Online-Termin
      </StyledExternal>
    </MobileNav>
  )
}
export default MobileMenu
