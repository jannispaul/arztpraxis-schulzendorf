import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Legalcontainer from '../components/legalcontainer'
import ButtonPrimary from '../components/Layout/ButtonPrimary'

const Impressum = () => (
  <Layout>
    <Legalcontainer>
      <h1>Impressum</h1>
      <p>
        Hausarztpraxis Schulzendorf
        <br />
        Peggy von Niederhäusern
        <br />
        Fachärztin für Allgemeinmedizin
        <br />
        Illgenstraße 4<br />
        15732 Schulzendorf
      </p>
      <br />
      <ul>
        <li>
          Email:{' '}
          <Link to="mailto:info@arztpraxis-schulzendorf.de">
            info@arztpraxis-schulzendorf.de
          </Link>{' '}
        </li>
        <li>Telefon: 033762 48550</li>
        <li>Fax: 033752 48552</li>
      </ul>
      <br />
      <br />
      <h4>Berufsbezeichnung und berufsrechtliche Regelungen</h4>
      <p>
        Gesetzliche Berufsbezeichnung: Arzt, Approbationen verliehen in der
        Bundesrepublik Deutschland Fachärztin für Allgemeinmedizin
      </p>
      <br />
      <br />
      <h4>Zuständige Ärztekammer</h4>
      <p>
        Landesärztekammer Brandenburg
        <br />
        Geschäftsstelle Cottbus 
        <br />
        PF 10 14 45
        <br />
        03014 Cottbus
        <br />
        Web: <a href="www.laekb.de">www.laekb.de</a>
      </p>
      <br />
      <br />
      <h4>Berufsrechtliche Regelung</h4>
      <p>
        Berufsordnung für die Ärzte im Land Brandenburg
        <br />
        Gebührenordnung für Ärzte (GOÄ)
        <br />
        Heilberufsgesetz des Landes Brandenburg
        <br />
        Einheitlicher Bewertungsmaßstab (EBM)
        <br />
        <br />
        Die Regelungen finden Sie unter:
        <br />
        <a href="https://www.laekb.de/www/website/ServiceNavigation/download/">
          https://www.laekb.de/www/website/ServiceNavigation/download/
        </a>
      </p>
      <br />
      <br />
      <h4>Aufsichtsbehörde</h4>
      <p>
        Kassenärztliche Vereinigung Brandenburg
        <br />
        Pappelallee 5<br />
        14469 Potsdam
        <br />
        Web: <a href="www.kvbb.de">www.kvbb.de</a>
      </p>
      <br />
      <br />
      <h4>Angaben zur Arzthaftpflichtversicherung</h4>
      <p>
        Name und Sitz des Versicherers:
        <br />
        Deutsch Ärzteversicherung Allgemeine Zweigniederlassung der AXA Vers. AG
        <br />
        Postanschrift: 51171 Köln
        <br />
      </p>
      <br />
      <br />
      <h4>Design und Entwicklung</h4>
      <p>
        PixelPink Design Studio
        <br />
        <a href="https://www.pixel-pink.de">https://www.pixel-pink.de</a>
      </p>
      <br />
      <br />
      <ButtonPrimary link="/">Zurück zur Startseite</ButtonPrimary>
    </Legalcontainer>
  </Layout>
)

export default Impressum
