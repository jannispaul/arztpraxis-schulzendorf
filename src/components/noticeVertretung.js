import React from 'react'
import styles from './notice.module.css'
import Icon from './icon'
import { ICONS } from '../constants/icons.js'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'

const StyledContainer = styled.div`
  background: #f9bd21;
  width: 100%;
  font-size: 1rem;
  position: relative;
`
const Content = styled.div`
  width: auto;
  display: flex;
  padding: 1.25rem;
  @media ${device.tablet} {
    justify-content: center;
    margin: 0 auto;
  }
  p {
    color: white;
    margin: 0;
    @media ${device.tablet} {
      width: 700px;
    }
  }
`

const StyledIcon = styled.div`
  min-height: 100%;
  width: var(--space-l);
  display: none;
  align-items: center;
  background: var(--color-white);
  border-radius: 5px;
  flex: 0 0 var(--space-l);
  margin-right: var(--space-s);
  fill: var(--color-accent-dark);

  @media (min-width: 768px) {
    display: flex;
  }
`
const Notice = () => (
  <StyledContainer>
    <Content>
      <div className={styles.icon}>
        <Icon icon={ICONS.WARNING} />
      </div>
      <div>
        <p>
          <b>Vertretung vom 2.6. - 5.6.2020</b>
          <br />
          Dr. Fabian, Finkenweg 12 in Schulzendorf, Tel.: 42975 <br />
          Dr. Gorecki-Blassmann, Karl-Liebknecht-Str. 2 in Schulzendorf, Tel.:
          48067 <br />
          BITTE NUR MIT TELEFONISCHER ANMELDUNG! <br />
          Dr. Gottschall, Diepenseer Str. 7A in Waltersdorf, Tel.: 030 -
          63313023
        </p>
      </div>
    </Content>
  </StyledContainer>
)

export default Notice
