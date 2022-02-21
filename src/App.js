import Navbar from "./components/NavbarComponent"
import Home from "./components/HomeComponent"
import Footer from "./components/FooterComponent"
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
