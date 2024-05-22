import React from 'react';
import styles from './HomePage.module.scss';
import projectThumbnail1 from '../../assets/images/Online-chat-application1.jpg';
import projectThumbnail2 from '../../assets/images/Simple-clock2.jpg';
import updateThumbnail from '../../assets/images/solid_color.jpg';
import skillIcon1 from '../../assets/images/solid_color.jpg';
import skillIcon2 from '../../assets/images/solid_color.jpg';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
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
          <div className={styles.skillItem}>
            <img src={skillIcon1} alt="Skill 1" className={styles.skillIcon} />
            <span className={styles.skillName}>Skill 1</span>
          </div>
          <div className={styles.skillItem}>
            <img src={skillIcon2} alt="Skill 2" className={styles.skillIcon} />
            <span className={styles.skillName}>Skill 2</span>
          </div>
        </div>
      </div>

      {/* Services Overview and Testimonials */}
      <div className={styles.servicesAndTestimonials}>
        <div className={styles.servicesOverview}>
        <h2>Services</h2>
          <ul>
            <li>Web Development: I offer professional web development services, specializing in creating responsive and user-friendly websites using modern technologies such as React, Node.js, and MongoDB.</li>
            <li>Data Analysis and Visualization: With expertise in Python and data visualization libraries like Matplotlib and Seaborn, I can help you transform your data into insightful visualizations and actionable insights.</li>
            <li>Software Engineering: From designing and implementing robust software applications to optimizing existing codebases, I provide comprehensive software engineering services tailored to your specific needs.</li>
            <li>Technical Writing and Documentation: Clear and concise documentation is essential for any project. I can help you create well-structured technical documents, user guides, and API references.</li>
            <li>Tutoring and Mentoring: If you're looking to enhance your coding skills or seeking guidance on a specific topic, I offer personalized tutoring and mentoring services to help you achieve your learning goals.</li>
          </ul>
          <a href="/services">Learn More</a>
        </div>
        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div className={styles.testimonialItem}>
            <blockquote>"Testimonial quote goes here."</blockquote>
            <cite>- Client Name, Company</cite>
          </div>
        </div>
      </div>

      {/* Recent Updates or Blog Highlights (Optional) */}
      <div className={styles.recentUpdates}>
        <h2>Recent Updates</h2>
        <div className={styles.updateItem}>
          <img src={updateThumbnail} alt="Update 1" />
          <h3>Update Title</h3>
          <p>Brief excerpt or description</p>
          <a href="/">Read More</a>
        </div>
      </div>

      {/* Call-to-Action (CTA) */}
      <div className={styles.cta}>
        <h2>Get in Touch</h2>
        <p>Invite your visitors to contact you or take a specific action</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;