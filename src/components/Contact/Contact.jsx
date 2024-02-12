import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils.js';

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />
                <a href="mailto:ashishrath1997@gmail.com">ashishrath1997@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="email icon" />
                <a href="https://www.linkedin.com/in/ashishrath/">linkedin.com/ashishrath</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="email icon" />
                <a href="https://github.com/Ashishrath">github.com/Ashishrath</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact