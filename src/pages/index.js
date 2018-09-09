import React from 'react'
import News from '../components/news'
import Times from '../components/times'
import Layout from '../components/layout'
import Footer from '../components/footer'
import  '../components/variables.css'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <News></News>
    <Times></Times>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
