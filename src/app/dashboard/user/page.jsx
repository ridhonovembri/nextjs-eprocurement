import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import UserGrid from "@/components/dashboard/user/userGrid";

const User = async () => {
  const users = await axios.get("http://localhost:3005/api/users");
  // console.log(users.data)

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <UserGrid users={users.data} />
      </Box>
    </>
  );
};

export default User;
