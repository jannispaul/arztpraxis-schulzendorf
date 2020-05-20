import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'

const StyledCard = styled.div`
  width: 100%;
  max-width: 1168px;
  /* margin: auto; */
  background: #fff;
  @media ${device.tablet} {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 50px auto;
    border-radius: 4px;
    overflow: hidden;

    /* padding: 0 16px; */
  }
`
const ButtonPrimary = (props) => <StyledCard>{props.children}</StyledCard>

export default ButtonPrimary
