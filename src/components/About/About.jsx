import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImageNew.png")}
          alt="animated me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Introduction</h3>
              <p>
                My name is Ashish Rath, and I am a software developer based in
                India with experience in C++ programming, and full-stack web
                development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Industry Experience</h3>
              <p>
                I've had the privilege of working with industry leaders such as
                Dell Technologies and Wipro Limited, where I gained invaluable
                experience in software development, project management, and team
                collaboration.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="third icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>
                I pursued my Masters of Technology in Computer Networking from
                NIT-B (MANIT), Bhopal. Prior to that, I earned my Bachelor's of
                Engineering degree in Computer Science and Engineering from
                SSITM, Bhilai.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
