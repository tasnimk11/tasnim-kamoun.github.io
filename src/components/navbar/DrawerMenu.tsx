import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  menu: {
    label: string;
    path: string;
    enabled: boolean;
  }[];
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDrawerToggle: () => void;
}

const DrawerMenu = ({
  menu,
  mobileOpen,
  setMobileOpen,
  handleDrawerToggle,
}: Props) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {menu.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                textDecoration: "none",
                "&.active": {
                  textDecoration: "underline", // Style for active route
                },
              }}
              disabled={!item.enabled}
              component={NavLink}
              to={item.path}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default DrawerMenu;
