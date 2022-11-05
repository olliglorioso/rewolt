import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const MenuBar = () => {
  return (
    <AppBar>
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar