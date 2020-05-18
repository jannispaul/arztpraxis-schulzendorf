import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'
// import News from '../components/news'
// import PraxisHero from '../components/PraxisHero'
// import Contact from '../components/contact'
// import Times from '../components/times'
// import ServicesTeaser from '../components/ServicesTeaser'
// import HeadlineText from '../components/Layout/HeadlineText'
// import PraxisImageGrid from '../components/Layout/PraxisImageGrid'
// import Team from '../components/Team'

// import Emergency from '../components/emergency'
// import Cookienotice from '../components/cookienotice'
// import Notice from '../components/notice'

const StyledSection = styled.section``
const StyledFormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 32px 16px;
  @media ${device.tablet} {
    p {
      font-size: 24px;
      margin-bottom: 48px;
    }
  }
`

const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  & > div {
    label {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      align-items: flex-start;
      margin: 0 0 16px 0;
      text-align: left;
    }
    input {
      font-size: 18px;
      padding: 12px;
      background: #f2f4f8;
      border: 1px solid #3a478f;
      border-radius: 3.6px;
      height: 48px;
      width: 100%;
    }
  }
  @media ${device.tablet} {
    & > div {
      display: flex;
      flex-wrap: wrap;
    }

    label {
      flex: 1 0 calc(50% - 8px);
      :nth-of-type(odd):not(:last-of-type) {
        margin-right: 16px;
      }
    }
  }
`
const StyledButton = styled.button`
  text-decoration: none;
  display: block;
  width: 100%;
  margin: 24px 0 12px 0;
  background: #0a1468;
  color: #fff !important;
  padding: 12px 16px 11px;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  flex: 1 0 100%;
  font-size: 18px;
  @media ${device.tablet} {
    display: inline-block;
    margin: 24px auto;
    width: auto;
    flex: 2 0 auto;
  }
  :hover {
    color: #fff !important;
    cursor: pointer;
  }
`

const StyledCheckbox = styled.label`
  text-align: left;
  display: flex;
  align-items: center;
  input {
    margin-right: 12px;
    /* display: inline-block; */
  }
  span {
    /* display: inline-block; */
  }
`
const IndexPage = () => (
  <Layout>
    <StyledSection>
      <StyledFormContainer>
        <h1>Online Rezept anfordern</h1>
        <p>
          Sie können gerne Ihre Rezepte online <b>ohne Wartezeit</b> anfordern.
          Diese liegen am Folgetag für Sie zur Abholung in unserer Praxis
          bereit.
        </p>
        <StyledForm action="https://hook.integromat.com/z50tcey4k521m0tp9gsf445mw6mrcg8c">
          <div>
            <input
              type="hidden"
              name="redirect"
              value="http://arztpraxis-schulzendorf.de/erfolg"
            ></input>
            <label>
              Vorname *<input type="text" name="vorname" required></input>
            </label>
            <label>
              Nachname *<input type="text" name="nachname" required></input>
            </label>
            <label>
              Geburtstag *<input type="text" name="geburtstag" required></input>
            </label>
            <label>
              E-Mail-Adresse *<input type="email" name="email" required></input>
            </label>
            <label>
              Medikament *<input type="text" name="medikament" required></input>
            </label>
          </div>
          <StyledCheckbox>
            <input type="checkbox" name="terms" required></input>
            <span>
              Hiermit stimme ich der Verarbeitung meiner Daten für den hier
              angebotenen Zweck zu.
            </span>
          </StyledCheckbox>
          <StyledButton type="submit">Abschicken</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    </StyledSection>
  </Layout>
)

export default IndexPage
