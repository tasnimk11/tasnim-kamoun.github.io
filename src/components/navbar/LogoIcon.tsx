import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";

const LogoIcon = () => {
  const { setSelectedPage } = useMenu();

  return (
    <Typography
      width={"10%"}
      variant="h4"
      fontWeight={900}
      component={NavLink}
      to="/"
      sx={{
        background: "linear-gradient(to right, #6f403a, #ba6c62)", // Your gradient colors
        WebkitBackgroundClip: "text", // Ensures gradient is clipped to the text
        WebkitTextFillColor: "transparent", // Makes the background visible inside the text
        textFillColor: "transparent", // Ensures compatibility with non-WebKit browsers
        textDecoration: "none", // Removes underline from the link
      }}
      onClick={() => setSelectedPage("/")}
    >
      TK
    </Typography>
  );
};

export default LogoIcon;
