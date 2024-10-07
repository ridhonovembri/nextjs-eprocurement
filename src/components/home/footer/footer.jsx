import React from "react";
import styles from "./footer.module.css";

const FooterHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        e-Proc Batamindo adalah e-Procurement di lingkungan Industrial Batamindo
        untuk sarana pengadaan barang/jasa, sesuai dengan pedoman pengadaan yang
        berlaku dan dilakukan secara online/elektronik dengan menggunakan
        fasilitas aplikasi e-Proc Batamindo
      </div>
      <div className={styles.item}>
        Telepon : (+62) 0778-12345 <br />
        Fax : (+62) 0778-6789 <br />
        Alamat : Mukakuning, Kec. Sei Beduk, Kota Batam, Kepulauan Riau <br />
        Email : eproc@batamindo.co.id
      </div>
    </div>
  );
};

export default FooterHome;
