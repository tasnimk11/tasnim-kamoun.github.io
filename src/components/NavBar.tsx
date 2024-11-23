import { AppBar, Stack, Toolbar } from "@mui/material";
import ThemeModeSwitch from "./navbar/ThemeModeSwitch";
import { LanguageSwitch } from "./navbar/LanguageSwitch";

const NavBar = () => {
  return (
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
          {/* LANGUAGE SWITCHER */}
          <LanguageSwitch />

          {/* THEME MODE SWITCHER */}
          <ThemeModeSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
