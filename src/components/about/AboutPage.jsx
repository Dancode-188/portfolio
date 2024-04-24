// src/components/about/AboutPage.jsx
import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const milestones = [
    {
      year: '2015',
      title: 'Started My Journey',
      description: 'Embarked on my software engineering journey with a passion for coding and problem-solving.',
    },
    {
      year: '2017',
      title: 'First Internship',
      description: 'Landed my first internship at XYZ Company, where I gained hands-on experience in web development.',
    },
    {
      year: '2019',
      title: 'Graduated with Honors',
      description: 'Graduated from ABC University with honors, earning a degree in Computer Science.',
    },
    {
      year: '2021',
      title: 'Led a Team',
      description: 'Led a team of developers to successfully deliver a complex software project ahead of schedule.',
    },
    {
      year: '2023',
      title: 'Launched My Own App',
      description: 'Developed and launched my own innovative mobile app that gained thousands of users.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === milestones.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? milestones.length - 1 : prevSlide - 1));
  };

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>
        <span className={styles.glitch} data-text="About Me">
          About Me
        </span>
      </h1>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${index === currentSlide ? styles.active : ''}`}
            >
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineContent}>
                <h2 className={styles.timelineTitle}>{milestone.title}</h2>
                <p className={styles.timelineDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          <button className={styles.prevButton} onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className={styles.nextButton} onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;