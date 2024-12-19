import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500); // Adjust the time if needed
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <MainLayout>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
