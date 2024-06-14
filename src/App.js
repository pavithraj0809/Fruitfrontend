// import logo from './logo.svg';
import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Landingpage from "./components/Landingpage";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fruit from "./Fruit";
import Services from "./Services";
function App() {
  return (
    <BrowserRouter>
    <Home/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
