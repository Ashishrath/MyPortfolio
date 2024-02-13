import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br/>Ashish Rath</h1>
        <p className={styles.description}>I'm a software developer with 2 years of experience in IT industry. Ready to explore my professional journey? Get my resume here.</p>
        <a href="https://tinyurl.com/AshishResumeLink" target="_blank" className={styles.contactBtn}>Resume</a>
      </div>

      <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} alt="hero image of me" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
