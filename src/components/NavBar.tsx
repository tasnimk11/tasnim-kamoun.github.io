import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
    >
      <Toolbar>
        <Stack direction={"row"} spacing={4}>
          <Typography variant="subtitle2" color="black">
            Logo
          </Typography>
          <Typography variant="subtitle2" color="black">
            FR/EN
          </Typography>
          <Typography variant="subtitle2" color="black">
            Theme Mode Switch
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
