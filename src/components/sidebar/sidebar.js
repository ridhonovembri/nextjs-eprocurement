import React from "react";
import { Box } from "@mui/material";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <Box flex={1} sx={{ minHeight: "92vh" }}>
      <Box position="fixed">
        <Menu />
      </Box>
    </Box>
  );
};

export default Sidebar;
