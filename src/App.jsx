// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from  './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from  './components/common/Navigation';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicePage from './components/services/ServicePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';
import TestimonialsPage from './components/testimonials/TestimonialsPage';
import CommunityPage from './components/community/CommunityPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/community" component={CommunityPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
