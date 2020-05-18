import React from 'react'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledButton = styled.a`
  display: inline-block;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background: #0a1468;
  border-radius: 5px;
  padding: 12px 16px 11px;
  margin-bottom: 12px;
  transition: all 200ms ease;
  width: 100%;

  :hover {
    background: #0a1468;
    transition: all 200ms ease;
  }

  @media ${device.tablet} {
    width: auto;
    align-self: flex-start;
    margin-right: 12px;
  }
`

const ButtonPrimary = (props) => (
  <StyledButton href={props.link}>{props.children}</StyledButton>
)

export default ButtonPrimary
