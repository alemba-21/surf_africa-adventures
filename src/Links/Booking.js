import React from 'react'
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import HeroImg2 from '../components/HeroImg2';
import Packages from '../components/Packages';


const Booking = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Welcome" text="We feel honoured and pleased that you have liked our offers and we would love to serve you today. So, let us take you through on our Booking process."/>
      <Packages />
      <Form />
    </div>
  )
}

export default Booking