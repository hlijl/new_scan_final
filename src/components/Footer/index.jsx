import React from "react";
import styles from "./Footer.module.css";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img className={styles.imgLogo} src={LogoInverted} alt="Logo" />
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11 info@skan.ru</div>
        </div>
        <div>&copy; Copyright. 2022</div>
      </div>
    </footer>
  );
}

export default Footer;
