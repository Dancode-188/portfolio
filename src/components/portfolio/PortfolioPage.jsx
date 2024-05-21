import React, { useState } from 'react';
import ProjectTimeline from './ProjectTimeline';
import ProjectACaseStudy from './ProjectACaseStudy';
import SimpleClockCaseStudy from './SimpleClockCaseStudy';
import OnlineChatCaseStudy from './OnlineChatCaseStudy';
import styles from './PortfolioPage.module.scss';

const FallbackCaseStudy = () => {
  return <div>Fallback Case Study</div>;
};

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Project A',
      description: 'This was my first major project...',
      date: 'January 2022',
      categories: ['Web Development', 'React'],
    },
    {
      title: 'Simple Clock Application',
      description: 'A simple Java application that displays the current time and date in a classic format.',
      date: 'February 2023',
      categories: ['Desktop', 'Java'],
    },
    {
      title: 'Online Chat Application',
      description: 'A Java-based client-server application for online chat.',
      date: 'March 2023',
      categories: ['Desktop', 'Java'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    console.log('Selected Project:', index);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProjects = projects.filter((project) =>
    selectedCategories.length === 0 ||
    project.categories.some((category) => selectedCategories.includes(category))
  );

  const renderCaseStudy = () => {
    switch (selectedProject) {
      case 0:
        console.log('Rendering ProjectACaseStudy');
        return <ProjectACaseStudy />;
      case 1:
        console.log('Rendering SimpleClockCaseStudy');
        return <SimpleClockCaseStudy />;
      case 2:
        console.log('Rendering OnlineChatCaseStudy');
        return <OnlineChatCaseStudy />;
      default:
        console.log('No case study selected');
        return <FallbackCaseStudy />;
    }
  };

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Portfolio</h1>
        <p className={styles.subtitle}>A showcase of my projects</p>
      </div>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <h3>Categories</h3>
          <div>
            {Array.from(new Set(projects.flatMap((project) => project.categories))).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                style={{
                  backgroundColor: selectedCategories.includes(category) ? 'gray' : 'transparent',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <ProjectTimeline projects={filteredProjects} onProjectClick={handleProjectClick} />
        <div className={styles.caseStudyContainer}>
          {selectedProject >= 0 && selectedProject < filteredProjects.length ? (
            <div className={styles.caseStudy}>
              {console.log('Rendering case study:', renderCaseStudy())}
              {renderCaseStudy()}
            </div>
          ) : (
            <div>No case study selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;