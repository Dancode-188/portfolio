import React from 'react';
import Header from '../common/Header';
import CodeShowcase from './CodeShowcase';
import SkillsAssessment from './SkillsAssessment';
import ARProjectShowcase from './ARProjectShowcase';
import LiveCoding from './LiveCoding';
import VoiceNavigation from './VoiceNavigation';
import PersonalizedContent from './PersonalizedContent';
import Footer from '../common/Footer';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Code Showcase">
          Code Showcase
        </h2>
        <div className={styles.sectionContent}>
          <CodeShowcase />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Skills Assessment">
          Skills Assessment
        </h2>
        <div className={styles.sectionContent}>
          <SkillsAssessment />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="AR Project Showcase">
          AR Project Showcase
        </h2>
        <div className={styles.sectionContent}>
          <ARProjectShowcase />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Live Coding">
          Live Coding
        </h2>
        <div className={styles.sectionContent}>
          <LiveCoding />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Voice Navigation">
          Voice Navigation
        </h2>
        <div className={styles.sectionContent}>
          <VoiceNavigation />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Personalized Content">
          Personalized Content
        </h2>
        <div className={styles.sectionContent}>
          <PersonalizedContent />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} data-text="Featured Projects">
          Featured Projects
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.featuredProjects}>
            {/* Add your featured projects here */}
            <div className={styles.projectItem}>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/" className={styles.projectLink}>
                Learn More
              </a>
            </div>
            <div className={styles.projectItem}>
              <h3>Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/" className={styles.projectLink}>
                Learn More
              </a>
            </div>
            {/* Add more project items */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;