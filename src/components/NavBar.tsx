import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ThemeModeSwitch from "./navbar/ThemeModeSwitch";
import { LanguageSwitch } from "./navbar/LanguageSwitch";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./navbar/DrawerMenu";
import LogoIcon from "./navbar/LogoIcon";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { label: "Home", path: "/", enabled: true },
    { label: "Career", path: "/career", enabled: false },
    { label: "Portfolio", path: "/portfolio", enabled: false },
    { label: "Interests", path: "/intersts", enabled: false },
    { label: "Contact", path: "/contact", enabled: true },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? `rgba(18, 18, 18, 0.6)`
              : `rgba(255, 255, 255, 0.6)`,
          backdropFilter: "blur(10px)", // Blurry effect
        }}
      >
        <Toolbar>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {/* DRAWER Activated */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Icon */}
            <LogoIcon />

            {/* MENU Activated */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {menu.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    textDecoration: "none",
                    "&.active": {
                      textDecoration: "underline", // Style for active route
                    },
                  }}
                  disabled={!item.enabled}
                  component={NavLink}
                  to={item.path}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* SWITCHERS */}
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"flex-end"}
              width={"10%"}
            >
              {/* LANGUAGE SWITCHER */}
              <LanguageSwitch />

              {/* THEME MODE SWITCHER */}
              <ThemeModeSwitch />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <DrawerMenu
        menu={menu}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default NavBar;
