import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ProjectAIllustration from './ProjectAIllustration';
import ProjectBIllustration from './ProjectBIllustration';
import OnlineChatIllustration from './OnlineChatIllustration';
import styles from './PortfolioPage.module.scss'; // Import the SCSS module

const ProjectTimeline = ({ projects, onProjectClick }) => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <h2>Project Timeline</h2>
      <ul className={styles.timeline}>
        {projects.map((project, index) => (
          <li
            key={index}
            className={styles.timelineItem}
            onClick={() => onProjectClick(index)}
          >
            <h3 className={styles.timelineTitle}>{project.title}</h3>
            <p className={styles.timelineDate}>{project.date}</p>
            {index === 0 && <ProjectAIllustration />}
            {index === 1 && <ProjectBIllustration />}
            {index === 2 && <OnlineChatIllustration />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTimeline;