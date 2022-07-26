import "./HeroImg.css";
import React from 'react'
import introImg from "../assets/pexels-ray-bilcliff-2055389.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={introImg} alt="introImg" />
    </div>
    <div className="content">
        <p>Welcome to Surf_africa Adventures</p>
        <div>
            <Link to="/About" className="btn-1">About</Link>
            <Link to="/Contacts" className="btn-2">Contacts</Link>
        </div>
    </div>
  </div>
}

export default HeroImg