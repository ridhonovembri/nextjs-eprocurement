import React from "react";
import { Button, colors, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/utils/theme";


const SandboxPage = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Button
        variant="contained"
        size="large"
        startIcon={<DeleteIcon />}
        sx={{backgroundColor:theme.palette.secondary.light}}
      >
        Test
      </Button>
      <Button variant="contained" size="large" startIcon={<SendIcon />} color="error">
        Send
      </Button>
    </Stack>
  );
};

export default SandboxPage;
