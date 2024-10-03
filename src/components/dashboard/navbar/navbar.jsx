import theme from "@/utils/theme";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NavbarDashboard = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor:theme.palette.primary.light  }}>
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Image src="/logo.png" width={70} height={70} />
          <Typography variant="h5">Application Name</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarDashboard;
