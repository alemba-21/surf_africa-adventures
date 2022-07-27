import "./HeroImg.css";
import React from 'react'
import introImg from "../assets/pexels-ray-bilcliff-2055389.jpg"


const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={introImg} alt="introImg" />
    </div>
    <div className="content">
        <p>Welcome to Surf_africa Adventures</p>
    </div>
  </div>
}

export default HeroImg