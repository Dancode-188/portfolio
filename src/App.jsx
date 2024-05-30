// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';
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

// Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);

    // Display a fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

// Loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ErrorBoundary>
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
              <Route path="/verify-email/:token" element={
                <Suspense fallback={<Loading />}>
                  <EmailVerification />
                </Suspense>
              } />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;