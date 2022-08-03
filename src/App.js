import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Adventures from "./Links/Adventures";
import Booking from "./Links/Booking";
import Home from "./Links/Home";
import Contact from "./Links/Contact";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adventures" element={<Adventures />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
