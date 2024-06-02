import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import styles from './HomePage.module.scss';
import projectThumbnail1 from '../../assets/images/Online-chat-application1.jpg';
import projectThumbnail2 from '../../assets/images/Simple-clock2.jpg';
import Header from '../../components/common/Header';
import { ReactComponent as JavaScriptIcon } from '../../assets/svgs/javascript.svg';
import { ReactComponent as PythonIcon } from '../../assets/svgs/python.svg';
import { ReactComponent as JavaIcon } from '../../assets/svgs/java.svg';
import { ReactComponent as ReactIcon } from '../../assets/svgs/react.svg';
import { ReactComponent as NodeJSIcon } from '../../assets/svgs/node-js.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/svgs/mongodb.svg';
import { ReactComponent as GitIcon } from '../../assets/svgs/git.svg';
import { ReactComponent as VSCodeIcon } from '../../assets/svgs/visual-studio-code.svg';
import { ReactComponent as RbuyIcon } from '../../assets/svgs/ruby.svg';
import { ReactComponent as RailsIcon } from '../../assets/svgs/rails.svg';
import { ReactComponent as CIcon } from '../../assets/svgs/c++.svg';
import { ReactComponent as FullStackDevelopmentIcon } from '../../assets/svgs/full-stack-development.svg';
import { ReactComponent as BackendDevelopmentIcon } from '../../assets/svgs/backend-development.svg';
import { ReactComponent as AlgorithmDesignIcon } from '../../assets/svgs/algorithm-design.svg';
import { ReactComponent as DatabaseDesignIcon } from '../../assets/svgs/database-design.svg';
import { ReactComponent as ProjectManagementIcon } from '../../assets/svgs/project-management.svg';
import { ReactComponent as PCBDesignIcon } from '../../assets/svgs/pcb-design.svg';

const HomePage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(process.env.REACT_APP_BACKEND_URL_CONTACT, formData);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormErrors({});
      } catch (error) {
        console.error('Error submitting contact form:', error);
        setFormSubmitError(true);
      }
    }
  };

  return (
    <div className={styles.homePage}>
      <Header />
      {/* Diagonal Split Layout */}
      <div className={styles.diagonalSplit}>
        <div className={styles.heroSection}></div>

        {/* Featured Projects */}
        <div className={styles.featuredProjects}>
          <h2>Featured Projects</h2>
          <div className={styles.projectCarousel}>
            <div className={styles.projectItem}>
              <img src={projectThumbnail1} alt="Project 1" />
              <h3>Online Chat Application</h3>
              <p>This project is a Java-based client-server application that allows multiple users to connect and chat with each other.</p>
              <a href="/portfolio">Learn More</a>
            </div>
            <div className={styles.projectItem}>
              <img src={projectThumbnail2} alt="Simple Clock" />
              <h3>Simple Clock Application</h3>
              <p>A simple Java application that displays the current time and date in a classic format.</p>
              <a href="/portfolio">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* About Teaser and Technical Skills */}
      <div className={styles.aboutAndSkills}>
        <div className={styles.aboutTeaser}>
          <h2>About Me</h2>
          <p>Hi there! I'm a passionate software engineer with a diverse background in web development, data science, and computer science. I embarked on my coding journey in 2023 and have been constantly learning and growing ever since. Here's a detailed look at my journey:</p>
          <a href="/about">Learn More</a>
        </div>
        <div className={styles.technicalSkills}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <JavaScriptIcon />
              </span>
              <span className={styles.skillName}>JavaScript</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <PythonIcon />
              </span>
              <span className={styles.skillName}>Python</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <JavaIcon />
              </span>
              <span className={styles.skillName}>Java</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <ReactIcon />
              </span>
              <span className={styles.skillName}>React</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <NodeJSIcon />
              </span>
              <span className={styles.skillName}>Node.js</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <MongoDBIcon />
              </span>
              <span className={styles.skillName}>MongoDB</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <RbuyIcon />
              </span>
              <span className={styles.skillName}>Ruby</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <RailsIcon />
              </span>
              <span className={styles.skillName}>Rails</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <CIcon />
              </span>
              <span className={styles.skillName}>C++</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <GitIcon />
              </span>
              <span className={styles.skillName}>Git</span>
            </div>
            <div className={styles.skillItem}>
              <span className={styles.skillIcon}>
                <VSCodeIcon />
              </span>
              <span className={styles.skillName}>Visual Studio Code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview and Testimonials */}
      <div className={styles.servicesAndTestimonials}>
        {/* Services Overview */}
        <div className={styles.servicesOverview}>
          <h2>Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <FullStackDevelopmentIcon />
              </div>
              <h3>Full-Stack Development</h3>
              <p>Building end-to-end web applications using Node.js, Express.js, React.js, and MongoDB.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <BackendDevelopmentIcon />
              </div>
              <h3>Backend Development</h3>
              <p>Developing robust and scalable server-side solutions using Java, Python, Ruby on Rails, and relational databases.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <AlgorithmDesignIcon />
              </div>
              <h3>Algorithm Design</h3>
              <p>Creating efficient and optimized algorithms using data structures and algorithmic techniques in C++, Java, and Python.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <DatabaseDesignIcon />
              </div>
              <h3>Database Design</h3>
              <p>Designing and implementing relational and NoSQL databases using SQL, DBMS, and MongoDB.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <ProjectManagementIcon />
              </div>
              <h3>Project Management</h3>
              <p>Overseeing software development projects from inception to delivery, ensuring timely and successful completion.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <PCBDesignIcon />
              </div>
              <h3>PCB Design</h3>
              <p>Designing and developing printed circuit boards (PCBs) for electronic projects.</p>
            </div>
          </div>
          <a href="/services" className={styles.servicesLink}>Explore Services</a>
        </div>
        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div className={styles.testimonialItem}>
            <blockquote>"Testimonial quote goes here."</blockquote>
            <cite>- Client Name, Company</cite>
          </div>
        </div>
      </div>

      {/* Call-to-Action (CTA) */}
      <div className={styles.cta}>
        <h2>Get in Touch</h2>
        <p>Let's build something amazing together.</p>
        {formSubmitted && (
          <div className={styles.successMessage}>
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {formSubmitError && (
          <div className={styles.errorMessage}>
            Oops! Something went wrong. Please try again later.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;