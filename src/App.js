import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./Links/About";
import Booking from "./Links/Booking";
import Contacts from "./Links/Contacts";
import Home from "./Links/Home";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
