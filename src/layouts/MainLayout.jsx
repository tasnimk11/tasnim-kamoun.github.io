import { Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "../components/NavBar";

const MainLayouts = ({ children }) => {
  const theme = createTheme({
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
        }}
      >
        <NavBar />
        <Stack
          spacing={4}
          marginTop={{ xs: 10, md: 20 }}
          sx={{ justifyContent: "center", alignItems: "center" }}
          paddingX={{ xs: 3, md: 0 }}
        >
          {children}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayouts;
