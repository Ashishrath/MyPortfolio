import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish Rath</h1>
        <p className={styles.description}>I'm a full-stack developer with 2 years of experience in IT industry. Reach out if you want to know more.</p>
        <a href="mailto:ashishrath1997@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>

      <img src={getImageUrl("hero/heroImageNew.png")} className={styles.heroImg} alt="hero image of me" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
