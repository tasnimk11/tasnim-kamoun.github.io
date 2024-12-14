import { Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButton from "./StyledButton";
import { useTranslation } from "react-i18next";

const ContactButtons = () => {
  const { t } = useTranslation("global") as any;
  const emailButtonLabel = t("contact_page.email_button_label");
  const linkedinButtonLabel = t("contact_page.linkedin_button_label");
  const gitButtonLabel = t("contact_page.git_button_label");

  const email = "tasnim.kamoun11@gmail.com";
  const linkedinUrl = "http://www.linkedin.com/in/tasnim-k1108";
  const githubUrl = "https://github.com/tasnimk11";

  return (
    <Stack
      spacing={2}
      justifyContent={{ sm: "center", md: "center" }}
      alignItems={{ sm: "center", md: "unset" }}
      direction={{ xs: "column", sm: "row", md: "column" }}
      sx={{ width: "100%" }}
    >
      <StyledButton
        label={emailButtonLabel}
        link={`mailto:${email}`}
        icon={<AlternateEmailIcon />}
      />
      <StyledButton
        label={linkedinButtonLabel}
        link={linkedinUrl}
        icon={<LinkedInIcon />}
      />
      <StyledButton
        label={gitButtonLabel}
        link={githubUrl}
        icon={<GitHubIcon />}
      />
    </Stack>
  );
};

export default ContactButtons;
