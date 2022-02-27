import React from "react";
import Navbar from "./components/NavbarComponent"
import Home from "./components/HomeComponent"
import Music from "./components/MusicComponent"
import Footer from "./components/FooterComponent"
import Contact from "./components/ContactComponent"
import Videos from "./components/VideosComponent"
import Merch from "./components/MerchComponent"
import Photos from "./components/PhotosComponent"
import MailingList from "./components/MailingListComponent"

import {Routes, Route} from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  return (
    <div className="app">
        <Navbar />

        <div className="mailing-container">
              <MailingList />
          </div>

        <ParallaxProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/merch" element={<Merch />} />
          </Routes>
        </ParallaxProvider>
        
        <Footer />
    </div>
  );
}

export default App;
