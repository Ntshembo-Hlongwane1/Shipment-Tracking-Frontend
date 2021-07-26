import React from "react";
import styles from "../../styles/Components/Navigation.module.css";
import Link from "next/link";
import { MenuOpenOutlined } from "@material-ui/icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const NavigationBar = () => {
  return (
    <nav id={styles.nav}>
      <ul id={styles["nav-left"]}>
        <li>
          <Link href="/">
            <a id={styles["nav-left-heading"]}>SS Top Logistics</a>
          </Link>
        </li>
      </ul>
      <ul id={styles["nav-right"]}>
        <li>
          <Link href="#about-container">
            <a className={styles["nav-right-link"]}>About us</a>
          </Link>
        </li>
        <li>
          <Link href="#services-container">
            <a className={styles["nav-right-link"]}>Our services</a>
          </Link>
        </li>
        <li>
          <Link href="#contact-container">
            <a className={styles["nav-right-link"]}>Contact us</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a className={styles["nav-right-link"]}>Dashboard</a>
          </Link>
        </li>
        <Popup
          trigger={
            <li id={styles["menu-icon"]}>
              <MenuOpenOutlined />
            </li>
          }
          position="bottom right"
        >
          <h4 className={styles["menu-link"]}>Signin</h4>
          <h4 className={styles["menu-link"]}>About us</h4>
          <h4 className={styles["menu-link"]}>Our services</h4>
          <h4 className={styles["menu-link-last"]}>Contact us</h4>
        </Popup>
      </ul>
    </nav>
  );
};
