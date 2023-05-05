import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export type NavbarInterface = {};

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Programing React TEST
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
