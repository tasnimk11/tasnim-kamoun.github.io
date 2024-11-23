import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("global") as any;

  const welcome_message = t("home_page.welcome_message");
  const work_title = t("home_page.work_title");

  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      sx={{ justifyContent: "center", alignItems: "center", width: "100%" }}
      spacing={{ xs: 5, md: 10 }}
    >
      <Box
        component="div"
        sx={{
          height: { xs: 200, md: 300 },
          maxWidth: 500,
          display: "flex", // Enables flexbox
          flexDirection: "column", // Aligns text vertically
          justifyContent: "center", // Centers content vertically
        }}
      >
        <Stack textAlign={{ xs: "center", md: "right" }}>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            TASNIM KAMOUN
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {work_title}
          </Typography>
          <Typography
            mt={{ xs: 1, md: 3 }}
            variant="subtitle1"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {welcome_message}
          </Typography>
        </Stack>
      </Box>

      <Box
        component="img"
        src="./homepage-id-pic.jpg"
        alt="Tasnim's Photo"
        sx={{
          width: 300,
          height: 300,
          borderRadius: "50%", // Example for a circular image
          objectFit: "cover", // Ensures the image fits nicely
        }}
      />
    </Stack>
  );
};

export default HomePage;
