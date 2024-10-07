import React from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <TextField id="input-username" label="User Name" size="medium" />
        <TextField
          id="input-password"
          label="Password"
          size="medium"
          type="password"
        />
        <Button variant="contained">Login</Button>
      </form>
      <div className={styles.misc}>
        <Link href="#">Lupa password?</Link>
        <Link href="#">Daftar Baru</Link>
      </div>
    </div>
  );
};

export default Login;
