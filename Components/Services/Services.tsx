import React from "react";
import Image from "next/image";
import ServiceImage from "../../public/banner-image.jpg";
import styles from "../../styles/Components/Services.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Services = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <header>
        <h2 id={styles["service-header"]}>Our Services</h2>
      </header>
      <div id={styles["services-container"]}>
        <div data-aos="slide-right">
          <header>
            <h4 id={styles["service-text-header"]}>Lorem ipsum</h4>
          </header>
          <div id={styles["service-text-container"]}>
            <p className={styles["service"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              sunt fuga ab animi, nulla nihil rerum eum dolores reiciendis
              magni.
            </p>
            <p className={styles["service"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              sunt fuga ab animi, nulla nihil rerum eum dolores reiciendis
              magni.
            </p>
          </div>
        </div>
        <div data-aos="slide-up">
          <Image src={ServiceImage} alt="SS Top logistics service image" />
        </div>
      </div>
    </div>
  );
};
