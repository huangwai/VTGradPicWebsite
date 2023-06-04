import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import FadeInSection from "../FadeInSection";
import "../../css/Gallery.css";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 900,
    },
  },
});
const Torg = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Get a reference to the storage bucket
    const storageRef = storage.ref("/Torg");

    // Fetch the list of images from the storage bucket
    storageRef.listAll().then((res) => {
      const promises = res.items.map((item) =>
        item.getDownloadURL().catch((error) => console.log(error))
      );

      Promise.all(promises).then((urls) => {
        setImageUrls(urls);
      });
    });
  }, []);

  const handleImgClick = () => {
    console.log("clicked");
  };
  return (
    <div className="Torg">
      <h2
        style={{
          marginTop: "20vh",
          marginBottom: "5vh",
          textAlign: "center",
          fontSize: "2.5rem",
          color: "grey",
        }}
      >
        Torgersen Bridge
      </h2>
      <ThemeProvider theme={theme}>
        <Box
          gap={1}
          sx={{
            mx: "auto",
            my: "auto",

            display: "grid",
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            gridTemplateColumns: {
              mobile: "repeat(2, 1fr)",
              bigMobile: "repeat(2, 1fr)",
              tablet: "repeat(2, 1fr)",
              desktop: "repeat(3, 1fr)",
            },
            [`& .${imageListItemClasses.root}`]: {
              display: "flex",
              flexDirection: "column",
            },
            width: "85%",
            height: "95%",
          }}
        >
          {imageUrls.map((item, index) => (
            <FadeInSection key={item}>
              <ImageListItem key={item}>
                <img
                  key={index}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={handleImgClick}
                />
              </ImageListItem>
            </FadeInSection>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Torg;
