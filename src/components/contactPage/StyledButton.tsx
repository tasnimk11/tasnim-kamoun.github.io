import { Button } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  link: string;
  icon: ReactElement;
  label: string;
}
const StyledButton = ({ label, link, icon }: Props) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="outlined"
      size={"small"}
      startIcon={icon}
      sx={{
        paddingX: 2,
        paddingY: 0.75,
        "&:hover": {
          background: "linear-gradient(to right, #6f403a, #ba6c62)", // Gradient vertical
          color: "#fff", // Couleur du texte en hover (optionnel)
        },
      }}
      onClick={() => openInNewTab(link)}
      color="primary"
    >
      {label}
    </Button>
  );
};

export default StyledButton;
