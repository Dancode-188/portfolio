// src/components/about/AboutPage.jsx
import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const milestones = [
    {
      year: '2022',
      title: 'Started My Coding Journey',
      description: 'Embarked on my software engineering journey with a passion for coding and problem-solving.',
    },
    {
      year: '2023',
      title: 'Completed Online Courses',
      description: 'Completed several online coding courses and tutorials to strengthen my programming skills.',
    },
    {
      year: '2023',
      title: 'Built Personal Projects',
      description: 'Developed a portfolio of personal projects showcasing my abilities in web development and various programming languages.',
    },
    {
      year: '2024',
      title: 'Collaborated on Open Source',
      description: 'Contributed to open source projects on GitHub, working with other developers to enhance existing codebases.',
    },
    {
      year: '2024',
      title: 'Seeking Professional Opportunities',
      description: 'Actively seeking internships or entry-level positions to gain professional experience in the software engineering industry.',
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