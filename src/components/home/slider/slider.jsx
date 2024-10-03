'use client'
import React from "react";
import styles from "./slider.module.css";
import Masjid from "/public/bg21.jpg";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      {/* <div className={styles.container}> */}
        <Image src={Masjid} className={styles.img} />
      {/* </div>       */}
    </>
  );
};

export default Slider;
