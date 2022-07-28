import React from 'react'
import Navbar from '../components/Navbar';

import Site from "../components/Site"

import HeroImg2 from '../components/HeroImg2';

const Adventures = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Adventures" text="Great places we have choosen for you"/>
      <Site />
    </div>
  )
}

export default Adventures