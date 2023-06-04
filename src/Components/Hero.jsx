// import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Wrapper from "./UI/Wrapper/Wrapper";
// import Title from "./UI/Title/Title";
// import Subtitle from "./UI/Subtitle/Subtitle";
// import imageSrc from "../assets/_POG7813.png";

// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

// export default function BasicSlider() {
//   return (
//     <HeroSlider
//       slidingAnimation="left_to_right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) =>
//         console.log("onBeforeChange", previousSlide, nextSlide)
//       }
//       onChange={(nextSlide) => console.log("onChange", nextSlide)}
//       onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.33)",
//       }}
//       settings={{
//         slidingDuration: 250,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: true,
//         autoplayDuration: 5000,
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       {/* <Overlay> */}
//       <Wrapper>
//         <Title>Basic Setup</Title>
//         <Subtitle>
//           Check out the documentation for more advanced examples.
//         </Subtitle>
//       </Wrapper>
//       {/* </Overlay> */}

//       <Slide
//         // shouldRenderMask
//         label="Giau Pass - Italy"
//         background={{
//           backgroundImageSrc: imageSrc,
//           backgroundAttachment: "fixed",
//         }}
//       />

//       <Slide
//         // shouldRenderMask
//         label="Bogliasco - Italy"
//         background={{
//           backgroundImageSrc: bogliasco,
//           backgroundAttachment: "fixed",
//         }}
//       />

//       <Slide
//         // shouldRenderMask
//         label="County Clare - Ireland"
//         background={{
//           backgroundImageSrc: countyClare,
//           backgroundAttachment: "fixed",
//         }}
//       />

//       <Slide
//         // shouldRenderMask
//         label="Crater Rock, OR - United States"
//         background={{
//           backgroundImageSrc: craterRock,
//           backgroundAttachment: "fixed",
//         }}
//       />

//       <MenuNav />
//     </HeroSlider>
//   );
// }
