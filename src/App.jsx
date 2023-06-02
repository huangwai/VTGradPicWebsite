import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      {/* <Header /> */}
      {/* Navbar */}
      {/* Hero Component */}
      {/* Gallery */}
      <Gallery />
      {/* Misc Pictures */}
      {/* Footer Recap */}
      <Footer />
      {/* Include social links */}
    </div>
  );
}

export default App;
