import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/ogui.gif";

import styles from "./styless/Header.module.css";

function Header() {
  return (
    <nav className={styles.container}>
      <Link to="/home" className={styles.link}>
        <img src={logo} alt="logo" className={styles.img} />
        <div className={styles.title}>DOGS API</div>
      </Link>
    </nav>
  );
}

export default Header;
