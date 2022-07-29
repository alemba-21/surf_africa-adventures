import React from 'react';
import "./Navbar.css";

import { useState } from 'react';
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>surfAfrica</h1>
      </Link>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Adventures">Adventures</Link>
          </li>
          <li>
            <Link to="/Booking">Booking</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color:'white'}}/> ) : (<FaBars size={20} style={{color:'white'}}/>)}
        </div>
    </div>
  );
};

export default Navbar