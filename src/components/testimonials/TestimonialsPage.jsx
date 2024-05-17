// src/components/testimonials/TestimonialsPage.jsx

import React, { useState } from 'react';
import styles from './TestimonialsPage.module.scss';
import { FaQuoteLeft, FaVideo } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';

const TestimonialsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Company',
      projectType: 'web',
      industry: 'Technology',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
      videoUrl: 'https://example.com/testimonial1.mp4',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      projectType: 'mobile',
      industry: 'Finance',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      videoUrl: 'https://example.com/testimonial2.mp4',
    },
    // Add more testimonials...
  ];

  const filterTestimonials = () => {
    if (selectedFilter === 'all') {
      return testimonials;
    } else {
      return testimonials.filter(testimonial => testimonial.projectType === selectedFilter || testimonial.industry === selectedFilter);
    }
  };

  const openTestimonialModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className={styles.testimonialsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.glitch} data-text="Testimonials">
            Testimonials
          </span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.glitch} data-text="What our clients say about us">
            What our clients say about us
          </span>
        </p>
      </div>

      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${selectedFilter === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${selectedFilter === 'web' ? styles.active : ''}`}
          onClick={() => setSelectedFilter('web')}
        >
          Web
        </button>
        <button
          className={`${styles.filterButton} ${selectedFilter === 'mobile' ? styles.active : ''}`}
          onClick={() => setSelectedFilter('mobile')}
        >
          Mobile
        </button>
        <button
          className={`${styles.filterButton} ${selectedFilter === 'Technology' ? styles.active : ''}`}
          onClick={() => setSelectedFilter('Technology')}
        >
          Technology
        </button>
        <button
          className={`${styles.filterButton} ${selectedFilter === 'Finance' ? styles.active : ''}`}
          onClick={() => setSelectedFilter('Finance')}
        >
          Finance
        </button>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {filterTestimonials().map(testimonial => (
          <div key={testimonial.id} className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p>{testimonial.content}</p>
            </div>
            <div className={styles.testimonialMeta}>
              <p className={styles.testimonialName}>{testimonial.name}</p>
              <p className={styles.testimonialCompany}>{testimonial.company}</p>
              {testimonial.videoUrl && (
                <button
                  className={styles.watchVideoButton}
                  onClick={() => openTestimonialModal(testimonial)}
                >
                  <FaVideo className={styles.videoIcon} />
                  Watch Video
                </button>
              )}
            </div>
          </div>
        ))}
      </Masonry>

      <Modal
        isOpen={selectedTestimonial !== null}
        onRequestClose={closeTestimonialModal}
        contentLabel="Testimonial Modal"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        {selectedTestimonial && (
          <div>
            <h2>{selectedTestimonial.name}</h2>
            <video src={selectedTestimonial.videoUrl} controls autoPlay />
            <button onClick={closeTestimonialModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TestimonialsPage;