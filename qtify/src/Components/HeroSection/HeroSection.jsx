import React from "react";
import styles from "./HeroSection.module.css";
import vibratingHeadphones from "../../assets/vibrating-headphone.png";
const HeroSection = () => {
  return (
    // <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img
        src={vibratingHeadphones}
        alt='heroImage'
        height='212px'
        width='212px'></img>
    </div>
    // </div>
  );
};

export default HeroSection;
