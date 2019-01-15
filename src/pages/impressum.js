import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Legalcontainer from '../components/legalcontainer'

const Impressum = () => (
  <Layout>
    <Legalcontainer>
      <h1>Impressum</h1>
      <p>
      Hausarztpraxis Schulzendorf<br />
      Peggy von Niederhäusern<br />
      Fachärztin für Allgemeinmedizin<br />
      Illgenstraße 4<br />
      15732 Schulzendorf
      </p>
      <p></p>
      <ul>
        <li>Email: <Link to="mailto:arztpraxis.schulzendorf@t-online.de">arztpraxis.schulzendorf@t-online.de</Link> </li>
        <li>Telefon: 033762 48550</li>
        <li>Fax: 033752 48552</li>
      </ul>
      <h4>Berufsbezeichnung und berufsrechtliche Regelungen</h4>
      <p>Gesetzliche Berufsbezeichnung: 
        Arzt, Approbationen verliehen in der Bundesrepublik Deutschland
        Fachärztin für Allgemeinmedizin
      </p>
      <h4>Zuständige Ärztekammer:</h4>
      <p>Landesärztekammer Brandenburg<br />
          Geschäftsstelle Cottbus <br />
          PF 10 14 45<br />
          03014 Cottbus<br />
          Web: <a href="www.laekb.de">www.laekb.de</a></p>
           
          <h4>Berufsrechtliche Regelung</h4>
        <p>Berufsordnung für die Ärzte im Land Brandenburg<br />
          Gebührenordnung für Ärzte (GOÄ)<br />
          Heilberufsgesetz des Landes Brandenburg<br />
          Einheitlicher Bewertungsmaßstab (EBM)<br />
           <br />
          Die Regelungen finden Sie unter:<br />
          <a href="https://www.laekb.de/www/website/ServiceNavigation/download/">https://www.laekb.de/www/website/ServiceNavigation/download/</a></p>
           
        <h4>Aufsichtsbehörde:</h4>
        <p>Kassenärztliche Vereinigung Brandenburg<br />
          Pappelallee 5<br />
          14469 Potsdam<br />
          Web: <a href="www.kvbb.de">www.kvbb.de</a><br />
        </p>
        <h4>Angaben zur Arzthaftpflichtversicherung</h4>
        <p>Name und Sitz des Versicherers:<br />
           Deutsch Ärzteversicherung Allgemeine Zweigniederlassung der AXA Vers. AG<br />
           Postanschrift: 51171 Köln<br />
        </p>
      <Link to="/">Zurück zur Startseite</Link>
    </Legalcontainer>
  </Layout>
)

export default Impressum
