import {
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
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
          paddingTop={{ xs: 10, md: 20 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.background.default,
          }}
          paddingX={{ xs: 3, md: 0 }}
        >
          {children}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayouts;
