import React from 'react'
import SectionStandard from '../components/sectionstandard'
import Buttonprimary from '../components/buttonprimary'


const Notdienst = () => (
  <SectionStandard image="green" backgroundColor="var(--color-lighter)">
    <div>
    <h2>Notdienst</h2>
    <p>Falls wir nicht erreichbar sind, wenden Sie sich bei allgemeinmedizinischen Erkrankungen an die hausärztliche Notfallpraxis im Aachenbach Krankenhaus in Königs Wusterhausen.</p>
    <Buttonprimary link="tel:+493375288231">Tel: 03375 288231</Buttonprimary>
    <p>Wenn ein Hausbesuch notwendig ist, erreichen Sie den telefonischen hausärztlichen Notdienst Ihrer Umgebung unter</p>
    <Buttonprimary link="tel:116117 ">Tel: 116117 </Buttonprimary>
    </div>
  </SectionStandard>
)

export default Notdienst