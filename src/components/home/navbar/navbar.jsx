import { AppBar, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Links from "./menu";

const NavbarHome = () => {
  return (
    <AppBar position="fixed">
      <Toolbar className={styles.container}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={70} height={70} alt="" />
          <Link href="/">e-procurement</Link>
        </div>
        <div className={styles.links}>
          {Links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarHome;
