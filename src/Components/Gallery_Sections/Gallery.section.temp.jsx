import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import FadeInSection from "../FadeInSection";
import "../../css/Gallery.css";
import DownloadIcon from "@mui/icons-material/Download";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { saveAs } from "file-saver";

// import Random from "../Random";
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
const Gallery_template = (props) => {
  // const [name] = props;
  const [imageUrls, setImageUrls] = useState([]);

  let title;
  if (props.name === "Torg") {
    title = "Torgersen Bridge";
  } else if (props.name === "Pylons") {
    title = "Pylons";
  } else {
    title = "Burruss";
  }
  useEffect(() => {
    // Get a reference to the storage bucket
    const storageRef = storage.ref(`/${props.name}`);

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

  //handles when a person clicks on an image
  const handleDownload = (image) => {
    console.log(`${image}?w=248&fit=crop&auto=format`);
    console.log("12url : name ", image, " - ", image.alt);
    // const link = document.createElement("a");
    // link.href = image.url;
    // link.download = "cool";
    // link.click();
    // saveAs(`${image}?w=248&fit=crop&auto=format`, "pixbyhuynh");
    // window.open(imageUrl, "_self");
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const modalStyles = {
    content: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      margin: "auto",
      marginTop: "10vh",
      textAlign: "center",
    },
  };
  useEffect(() => {
    Modal.setAppElement("#root"); // Set the app element for the modal
  }, []);
  return (
    <div className="gallery-text">
      <h2>{title}</h2>
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
            height: "90%",
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
                  {selectedImage && (
                    <>
                      <CloseIcon
                        // sx={{ fontSize: 32 }}
                        onClick={closeModal}
                        onMouseEnter={() => {
                          document.body.style.cursor = "pointer";
                        }}
                        onMouseLeave={() => {
                          document.body.style.cursor = "default";
                        }}
                      />
                      <img
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                        }}
                        src={selectedImage}
                        alt="Selected Image"
                      />
                      <DownloadIcon
                        onClick={() => handleDownload(item)}
                        onMouseEnter={() => {
                          document.body.style.cursor = "pointer";
                        }}
                        onMouseLeave={() => {
                          document.body.style.cursor = "default";
                        }}
                      />
                    </>
                  )}
                  {/* <CloseIcon
                    // sx={{ fontSize: 32 }}
                    onClick={closeModal}
                    onMouseEnter={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      document.body.style.cursor = "default";
                    }}
                  /> */}
                  {/* <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                    src={selectedImage}
                    alt="Selected Image"
                  /> */}
                  {/* <DownloadIcon
                    onClick={() =>
                      handleDownload(
                        `${item}?w=248&fit=crop&auto=format`,
                        image.title
                      )
                    }
                    onMouseEnter={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      document.body.style.cursor = "default";
                    }}
                  /> */}
                </Modal>
              </ImageListItem>
            </FadeInSection>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Gallery_template;
