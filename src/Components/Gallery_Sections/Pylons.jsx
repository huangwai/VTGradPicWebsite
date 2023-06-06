import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import FadeInSection from "../FadeInSection";
import "../../css/Gallery.css";
import DownloadIcon from "@mui/icons-material/Download";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

// import Header from "../Header";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import Gallery_template from "./Gallery.section.temp";
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
const Pylons = () => {
  // const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   // Get a reference to the storage bucket
  //   const storageRef = storage.ref("/Pylons");

  //   // Fetch the list of images from the storage bucket
  //   storageRef.listAll().then((res) => {
  //     const promises = res.items.map((item) =>
  //       item.getDownloadURL().catch((error) => console.log(error))
  //     );

  //     Promise.all(promises).then((urls) => {
  //       setImageUrls(urls);
  //     });
  //   });
  // }, []);

  // //handles when a person clicks on an image
  // const handleDownload = (event, imageUrl) => {
  //   event.preventDefault();
  //   const windowFeatures = "width=800,height=600,resizable,scrollbars=yes";
  //   window.open(imageUrl, "_blank", windowFeatures);
  //   // window.open(imageUrl, "_self");
  // };
  // const [selectedImage, setSelectedImage] = useState(null);

  // const openModal = (imageUrl) => {
  //   setSelectedImage(imageUrl);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };
  // const modalStyles = {
  //   content: {
  //     width: "70%", // Adjust the width as needed
  //     height: "80%", // Adjust the height as needed
  //     margin: "auto",
  //     marginTop: "10vh",
  //   },
  // };
  // useEffect(() => {
  //   Modal.setAppElement("#root"); // Set the app element for the modal
  // }, []);
  return (
    <div className="gallery-text">
      <Gallery_template name="Pylons" />
      {/* <h2>Pylons</h2>
      <ThemeProvider theme={theme}>
        <Box
          className="Box"
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
            // width: "85%",
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
                  onClick={() =>
                    openModal(`${item}?w=248&fit=crop&auto=format`)
                  }
                  onMouseEnter={() => {
                    document.body.style.cursor = "pointer";
                  }}
                  onMouseLeave={() => {
                    document.body.style.cursor = "default";
                  }}
                />

                <Modal
                  isOpen={!!selectedImage}
                  onRequestClose={closeModal}
                  style={modalStyles}
                >
                  <CloseIcon
                    onClick={closeModal}
                    onMouseEnter={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      document.body.style.cursor = "default";
                    }}
                  />
                  <img
                    style={{ width: "100%" }}
                    src={selectedImage}
                    alt="Selected Image"
                  />
                  <DownloadIcon
                    // onClick= {hand}
                    onMouseEnter={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      document.body.style.cursor = "default";
                    }}
                  />
                </Modal>
              </ImageListItem>
            </FadeInSection>
          ))}
        </Box>
      </ThemeProvider> */}
    </div>
  );
};

export default Pylons;
