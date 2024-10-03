import React from "react";
import { Typography } from "@mui/material";

const Material = () => {
  return (
    <>
      <Typography variant="mystyle1" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <Typography variant="mystyle2">
        This is an example of how to use Material-UI Typography with custom
        fonts in a Next.js project. The h1 heading and this paragraph are styled
        according to the custom theme defined in theme.tsx.
      </Typography>
    </>
  );
};

export default Material;
