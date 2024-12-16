import React, { createContext, useContext, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

// type MenuPagesType = "home" | "career" | "portfolio" | "intersts" | "contact";

type MenuListType = {
  label: string;
  path: string;
  enabled: boolean;
  icon: JSX.Element;
}[];

interface MenuContextType {
  selectedPage: string;
  setSelectedPage: (selectedMenuPage: string) => void;
  menu: MenuListType;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

// PROVIDER

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const { t } = useTranslation("global") as any;

  const menu = [
    {
      label: t("navbar_menu.home"),
      path: "/",
      enabled: true,
      icon: <RoofingOutlinedIcon />,
    },
    {
      label: t("navbar_menu.career"),
      path: "/career",
      enabled: true,
      icon: <BusinessCenterOutlinedIcon />,
    },
    {
      label: t("navbar_menu.portfolio"),
      path: "/portfolio",
      enabled: false,
      icon: <BookOutlinedIcon />,
    },
    {
      label: t("navbar_menu.interests"),
      path: "/intersts",
      enabled: false,
      icon: <StarBorderOutlinedIcon />,
    },
    {
      label: t("navbar_menu.contact"),
      path: "/contact",
      enabled: true,
      icon: <MarkEmailUnreadOutlinedIcon />,
    },
  ];

  const [selectedPage, setSelectedPage] = useState(menu[0].path);

  return (
    <MenuContext.Provider
      value={{
        selectedPage: selectedPage,
        setSelectedPage: setSelectedPage,
        menu: menu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// CUSTOM HOOK

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
