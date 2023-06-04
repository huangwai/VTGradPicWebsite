import React from "react";
import Pylons from "./Gallery_Sections/Pylons";
import Burruss from "./Gallery_Sections/Burruss";
import Torg from "./Gallery_Sections/Torg";
import Header from "./Header";
// import Test from "./Gallery_Sections/Test";
const Gallery = () => {
  return (
    <div id="#gallery-content" style={{ marginBottom: 100 }}>
      <a href="#gallery-content"></a>
      {/* <Header /> */}
      {/* <Test /> */}
      {/* <Header /> */}
      <Pylons />
      <Burruss />
      <Torg />
    </div>
  );
};

export default Gallery;
