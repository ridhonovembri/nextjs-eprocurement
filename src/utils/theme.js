// 'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    mystyle1: {
      // fontFamily: "Roboto, Helvetica, Arial, sans-serif", // Using Material-UI Typography with Merriweather
      fontWeight: 600,
      fontSize: "4rem",
      lineHeight: 1.2,
    },
    mystyle2: {
      // fontFamily: "Montserrat, sans-serif", // Using Material-UI Typography with Montserrat
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.5,
      color: 'red'
    },
    // Define other variants similarly
  },
});

export default theme;
