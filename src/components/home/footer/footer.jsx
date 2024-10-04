import React from "react";
import styles from "./footer.module.css";

const FooterHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet beatae quia voluptatum quae fugit qui eius. Similique, vero quos consequuntur fugiat voluptate porro itaque, sunt officiis libero dicta illo doloribus?
      </div>
      <div className={styles.item}>        
        Telepon : P. +62 21 851 6290 <br />
        Fax : F. +62 21 851 6095 <br />
        Alamat : Jl. DI. Panjaitan Kav. 14 Cawang Jakarta Timur 13340 <br />
        Email : pengadaan@brantas-abipraya.co.id
      </div>
    </div>
  );
};

export default FooterHome;
