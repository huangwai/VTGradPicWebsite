import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ScrollToHide from "./ScrollToHide";
// import AdbIcon from '@mui/icons-material/Adb';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';

const pages = ["Pylons", "Torg Bridge", "Burruss", "Misc"];
// const settings = ['miju', 'graduation', 'captialone', 'steelwool','perrystreet','nyc','nyla'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    event.preventDefault();
    // const section = document.getElementsByClassName("Torg");
    // section.scrollIntoView({ behavior: "smooth" });
    setAnchorElNav(null);
    console.log("hi");
  };

  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  //handles scroll to section of page
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollToHide threshold={0}> */}
      <AppBar
        sx={{
          bgcolor: "white",
          mx: "auto",
          whiteSpace: "normal",
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ bgcolor: "white", mx: "auto" }} disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              sx={{
                ":hover": {
                  color: "black",
                },
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "grey",
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              PixByHuynh
            </Typography>

            <Box
              sx={{
                bgcolor: "white",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
                sx={
                  {
                    // maxWidth: ''
                  }
                }
              >
                <MenuIcon />
              </IconButton>

              {/* MENU WHEN MINIMAL */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={"Pylons"} onClick={handleCloseNavMenu}>
                  <Button
                    href={"Pylons"}
                    key={"Pylons"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                      textAlign: "center",
                      my: 2,
                      color: "grey",
                      display: "block",
                      fontSize: "15px",
                      paddingInlineStart: 2,
                    }}
                  >
                    Pylons
                  </Button>
                </MenuItem>
                <MenuItem key={"Burruss"} onClick={handleCloseNavMenu}>
                  <Button
                    href={"Burruss"}
                    key={"Burruss"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                      textAlign: "center",
                      my: 2,
                      color: "grey",
                      display: "block",
                      fontSize: "15px",
                      paddingInlineStart: 2,
                    }}
                  >
                    Burruss
                  </Button>
                </MenuItem>
                <MenuItem key={"Torg"} onClick={handleCloseNavMenu}>
                  <Button
                    href={"Torg"}
                    key={"Torg"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                      textAlign: "center",
                      my: 2,
                      color: "grey",
                      display: "block",
                      fontSize: "15px",
                      paddingInlineStart: 2,
                    }}
                  >
                    Torgersen Bridge
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              sx={{
                ":hover": {
                  color: "black",
                },
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "grey",
                fontSize: "20px",
                textDecoration: "none",

                pl: 2,
              }}
            >
              PixByHuynh
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                href={"Pylons"}
                key={"Pylons"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "grey",
                  display: "block",
                  fontSize: "15px",
                  paddingInlineStart: 2,
                }}
              >
                Pylons
              </Button>
              <Button
                a
                href={"Burruss"}
                key={"Burruss"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "grey",
                  display: "block",
                  fontSize: "15px",
                  paddingInlineStart: 2,
                }}
              >
                Burruss G
              </Button>
              <Button
                href={"Torg"}
                key={"Torg"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "grey",
                  display: "block",
                  fontSize: "15px",
                  paddingInlineStart: 2,
                }}
              >
                Torgersen Bridge
              </Button>
            </Box>
            <Button
              href="https://www.instagram.com/pixbyhuynh/"
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "15px",
                paddingInlineStart: 2,
              }}
            >
              <InstagramIcon sx={{ fontSize: "25px" }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </ScrollToHide> */}
    </ThemeProvider>
  );
}
