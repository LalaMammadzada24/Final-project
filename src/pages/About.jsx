import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutInfo from '../components/about/AboutInfo'
import AboutSlider from '../components/about/AboutSlider'
import AboutContact from '../components/about/AboutContact'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutInfo/>
      <AboutSlider/>
      <AboutContact/>
    </div>
  )
}

export default About