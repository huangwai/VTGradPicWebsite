import React from "react";
import Button from "@mui/material/Button";
import "../css/ScrollButton.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={handleScrollToTop}>
      <KeyboardDoubleArrowUpIcon color="black" />
    </Button>
  );
}

export default ScrollToTopButton;
