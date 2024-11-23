import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeModeContextType {
  themeMode: "light" | "dark";
  setThemeMode: (theme: "light" | "dark") => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
);

interface ThemeModeProviderProps {
  children: ReactNode;
}

// PROVIDER

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const switchTheme = (mode: "light" | "dark") => {
    setThemeMode(mode);
  };

  return (
    <ThemeModeContext.Provider
      value={{ themeMode: themeMode, setThemeMode: switchTheme }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

// CUSTOM HOOK

export const useThemeMode = (): ThemeModeContextType => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
};