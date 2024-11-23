import {
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useThemeMode } from "../contexts/ThemeModeContext";

const MainLayouts = ({ children }) => {
  const { themeMode } = useThemeMode();

  const theme = createTheme({
    palette: { mode: themeMode },
    typography: {
      fontFamily: "Poppins",
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
          paddingTop={{ md: 10 }}
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
    </ThemeProvider>
  );
};

export default MainLayouts;
