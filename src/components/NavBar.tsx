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
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

const NavBar = () => {
  const menu = [
    { label: "Home", path: "/", enabled: true, icon: <RoofingOutlinedIcon /> },
    {
      label: "Career",
      path: "/career",
      enabled: false,
      icon: <BusinessCenterOutlinedIcon />,
    },
    {
      label: "Portfolio",
      path: "/portfolio",
      enabled: false,
      icon: <BookOutlinedIcon />,
    },
    {
      label: "Interests",
      path: "/intersts",
      enabled: false,
      icon: <StarBorderOutlinedIcon />,
    },
    {
      label: "Contact",
      path: "/contact",
      enabled: true,
      icon: <MarkEmailUnreadOutlinedIcon />,
    },
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
            <Stack
              direction={"row"}
              justifyItems={"space-evenly"}
              paddingTop={1}
              sx={{ display: { xs: "none", md: "block" } }}
              spacing={2}
            >
              {menu.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    "&.active": {
                      fontWeight: "700", // Style for active route
                    },
                    "&.active .MuiSvgIcon-root": {
                      stroke: (theme) => theme.palette.text.primary, // match this to the color of your background
                      strokeWidth: "0.5px", // the higher the value, the thinner the SVG                    },
                    },
                  }}
                  disabled={!item.enabled}
                  component={NavLink}
                  to={item.path}
                  size="small"
                  startIcon={item.icon}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

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
