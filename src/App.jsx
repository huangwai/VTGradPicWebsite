import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Torg from "./Components/Gallery_Sections/Torg";
import Burruss from "./Components/Gallery_Sections/Burruss";
import Pylons from "./Components/Gallery_Sections/Pylons";
// import Hero2 from "./Components/Hero2";
import Home from "./Components/Home";
import { Divider } from "@mui/material";
// import ScrollToTopButton from "./Components/ButtonScroll";
import Error from "./Components/Error";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <ScrollToTopButton /> */}
        {/* Routes go into here */}
        <Routes>
          {/* Home route */}
          <Route exact path="/" element={<Home />} />
          {/* Route for Burruss */}
          <Route exact path="/burruss" element={<Burruss />} />

          {/* Route for Pylons */}
          <Route exact path="/pylons" element={<Pylons />} />

          {/* Route for Torg Bridge */}
          <Route exact path="/torgbridge" element={<Torg />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Gallery /> */}
        {/* Footer Recap */}
        <Divider />
        {/* <Footer /> */}
        {/* Include social links */}
      </Router>
    </div>
  );
}

export default App;
