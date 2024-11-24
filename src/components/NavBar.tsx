import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ThemeModeSwitch from "./navbar/ThemeModeSwitch";
import { LanguageSwitch } from "./navbar/LanguageSwitch";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./navbar/DrawerMenu";
import LogoIcon from "./navbar/LogoIcon";
import { NavLink } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";

const NavBar = () => {
  const { menu, selectedPage, setSelectedPage } = useMenu();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  console.log("selected page : ", selectedPage);
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
                    fontWeight: selectedPage === item.path ? 700 : 400,
                    ".MuiSvgIcon-root": {
                      stroke: (theme) => theme.palette.text.primary,
                      strokeWidth: selectedPage === item.path ? "0.5px" : "0px",
                    },
                  }}
                  disabled={!item.enabled}
                  component={NavLink}
                  to={item.path}
                  size="small"
                  startIcon={item.icon}
                  onClick={() => setSelectedPage(item.path)}
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
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default NavBar;
