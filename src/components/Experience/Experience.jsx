import React from "react";
import skills from "../../data/skills.json";
import workExperience from "../../data/workExperience.json";
import { getImageUrl } from "../../utils";
import styles from "../Experience/Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                    <div className={styles.skill} key={id}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                )
            })
            }</div>
        <ul className={styles.history}>
            {
                workExperience.map((experience, id) => {
                    return (
                        <li className={styles.historyItem} key={id}>
                            <img src={getImageUrl(experience.imageSrc)} alt={`${experience.organisation} logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${experience.role}, ${experience.organisation}`}</h3>
                                <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                                <ul>{experience.experiences.map((task, id) => {
                                    return (
                                        <li key={id}>{task}</li>
                                    )
                                })}</ul>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </section>
  );
};

export default Experience;
