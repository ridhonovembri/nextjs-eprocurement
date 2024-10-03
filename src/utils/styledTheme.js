"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

const StyledTheme = ({ children }) => {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
  )
};

export default StyledTheme;
