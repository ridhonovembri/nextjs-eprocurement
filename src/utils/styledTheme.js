"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const StyledTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledTheme;
