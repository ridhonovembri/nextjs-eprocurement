"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const RegisterAccount = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("user name=>", e.target["input-username"].value);
    // console.log("email=>", e.target["input-email"].value);
    // console.log("pasword=>", e.target["input-password"].value);

    const userName = e.target["input-username"].value;  
    const email = e.target["input-email"].value;
    const password = e.target["input-password"].value;

    try {
      const res = await fetch(`/api/register/account/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
      });
      // console.log(res)
      res.status === 201 && router.push("/login");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField id="input-username" label="User Name" size="medium" />
        <TextField id="input-email" label="Email" size="medium" />
        <TextField
          id="input-password"
          label="Password"
          size="medium"
          type="password"
        />
        <Button variant="contained" type="submit">
          Daftar
        </Button>
      </form>
    </div>
  );
};

export default RegisterAccount;
