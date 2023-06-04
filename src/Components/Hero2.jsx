import React from "react";
import imageSrc from "../assets/_POG7813.png";
import "../css/HeroComponent.css";
import "@fontsource/roboto/300.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
const Hero2 = () => {
  const scrollToSection = () => {
    console.log("clicked Explore Gallery Button");
    const section = document.getElementsByClassName("gallery-content");
    // section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="image-container">
      <div className="image-text">
        <h1 className="h1text">Virginia Tech Class of 2023</h1>
        <h2 className="h2text">Photos by Jimmy Huynh</h2>
        {/* <Link to="/gallery"> */}
        <a
          className="sus"
          href="gallery"
          onClick={scrollToSection}
          sx={{
            ":hover": {
              backgroundColor: "rgba(0,0,0,0.4)",
            },
          }}
        >
          Explore Gallery
        </a>
        {/* </Link> */}
        {/* <ArrowDownwardIcon /> */}
      </div>
    </div>
    // </div>
  );
};

export default Hero2;
