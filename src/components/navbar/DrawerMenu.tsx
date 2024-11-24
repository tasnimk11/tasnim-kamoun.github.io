import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const DrawerMenu = ({ mobileOpen, handleDrawerToggle }: Props) => {
  const { menu, selectedPage, setSelectedPage } = useMenu();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TK
      </Typography>
      <Divider />
      <Stack
        direction={"column"}
        paddingTop={1}
        alignItems={"center"}
        justifyContent={"space-around"}
        spacing={2}
      >
        {menu.map((item) => (
          <Button
            key={item.label}
            sx={{
              minWidth: "80%",
              justifyContent: "flex-start",
              textAlign: "left",
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
    </Box>
  );
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 200,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default DrawerMenu;
