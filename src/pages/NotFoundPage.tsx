import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMenu } from "../contexts/MenuContext";
import { useEffect } from "react";

const NotFoundPage = () => {
  const { setSelectedPage } = useMenu();

  useEffect(() => {
    setSelectedPage("/not_found");
  }, [setSelectedPage]);

  const { t } = useTranslation("global") as any;

  const page_not_found = t("page_not_found");

  return (
    <Typography
      variant="h6"
      fontWeight={500}
      sx={{ color: (theme) => theme.palette.text.primary }}
      textAlign={"center"}
    >
      {page_not_found}
      <br /> :(
    </Typography>
  );
};

export default NotFoundPage;
