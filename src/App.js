import React from "react";
import Navbar from "./components/NavbarComponent"
import Home from "./components/HomeComponent"
import Music from "./components/MusicComponent"
import Footer from "./components/FooterComponent"
import Contact from "./components/ContactComponent"
import Videos from "./components/VideosComponent"

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
