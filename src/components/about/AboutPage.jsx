// src/components/about/AboutPage.jsx
import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const milestones = [
    {
      year: '2023',
      title: 'Started My Coding Journey',
      description: 'Begun learning HTML and CSS on freeCodeCamp. Completed the Responsive Web Design curriculum and built several projects to solidify my understanding of these foundational technologies.',
      icon: '🚀',
    },
    {
      year: '2023',
      title: 'Full Stack JavaScript Development',
      description: 'Pursued full stack JavaScript development on The Odin Project. Learned the fundamentals of JavaScript, worked with Node.js and Express.js for server-side development, and built interactive web applications using frameworks like React.',
      icon: '💻',
    },
    {
      year: '2023',
      title: 'Full Stack Development with Ruby',
      description: 'Transitioned to full stack development with Ruby for the backend on The Odin Project. Learned the Ruby programming language, worked with the Ruby on Rails framework, and built robust web applications following MVC architecture.',
      icon: '💎',
    },
    {
      year: '2023',
      title: 'Software Engineering Certificate',
      description: 'Completed a comprehensive software engineering course with Saylor Academy. Learned software development methodologies, object-oriented programming principles, and best practices for building scalable and maintainable software systems. Earned a certificate upon completion.',
      icon: '🎓',
    },
    {
      year: '2023',
      title: 'Python for Data Science',
      description: 'Pursued Python for Data Science with Saylor Academy. Learned the Python programming language, data manipulation with libraries like NumPy and Pandas, data visualization with Matplotlib, and basic machine learning concepts. Earned a certificate showcasing my proficiency in Python for data science.',
      icon: '📊',
    },
    {
      year: '2023',
      title: 'Project Management Certificate',
      description: 'Earned a certificate in Project Management from Saylor Academy. Learned project management methodologies, tools, and techniques for effectively planning, executing, and delivering software projects. Gained skills in project scheduling, risk management, and stakeholder communication.',
      icon: '📋',
    },
    {
      year: '2023',
      title: 'Data Science and Machine Learning',
      description: 'Expanded my knowledge in data science and machine learning through courses on Simplilearn and Coursera. Learned advanced topics such as data preprocessing, feature engineering, supervised and unsupervised learning algorithms, and model evaluation. Earned certificates demonstrating my proficiency in these areas.',
      icon: '🧠',
    },
    {
      year: '2023',
      title: 'Web Development and AI',
      description: 'Deepened my understanding of web development and explored the field of artificial intelligence through courses on Udemy. Learned full stack web development technologies, including front-end frameworks like Angular and Vue.js, and backend technologies like Node.js and MongoDB. Also delved into AI concepts, including neural networks, deep learning, and natural language processing.',
      icon: '🌐',
    },
    {
      year: '2023',
      title: 'Enrolled in University of the People',
      description: 'Started my Computer Science program at the University of the People. In the initial courses, I learned the fundamentals of Python programming, including data types, control structures, functions, and object-oriented programming concepts. Developed a strong foundation in Python programming.',
      icon: '🎓',
    },
    {
      year: '2023-2024',
      title: 'Java and Databases',
      description: 'Continued my studies at the University of the People, focusing on Java and databases from December 2023 to March 2024. Learned object-oriented programming principles in Java, worked with Java frameworks like Spring, and gained expertise in database management systems, SQL, and database design principles.',
      icon: '☕',
    },
    {
      year: '2023-2024',
      title: 'University of Nairobi',
      description: 'Enrolled at the University of Nairobi to pursue a Bachelor of Science in Electrical and Electronics Engineering. As part of the program, I studied computer science courses, which enhanced my knowledge in areas such as computer architecture, C++ programming, and data structures and algorithms. Learned about computer organization, memory hierarchies, and processor design in computer architecture. Mastered object-oriented programming concepts, memory management, and efficient algorithm implementation in C++. Explored various data structures like arrays, linked lists, trees, and graphs, and studied algorithms for searching, sorting, and optimization.',
      icon: '🏫',
    },
    {
      year: '2024',
      title: 'Personal Projects',
      description: 'Applied my acquired skills and knowledge to develop a range of personal projects. Built web applications using technologies like React, Node.js, and Express.js, showcasing my full stack development abilities. Developed data science projects, leveraging Python libraries to analyze datasets, build predictive models, and create insightful visualizations. Contributed to open-source projects on GitHub, collaborating with other developers and gaining experience in version control and code review processes.',
      icon: '🛠️',
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
      <div className={styles.introduction}>
        <p>
          Hi there! I'm a passionate software engineer with a diverse background in web development, data science, and computer science. I embarked on my coding journey in 2023 and have been constantly learning and growing ever since. Here's a detailed look at my journey:
        </p>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${index === currentSlide ? styles.active : ''}`}
            >
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineIcon}>{milestone.icon}</div>
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