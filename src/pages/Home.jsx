import React from 'react'
import Instacards from '../components/home/Instacards'
import Articlecard from '../components/home/Articlecard'
import ExoticFlowers from '../components/home/ExoticFlowers'
import Videocard from '../components/home/Videocard'
import Hero from '../components/home/Hero'
import ExtensivePlants from '../components/home/ExtensivePlants'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ExoticFlowers/>
      <Videocard/>
      <ExtensivePlants/>
      <Articlecard/>
      <Instacards/>
    </div>
  )
}

export default Home