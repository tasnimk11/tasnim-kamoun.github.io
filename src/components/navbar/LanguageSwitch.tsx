import {
  styled,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
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
    <StyledToggleButtonGroup
      value={language}
      exclusive
      onChange={handleChange}
      size="small"
    >
      <ToggleButton value="en">En</ToggleButton>
      <ToggleButton value="fr">Fr</ToggleButton>
    </StyledToggleButtonGroup>
  );
};
