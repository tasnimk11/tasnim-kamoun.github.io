import { Typography } from "@mui/material";
import React from "react";

const LogoIcon = () => {
  return (
    <Typography
      width={"10%"}
      variant="h4"
      fontWeight={900}
      sx={{
        background: "linear-gradient(to right, #6f403a, #ba6c62)", // Your gradient colors
        WebkitBackgroundClip: "text", // Ensures gradient is clipped to the text
        WebkitTextFillColor: "transparent", // Makes the background visible inside the text
        textFillColor: "transparent", // Ensures compatibility with non-WebKit browsers
      }}
    >
      TK
    </Typography>
  );
};

export default LogoIcon;
