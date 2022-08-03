import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HeroImg2 heading="About" text="SurfAfrica Adventures is the best company to liase with during your vacation. It provides efficient services for our clients."/>
      <Footer />
  </div>
  );
}

export default Home