import React from 'react';
import styles from './ResearchAndBlog.module.css';
import research from '../../data/researchAndBlogs.json';
import ResearchCard from './ResearchCard.jsx';

const ResearchAndBlog = () => {
  return (
    <section className={styles.container} id='research'>
        <h2 className={styles.title}>Research and Blogs</h2>
        <div className={styles.projects}>
            {
                research.map((item, id) => {
                    return (
                        <ResearchCard  key={id} item={item} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default ResearchAndBlog