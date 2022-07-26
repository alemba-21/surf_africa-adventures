import React from 'react';
import "./Navbar.css";

import { useState } from 'react';
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className='header'>
      <Link to="/">
        <h1>surfAfrica</h1>
      </Link>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/Booking">Booking</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color:'white'}}/> ) : (<FaBars size={20} style={{color:'white'}}/>)}
        </div>
    </div>
  );
};

export default Navbar