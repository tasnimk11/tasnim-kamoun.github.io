import {
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useThemeMode } from "../contexts/ThemeModeContext";
import { MenuProvider } from "../contexts/MenuContext";

const MainLayouts = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useThemeMode();

  // theme creator : https://bareynol.github.io/mui-theme-creator/
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === "dark" ? "#ffffff" : "#000000",
      },
      secondary: {
        main: "#6f403a",
      },
      info: {
        main: "#ba6c62",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Container
          disableGutters
          sx={{
            minHeight: "100vh",
            paddingX: 0,
            margin: 0,
            minWidth: "100%",
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <NavBar />
          <Stack
            spacing={4}
            paddingTop={{ md: 5 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: (theme) => theme.palette.background.default,
            }}
            paddingX={{ xs: 3, md: 0 }}
          >
            <Toolbar />
            {children}
          </Stack>
        </Container>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default MainLayouts;
