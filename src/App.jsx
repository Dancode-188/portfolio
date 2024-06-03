import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import EmailVerification from './components/common/EmailVerification';


// Lazy loading route components
const HomePage = lazy(() => import('./components/home/HomePage'));
const RegisterPage = lazy(() => import('./components/register/RegisterPage'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));
const ServicePage = lazy(() => import('./components/services/ServicePage'));
const PortfolioPage = lazy(() => import('./components/portfolio/PortfolioPage'));
const BlogPage = lazy(() => import('./components/blog/BlogPage'));
const ContactPage = lazy(() => import('./components/contact/ContactPage'));
const TestimonialsPage = lazy(() => import('./components/testimonials/TestimonialsPage'));
const CommunityPage = lazy(() => import('./components/community/CommunityPage'));
const RegistrationSuccess = lazy(() => import('./components/register/RegistrationSuccess'));

const Loading = () => <div>Loading...</div>;

function App() {

  useEffect(() => {
    ReactGA.initialize('G-32ZNB2RDKF');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const onLocationChange = () => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Suspense fallback={<Loading />}>
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
            <Route path="/verify-email/:token" element={<EmailVerification />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;