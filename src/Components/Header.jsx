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
// import AdbIcon from '@mui/icons-material/Adb';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';

const pages = ["Pylons", "Torg Bridge", "Burruss", "Misc"];
// const settings = ['miju', 'graduation', 'captialone', 'steelwool','perrystreet','nyc','nyla'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
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
      <ScrollToHide threshold={0}>
        <AppBar
          sx={{
            bgcolor: "#10131F",
            mx: "auto",
            whiteSpace: "normal",
          }}
          position="fixed"
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ bgcolor: "#10131F", mx: "auto" }} disableGutters>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: "30px",
                  textDecoration: "none",
                }}
              >
                PixByHuynh
              </Typography>

              <Box
                sx={{
                  bgcolor: "#10131F",
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
                  color="inherit"
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Button
                        href={`/${page}`}
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          textAlign: "center",
                          my: 2,
                          color: "black",
                          display: "block",
                          fontSize: "15px",
                          paddingInlineStart: 2,
                        }}
                      >
                        {page}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: "20px",
                  textDecoration: "none",

                  pl: 2,
                }}
              >
                Jimmy Huynh
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    href={`/${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "15px",
                      paddingInlineStart: 2,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* HERE WE DEAL WITH EXTRA TABS */}
              {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <Button 
            variant="text" 
            onClick={handleOpenUserMenu} 
            sx={{
              textAlign:'center', 
              my: 2, 
              color: 'white', 
              display: 'block', 
              fontSize: '15px', 
              paddingInlineStart: 2,
             }}
            >
              Explore more...
            </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Button
                href = {`/${setting}`}
                key={setting}
                onClick={handleCloseNavMenu}
                sx={{
                  textAlign:'center', 
                  my: 2, 
                  color: 'black', 
                  display: 'block', 
                  fontSize: '15px', 
                  paddingInlineStart: 2,
                 }}
              >
                {setting}
              </Button>
              ))}
            </Menu>
          </Box> */}
              <Button
                href="https://www.instagram.com/pixbyhuynh/"
                sx={{
                  my: 2,
                  color: "white",
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
      </ScrollToHide>
    </ThemeProvider>
  );
}
