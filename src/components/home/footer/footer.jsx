import React from "react";
import styles from "./footer.module.css";

const FooterHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        e-Proc Abipraya adalah e-Procurement di lingkungan PT Brantas Abipraya
        (Persero) untuk sarana pengadaan barang/jasa, informasi pengadaan antar
        Unit PT Brantas Abipraya, sesuai dengan Pedoman pengadaan barang/jasa
        yang berlaku di PT Brantas Abipraya (Persero) yang dilakukan secara
        online/elektronik dengan menggunakan fasilitas aplikasi e-Proc Abipraya.
      </div>
      <div className={styles.item}>        
        Telepon : P. +62 21 851 6290 Fax : F. +62 21 851 6095 Alamat : Jl. DI.
        Panjaitan Kav. 14 Cawang Jakarta Timur 13340 Email :
        pengadaan@brantas-abipraya.co.id
      </div>
    </div>
  );
};

export default FooterHome;
