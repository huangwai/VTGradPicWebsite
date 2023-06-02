import React from "react";
import Pylons from "./Gallery_Sections/Pylons";
import Burruss from "./Gallery_Sections/Burruss";
import Torg from "./Gallery_Sections/Torg";
import Header from "./Header";
// import Test from "./Gallery_Sections/Test";
const Gallery = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      {/* <Test /> */}
      <Header />
      <Pylons />
      <Burruss />
      <Torg />
    </div>
  );
};

export default Gallery;
