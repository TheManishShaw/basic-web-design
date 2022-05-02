import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Faq from '../components/Faq'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Pricing from '../components/Pricing'
import styles from '../styles/Home.module.css'
import Testimonial from '../components/Testimonial'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tecblic</title>
        <meta name="description" content="Create by Tecblic" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar/>
      <Hero/>
      <Features/>
      <About/>
  
    
      <Projects/>
    <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}
