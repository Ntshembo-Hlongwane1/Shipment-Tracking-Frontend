import React from "react";
import Image from "next/image";
import BannerImage from "../../public/banner-image.jpg";
import styles from "../../styles/Components/Banner.module.css";

export const Banner = () => {
  return (
    <div id={styles["banner-container"]}>
      <div>
        <header>
          <h3 id={styles["banner-heading"]}>SS Top Logistics</h3>
        </header>
        <p id={styles["banner-subtext"]}>Your package, our passion</p>
        <button id={styles["btn-banner"]}>Track Shipment</button>
      </div>
      <Image src={BannerImage} alt="Banner" />
    </div>
  );
};
