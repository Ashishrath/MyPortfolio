import React from "react";
import { getImageUrl } from '../../utils.js';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
      <img
       className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} target="_blank" className={styles.link}>Demo</a> */}
        <a href={source} target="_blank" className={styles.link}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
