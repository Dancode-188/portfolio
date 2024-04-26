// src/components/services/ServicesPage.jsx

import React, { useState } from 'react';
import styles from './ServicePage.module.scss';
import { FaCog } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#00FF7F', '#4B0082', '#ADD8E6', '#FF00FF'];

const ServicePage = () => {
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [generatedPackage, setGeneratedPackage] = useState(null);

  const servicePackages = {
    basic: {
      name: 'Basic Package',
      description: 'Ideal for small-scale projects with limited features.',
      price: 1000,
      features: ['Responsive Design', 'Basic Functionality', 'Simple UI/UX'],
    },
    standard: {
      name: 'Standard Package',
      description: 'Suitable for medium-sized projects with enhanced functionality.',
      price: 2500,
      features: ['Responsive Design', 'Advanced Functionality', 'Intuitive UI/UX', 'Integration with Third-Party Services'],
    },
    premium: {
      name: 'Premium Package',
      description: 'Tailored for large-scale projects with advanced features and customization.',
      price: 5000,
      features: ['Responsive Design', 'Advanced Functionality', 'Custom UI/UX', 'Integration with Third-Party Services', 'Scalable Architecture', 'Ongoing Maintenance and Support'],
    },
  };

  const generateServicePackage = () => {
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
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              min="0"
              step="100"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="timeline">Timeline (in weeks)</label>
            <input
              type="number"
              id="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              min="1"
            />
          </div>
          <button type="button" className={styles.generateButton} onClick={generateServicePackage}>
            <FaCog className={styles.buttonIcon} />
            Generate Service Package
          </button>
        </form>
      </div>

      <div className={styles.servicePackageContainer}>
        {generatedPackage && (
          <div className={styles.servicePackage}>
            <h3>{generatedPackage.name}</h3>
            <p>{generatedPackage.description}</p>
            <div className={styles.packageDetails}>
              <p>Price: ${generatedPackage.price.toFixed(2)}</p>
              <ul>
                {generatedPackage.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className={styles.visualizationContainer}>{generatedPackage && generateVisualization()}</div>
    </div>
  );
};

export default ServicePage;