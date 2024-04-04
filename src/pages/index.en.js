import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Times from '../components/times'
import ServicesTeaser from '../components/ServicesTeaser'
import HeadlineText from '../components/Layout/HeadlineText'
import Disclaimer from '../components/disclaimer'

import Emergency from '../components/emergency'
import RezeptCard from '../components/RezeptCard'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Layout lang="en">
    <Helmet>
      <html lang="en" />
      <link
        rel="alternate"
        hreflang="en"
        href="https://arztpraxis-schulzendorf.de/en/"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://arztpraxis-schulzendorf.de/"
      />
      <title>General Practitioner Schulzendorf - Peggy von Niederhäusern</title>
      <meta
        name="keywords"
        content="general practitioner, doctor, english speaking, family,  Schulzendorf"
      ></meta>
      <meta
        name="description"
        content="We look forward to seeing you – your general practitioner in Schulzendorf. Doctor Peggy von Niederhäusern cares for the whole family ✓ Opening hours ✓ Contact ✓ Appointments"
      ></meta>
    </Helmet>
    {/* <News></News>*/}
    {/* <NoticeVertretung></NoticeVertretung> */}

    <Hero
      h1="General Practitioner in Schulzendorf"
      p="We’re proud to care for people from all over the world. If you’re looking for an English-speaking team, we would be delighted to welcome you and your family to our general practice."
      button="Book an Appointment Online"
      anchor="Opening Hours"
    ></Hero>
    <Disclaimer
      h2="Dear patients, due to the numerous phone and digital inquiries, please note the following instructions:"
      items={[
        {
          h3: 'If you wish to extend a sick note:',
          p: 'Please come to the practice without prior request.',
        },
        {
          h3: 'Are you using the online prescription request?',
          p:
            'Kindly refrain from inquiries after submission. Please visit your pharmacy 1 day after the online prescription request. The e-prescription will be stored on your health card.',
        },
        {
          h3: 'Are you ill?',
          p:
            'Please refrain from emailing symptom descriptions. Kindly visit our practice during our opening hours. We need to assess your condition to decide whether a sick note is sufficient or if you require further diagnostics.',
        },
      ]}
    ></Disclaimer>
    <Times
      h2="We’re There For You"
      p="We care for you with the latest standards of health diagnostics and know-how. As a team, we value continual professional training and we’re committed to passing on our medical and nursing knowledge to our patients."
      h3="Opening Hours"
      monday="Monday"
      tuesday="Tuesday"
      wednesday="Wednesday"
      thursday="Thursday"
      friday="Friday"
    ></Times>
    <ServicesTeaser
      h2="Our Services"
      p="From acute symptoms and chronic health issues to performing preventative screening and making plans for at-home care, you can count on us for guidance and support."
      link="/leistungen"
      linkText="Discover More"
    ></ServicesTeaser>
    <HeadlineText
      h2="Our Practice"
      p="Our lives revolve around medicine and caring for people, no matter the problem. We appreciate the trust you place in us and do our best to help you care for your most precious belonging: your health."
      link="/praxis"
      linkText="Discover More"
    ></HeadlineText>
    <RezeptCard
      h2="Order a Follow-Up Prescription Online"
      p="Now you can easily request a follow-up prescription online."
      button="Online Prescription"
    ></RezeptCard>
    <Contact
      h2="Contact"
      p="We’re happy to answer your questions and look forward to your call and visit! You can find us here:"
    ></Contact>
    <Emergency
      h2="Emergency Services"
      p1="If we’re not available and you’re experiencing a general health issue, please contact the emergency general practitioner’s office at Achenbach Krankenhaus in Königs Wusterhausen."
      p2="If a home visit is necessary, you can reach your area’s emergency medical service by telephone:"
    ></Emergency>
  </Layout>
)

export default IndexPage
