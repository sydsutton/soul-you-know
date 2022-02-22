import React from "react";
import Navbar from "./components/NavbarComponent"
import Home from "./components/HomeComponent"
import Shows from "./components/ShowsComponent"
import Music from "./components/MusicComponent"
import Footer from "./components/FooterComponent"

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
