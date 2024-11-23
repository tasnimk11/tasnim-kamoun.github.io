import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ThemeModeSwitch from "./navbar/ThemeModeSwitch";
import { LanguageSwitch } from "./navbar/LanguageSwitch";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./navbar/DrawerMenu";

const NavBar = () => {
  const menu = ["Home", "Career", "Portfolio", "Interests", "Contact"];

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
            justifyContent={"flex-end"}
            width={"100%"}
          >
            {/* DRAWER Activated */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* MENU Activated */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menu.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>

            {/* LANGUAGE SWITCHER */}
            <LanguageSwitch />

            {/* THEME MODE SWITCHER */}
            <ThemeModeSwitch />
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
