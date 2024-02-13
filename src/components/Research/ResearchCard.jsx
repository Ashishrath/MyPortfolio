import React from "react";
import { getImageUrl } from '../../utils.js';
import styles from './ResearchCard.module.css';

const ResearchCard = ({ item: {title, imageSrc, description, view}}) => {
  return (
    <div className={styles.container}>
      <img
       className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.links}>
        <a href={view} target="_blank" className={styles.link}>View</a>
      </div>
    </div>
  );
};

export default ResearchCard;
