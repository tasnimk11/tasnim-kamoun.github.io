import { Stack } from "@mui/material";

import { PdfViewer } from "../components/contactPage/PdfViewer";

import ContactButtons from "../components/contactPage/ContactButtons";

const ContactPage = () => {
  return (
    <Stack direction={"row"} spacing={8} marginTop={"0 !important"}>
      {/* TODO : Style Resonsivness */}
      <PdfViewer />
      <ContactButtons />
    </Stack>
  );
};

export default ContactPage;
