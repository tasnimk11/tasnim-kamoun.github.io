import { Button, Stack } from "@mui/material";
import { useMenu } from "../../contexts/MenuContext";
import { NavLink } from "react-router-dom";

const StackMenu = () => {
  const { menu, selectedPage, setSelectedPage } = useMenu();

  return (
    <Stack
      direction={"row"}
      justifyItems={"space-evenly"}
      paddingTop={1}
      sx={{ display: { xs: "none", md: "block" } }}
      spacing={2}
    >
      {menu.map((item) => (
        <Button
          key={item.label}
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: selectedPage === item.path ? 600 : 400,
            ".MuiSvgIcon-root": {
              stroke: (theme) => theme.palette.text.primary,
              strokeWidth: selectedPage === item.path ? "0.3px" : "0px",
            },
          }}
          disabled={!item.enabled}
          component={NavLink}
          to={item.path}
          size="small"
          startIcon={item.icon}
          onClick={() => setSelectedPage(item.path)}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
};

export default StackMenu;
