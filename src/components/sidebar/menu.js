"use client";
import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon  from "@mui/icons-material/Home";
import PersonIcon  from "@mui/icons-material/Person";
import FitbitIcon from '@mui/icons-material/Fitbit';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List>
        <ListItemButton componenet="a" href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton componenet="a" href="/user">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton componenet="a" href="/material">
          <ListItemIcon>
            <FitbitIcon />
          </ListItemIcon>
          <ListItemText primary="Materials" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Menu;
