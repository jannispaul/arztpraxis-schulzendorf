import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledContainer = styled.div`
  position: relative;
  max-width: 700px;
  padding: 48px 16px;
  margin: 24px auto 20px;
  @media ${device.tablet} {
    padding: 16px;
    margin: 64px auto 20px;
    text-align: center;
  }
`

const StyledH2 = styled.h2`
  color: #100e6d;
`

const StyledLink = styled(Link)`
  color: #f1437f;
  font-weight: 500;
  text-decoration: none;
  :after {
    margin-left: 5px;
    content: '➝';
    transform: translateX(0);
    transition: transform 0.2s ease-out;
    display: inline-block;
  }

  :hover {
    :after {
      transform: translateX(5px);
      transition: transform 0.2s ease-out;
    }
  }
`

const HeadlineText = (props) => (
  <StyledContainer>
    <StyledH2>{props.h2}</StyledH2>
    <p>{props.p}</p>
    {/* <StyledLink to={props.link}>{props.linkText}</StyledLink> */}
    {props.link && props.linkText ? (
      <StyledLink to={props.link}>{props.linkText}</StyledLink>
    ) : (
      ''
    )}
  </StyledContainer>
)

export default HeadlineText
