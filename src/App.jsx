// src/App.jsx

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//import Navigation from './components/common/Navigation';
import HomePage from './components/home/HomePage';
import RegisterPage from './components/register/RegisterPage';
import AboutPage from './components/about/AboutPage';
import ServicePage from './components/services/ServicePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';
import TestimonialsPage from './components/testimonials/TestimonialsPage';
import CommunityPage from './components/community/CommunityPage';
import RegistrationSuccess from './components/register/RegistrationSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;