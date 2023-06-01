import React from "react";

import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
// import "../../css/fade.css";
import FadeInSection from "../FadeInSection";
// import { Typography } from '@mui/material';

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

//HERE IS HOW WE PARSE THRU IMAGE FOLDER
function importAll(r) {
  return r.keys().map(r);
}
// const images = importAll(
//   require.context("./images/grad_2022", false, /\.(png|jpe?g|svg)$/)
// );

export default function Graduation() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        gap={2.5}
        sx={{
          mx: "auto",
          my: "auto",
          // mt: '25%',
          // mb: '1',
          backgroundColor: "#10131F",
          display: "grid",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
          width: "85%",
          height: "95%",
        }}
      >
        {/* {images.map((item) => (
          <FadeInSection key={item}>
            <ImageListItem
              key={item}
              // sx={{ maxWidth: '500px', maxHeight: '700px', mx:'auto', my:'auto' }}
            >
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </FadeInSection>
        ))} */}
      </Box>
    </ThemeProvider>
  );
}
