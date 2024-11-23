import {
  AppBar,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ThemeModeSwitch from "./ThemeModeSwitch";
import { useThemeMode } from "../contexts/ThemeModeContext";

const NavBar = () => {
  const [language, setLanguage] = React.useState("en");

  const { i18n } = useTranslation("global") as any;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      margin: theme.spacing(0.5),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0,
      },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
      {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
      },
  }));

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? `rgba(18, 18, 18, 0.6)` // Dark mode background with transparency
            : `rgba(255, 255, 255, 0.6)`, // Light mode background with transparency
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
          <StyledToggleButtonGroup
            value={language}
            exclusive
            onChange={handleChange}
            size="small"
          >
            <ToggleButton value="en">En</ToggleButton>
            <ToggleButton value="fr">Fr</ToggleButton>
          </StyledToggleButtonGroup>

          {/* THEME MODE SWITCHER */}
          <ThemeModeSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
