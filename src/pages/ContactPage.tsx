import { Stack } from "@mui/material";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { PdfViewer } from "../components/PdfViewer";

const ContactPage = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {/* Download Resumé */}

      <PdfViewer />

      {/* TODO : Email */}
      {/* TODO : Linkedin */}
      {/* TODO : Git */}
    </Stack>
  );
};

export default ContactPage;
