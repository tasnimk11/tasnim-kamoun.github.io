import { Stack, Typography } from "@mui/material";

import { PdfViewer } from "../components/contactPage/PdfViewer";

import ContactButtons from "../components/contactPage/ContactButtons";

const ContactPage = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      spacing={{ xs: 2, md: 4, lg: 8 }}
      marginTop={"0 !important"}
    >
      <Stack spacing={2} alignItems={"center"}>
        <Typography
          variant="h5"
          fontWeight={900}
          sx={{
            background: "linear-gradient(to right, #6f403a, #ba6c62)",
            WebkitBackgroundClip: "text", // Ensures gradient is clipped to the text
            WebkitTextFillColor: "transparent", // Makes the background visible inside the text
            textFillColor: "transparent", // Ensures compatibility with non-WebKit browsers
          }}
        >
          My resume
        </Typography>
        <PdfViewer />
      </Stack>
      <ContactButtons />
    </Stack>
  );
};

export default ContactPage;
