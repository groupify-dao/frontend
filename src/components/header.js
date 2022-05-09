import styles from "../styles/header.module.css";
import React from "react";

import logo from "../assets/img/logo.png";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
        <span>GroupyFi</span>
      </div>
    </header>
  );
}

export default Header;
