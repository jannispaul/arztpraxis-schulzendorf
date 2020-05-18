import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../../theme/breakpoints'

const StyledContainer = styled.div`
  max-width: 700px;
  padding: 16px;
  margin: 0 auto 20px;
  @media ${device.tablet} {
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
    content: ' ➝';
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
