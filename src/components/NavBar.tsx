import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import ThemeModeSwitch from "./navbar/ThemeModeSwitch";
import { LanguageSwitch } from "./navbar/LanguageSwitch";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./navbar/DrawerMenu";
import LogoIcon from "./navbar/LogoIcon";
import StackMenu from "./navbar/StackMenu";

const NavBar = () => {
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
            <StackMenu />

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
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default NavBar;
