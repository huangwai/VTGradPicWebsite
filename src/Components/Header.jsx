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
import ScrollToHide from "./ScrollToHide";
import "../css/Header.css";
const pages = ["Pylons", "Torg Bridge", "Burruss", "Misc"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
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

  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollToHide threshold={0}> */}
      <AppBar
        sx={{
          // margin: "4vh",
          bgcolor: "white",
          mx: "auto",
          whiteSpace: "normal",
          backgroundColor: "rgba(0,0,0,.5)",
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ bgcolor: "inherit", mx: "auto" }} disableGutters>
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
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              PixByHuynh
            </Typography>

            <Box
              sx={{
                bgcolor: "inherit",
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
                // sx={{ color: pink }}
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
                    href={"/pylons"}
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
                      fontSize: "20px",
                      "@media (max-width: 600px)": {
                        fontSize: "15px", // Font size for screens with a maximum width of 600px
                      },
                      "@media (min-width: 601px) and (max-width: 1024px)": {
                        fontSize: "20px", // Font size for screens with a width between 601px and 1024px
                      },
                      "@media (min-width: 1025px)": {
                        fontSize: "25px", // Font size for screens with a minimum width of 1025px
                      },
                      paddingInlineStart: 2,
                    }}
                  >
                    Pylons
                  </Button>
                </MenuItem>
                <MenuItem key={"Burruss"} onClick={handleCloseNavMenu}>
                  <Button
                    href={"/burruss"}
                    key={"Burruss"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                      textAlign: "center",
                      my: 2,
                      "@media (max-width: 600px)": {
                        fontSize: "15px", // Font size for screens with a maximum width of 600px
                      },
                      "@media (min-width: 601px) and (max-width: 1024px)": {
                        fontSize: "20px", // Font size for screens with a width between 601px and 1024px
                      },
                      "@media (min-width: 1025px)": {
                        fontSize: "25px", // Font size for screens with a minimum width of 1025px
                      },
                      color: "grey",
                      display: "block",
                      fontSize: "20px",
                      paddingInlineStart: 2,
                    }}
                  >
                    Burruss
                  </Button>
                </MenuItem>
                <MenuItem key={"Torg"} onClick={handleCloseNavMenu}>
                  <Button
                    href={"/torgbridge"}
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
                      fontSize: "20px",
                      "@media (max-width: 600px)": {
                        fontSize: "15px", // Font size for screens with a maximum width of 600px
                      },
                      "@media (min-width: 601px) and (max-width: 1024px)": {
                        fontSize: "20px", // Font size for screens with a width between 601px and 1024px
                      },
                      "@media (min-width: 1025px)": {
                        fontSize: "25px", // Font size for screens with a minimum width of 1025px
                      },
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
                color: "white",
                fontSize: "25px",
                "@media (max-width: 300px)": {
                  fontSize: "10px", // Font size for screens with a maximum width of 600px
                },
                "@media (max-width: 600px)": {
                  fontSize: "20px", // Font size for screens with a maximum width of 600px
                },
                "@media (min-width: 601px) and (max-width: 1024px)": {
                  fontSize: "30px", // Font size for screens with a width between 601px and 1024px
                },
                "@media (min-width: 1025px)": {
                  fontSize: "20px", // Font size for screens with a minimum width of 1025px
                },
                textDecoration: "none",

                pl: 2,
              }}
            >
              PixByHuynh
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                href={"/pylons"}
                key={"Pylons"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                  paddingInlineStart: 2,
                }}
              >
                Pylons
              </Button>
              <Button
                href={"/burruss"}
                key={"Burruss"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                  paddingInlineStart: 2,
                }}
              >
                Burruss
              </Button>
              <Button
                href={"/torgbridge"}
                key={"Torg"}
                onClick={handleCloseNavMenu}
                sx={{
                  ":hover": {
                    color: "black",
                  },
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                  paddingInlineStart: 2,
                }}
              >
                Torgersen Bridge
              </Button>
            </Box>
            <Button
              href="https://www.instagram.com/pixbyhuynh/"
              sx={{
                ":hover": {
                  color: "black",
                },
                my: 2,
                color: "white",
                display: "block",
                fontSize: "30px",
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
