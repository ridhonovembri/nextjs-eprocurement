import NavbarDashboard from "@/components/dashboard/navbar/navbar";
import SidebarDashboard from "@/components/dashboard/sidebar/sidebar";
import StyledTheme from "@/utils/styledTheme";
import theme from "@/utils/theme";
import { Stack } from "@mui/material";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StyledTheme>
          <NavbarDashboard />
          <Stack direction="row" justifyContent="space-between">
            <Stack flex={1} bgcolor={theme.palette.secondary.light}>
              <SidebarDashboard />
            </Stack>
            <Stack flex={6} sx={{ m: 2 }}>
              {children}
            </Stack>
          </Stack>
        </StyledTheme>
      </body>
    </html>
  );
};

export default LayoutDashboard;
