// src/components/services/ServicesPage.jsx
// eslint-disable-next-line
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styles from './ServicePage.module.scss';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// eslint-disable-next-line
import { FaInfoCircle } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';

const COLORS = ['#00FF7F', '#4B0082', '#ADD8E6', '#FF00FF'];

const ServicePage = () => {
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [generatedPackage, setGeneratedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const servicePackages = useMemo(() => ({
    basic: {
      name: 'Basic Package',
      description: 'Ideal for small-scale projects with limited features.',
      price: 1000,
      features: [
        { name: 'Responsive Design', description: 'The website will adapt to different screen sizes and devices.' },
        { name: 'Basic Functionality', description: 'Includes essential features required for the project.' },
        { name: 'Simple UI/UX', description: 'Clean and user-friendly interface design.' },
      ],
      technologies: [
        { name: 'HTML', description: 'Hypertext Markup Language for structuring web pages.' },
        { name: 'CSS', description: 'Cascading Style Sheets for styling web pages.' },
        { name: 'JavaScript', description: 'Programming language for adding interactivity to web pages.' },
      ],
      frameworks: [
        { name: 'React', description: 'A popular JavaScript library for building user interfaces.' },
        { name: 'Bootstrap', description: 'A CSS framework for responsive and mobile-first web development.' },
      ],
      methodologies: [
        { name: 'Agile Development', description: 'An iterative and incremental approach to software development.' },
        { name: 'Responsive Web Design', description: 'A web design approach to create websites that adapt to different screen sizes.' },
      ],
      caseStudy: {
        title: 'Simple Portfolio Website',
        description: 'Developed a clean and responsive portfolio website for a freelance designer, showcasing their work and providing an easy way for potential clients to get in touch.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
    },
    standard: {
      name: 'Standard Package',
      description: 'Suitable for medium-sized projects with enhanced functionality.',
      price: 2500,
      features: [
        { name: 'Responsive Design', description: 'The website will adapt to different screen sizes and devices.' },
        { name: 'Advanced Functionality', description: 'Includes complex features and functionalities tailored to your project requirements.' },
        { name: 'Intuitive UI/UX', description: 'User-friendly interface design with seamless user experience.' },
        { name: 'Integration with Third-Party Services', description: 'Integration with third-party APIs, services, and platforms as needed.' },
      ],
      technologies: [
        { name: 'HTML', description: 'Hypertext Markup Language for structuring web pages.' },
        { name: 'CSS', description: 'Cascading Style Sheets for styling web pages.' },
        { name: 'JavaScript', description: 'Programming language for adding interactivity to web pages.' },
        { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side programming.' },
      ],
      frameworks: [
        { name: 'React', description: 'A popular JavaScript library for building user interfaces.' },
        { name: 'Express', description: 'A minimal and flexible Node.js web application framework.' },
        { name: 'MongoDB', description: 'A popular NoSQL database for storing and retrieving data.' },
      ],
      methodologies: [
        { name: 'Agile Development', description: 'An iterative and incremental approach to software development.' },
        { name: 'RESTful API Design', description: 'A standard architecture style for designing web services and APIs.' },
        { name: 'Responsive Web Design', description: 'A web design approach to create websites that adapt to different screen sizes.' },
      ],
      caseStudy: {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform with secure payment integration, product management, and user authentication, enabling small businesses to establish an online presence and drive sales.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      },
    },
    premium: {
      name: 'Premium Package',
      description: 'Tailored for large-scale projects with advanced features and customization.',
      price: 5000,
      features: [
        { name: 'Responsive Design', description: 'The website will adapt to different screen sizes and devices.' },
        { name: 'Advanced Functionality', description: 'Includes complex features and functionalities tailored to your project requirements.' },
        { name: 'Custom UI/UX', description: 'Custom-designed user interface and experience tailored to your brand and project goals.' },
        { name: 'Integration with Third-Party Services', description: 'Integration with third-party APIs, services, and platforms as needed.' },
        { name: 'Scalable Architecture', description: 'Designed with scalability in mind to accommodate future growth and expansion.' },
        { name: 'Ongoing Maintenance and Support', description: 'Ongoing maintenance, updates, and support for the project after deployment.' },
      ],
      technologies: [
        { name: 'HTML', description: 'Hypertext Markup Language for structuring web pages.' },
        { name: 'CSS', description: 'Cascading Style Sheets for styling web pages.' },
        { name: 'JavaScript', description: 'Programming language for adding interactivity to web pages.' },
        { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side programming.' },
        { name: 'React', description: 'A popular JavaScript library for building user interfaces.' },
        { name: 'Angular', description: 'A popular TypeScript-based web application framework developed by Google.' },
      ],
      frameworks: [
        { name: 'Express', description: 'A minimal and flexible Node.js web application framework.' },
        { name: 'MongoDB', description: 'A popular NoSQL database for storing and retrieving data.' },
        { name: 'PostgreSQL', description: 'A powerful, open-source relational database management system.' },
        { name: 'Firebase', description: 'A comprehensive app development platform that includes a real-time database, authentication, hosting, and more.' },
      ],
      methodologies: [
        { name: 'Agile Development', description: 'An iterative and incremental approach to software development.' },
        { name: 'Test-Driven Development', description: 'A software development process that relies on writing tests before writing code.' },
        { name: 'Continuous Integration/Continuous Deployment', description: 'Automated processes for building, testing, and deploying code changes.' },
      ],
      caseStudy: {
        title: 'Enterprise CRM System',
        description: 'Developed a feature-rich CRM system for a large enterprise, streamlining customer management, sales tracking, and team collaboration, resulting in improved efficiency and increased revenue.',
        technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL'],
      },
    },
  }), []);

  const generateServicePackage = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!projectType) {
        setError('Please select a project type.');
        setIsLoading(false);
        return;
      }

      let selectedPackage;

      if (budget < 1500) {
        selectedPackage = servicePackages.basic;
      } else if (budget >= 1500 && budget < 3500) {
        selectedPackage = servicePackages.standard;
      } else {
        selectedPackage = servicePackages.premium;
      }

      // Adjust package features based on project type
      if (projectType === 'web') {
        selectedPackage.features.push('Cross-Browser Compatibility');
      } else if (projectType === 'mobile') {
        selectedPackage.features.push('Mobile-Specific Optimizations');
      } else if (projectType === 'design') {
        selectedPackage.features.push('Design System Development');
      }

      // Adjust package price based on timeline
      if (timeline <= 4) {
        selectedPackage.price *= 1.2; // 20% increase for expedited timeline
      } else if (timeline >= 12) {
        selectedPackage.price *= 0.9; // 10% discount for extended timeline
      }

      setGeneratedPackage(selectedPackage);
    } catch (err) {
      setError('An error occurred while generating the service package.');
    } finally {
      setIsLoading(false);
    }
  }, [budget, timeline, projectType, servicePackages]);

  const [budgetRange, setBudgetRange] = useState([1000, 10000]);
  const [timelineRange, setTimelineRange] = useState([1, 24]);

  useEffect(() => {
    generateServicePackage();
  }, [projectType, budgetRange, timelineRange, generateServicePackage]);

  const handleBudgetChange = (value) => {
    setBudgetRange(value);
    setBudget(value[1]);
  };

  const handleTimelineChange = (value) => {
    setTimelineRange(value);
    setTimeline(value[1]);
  };

  const generateVisualization = () => {
    if (!generatedPackage) {
      return null;
    }

    // Generate data for the pie chart based on the generated package
    const data = [
      { name: 'Development', value: generatedPackage.price * 0.6 },
      { name: 'Design', value: generatedPackage.price * 0.2 },
      { name: 'Testing', value: generatedPackage.price * 0.1 },
      { name: 'Deployment', value: generatedPackage.price * 0.1 },
    ];

    return (
      <div className={styles.visualization}>
        <h3>Project Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              fill="#8884d8"
              label={({ name, value, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  /*const renderTooltip = (item) => {
    setTooltipContent(item);
  };*/

  return (
    <div className={styles.servicePage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Services">
            Services
          </span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.glitch} data-text="Tailored solutions for your needs">
            Tailored solutions for your needs
          </span>
        </p>
      </div>

      <div className={styles.serviceSelector}>
        <h2>Service Configurator</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="">Select Project Type</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="budget">Budget</label>
            <Slider
              range
              min={1000}
              max={10000}
              value={budgetRange}
              onChange={handleBudgetChange}
              step={100}
            />
            <div className={styles.rangeValues}>
              <span>${budgetRange[0]} </span>
              -
              <span> ${budgetRange[1]}</span>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="timeline">Timeline (in weeks)</label>
            <Slider
              range
              min={1}
              max={24}
              value={timelineRange}
              onChange={handleTimelineChange}
              step={1}
            />
            <div className={styles.rangeValues}>
              <span>{timelineRange[0]} weeks </span>
              -
              <span> {timelineRange[1]} weeks</span>
            </div>
          </div>
        </form>
      </div>

      {isLoading ? (
        <div className={styles.loadingSpinner}>
          <Spinner animation="border" variant="primary" />
          <p>Generating service package...</p>
        </div>
      ) : (
        <div className={styles.servicePackageContainer}>
          {generatedPackage && (
            <div className={styles.servicePackage}>
              <h3>{generatedPackage.name}</h3>
              <p>{generatedPackage.description}</p>
              <div className={styles.packageDetails}>
                <p>Price: ${generatedPackage.price.toFixed(2)}</p>
                <h4>Features:</h4>
                <ul>
                  {generatedPackage.features.map((feature, index) => (
                    <li key={index}>{feature.name}</li>
                  ))}
                </ul>
                <h4>Technologies:</h4>
                <ul>
                  {generatedPackage.technologies.map((tech, index) => (
                    <li key={index}>{tech.name}</li>
                  ))}
                </ul>
                <h4>Frameworks:</h4>
                <ul>
                  {generatedPackage.frameworks.map((framework, index) => (
                    <li key={index}>{framework.name}</li>
                  ))}
                </ul>
                <h4>Methodologies:</h4>
                <ul>
                  {generatedPackage.methodologies.map((methodology, index) => (
                    <li key={index}>{methodology.name}</li>
                  ))}
                </ul>
                <h4>Case Study:</h4>
                <div className={styles.caseStudy}>
                  <h5>{generatedPackage.caseStudy.title}</h5>
                  <p>{generatedPackage.caseStudy.description}</p>
                  <p>Technologies used: {generatedPackage.caseStudy.technologies.join(', ')}</p>
                </div>
                <button className={styles.contactBtn}>Contact Us</button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.visualizationContainer}>{generatedPackage && generateVisualization()}</div>
    </div>
  );
};

export default ServicePage;