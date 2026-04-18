import React, { Suspense, lazy, memo, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const loadAbout = () => import('./components/About');
const loadSkills = () => import('./components/Skills');
const loadProjects = () => import('./components/Projects');
const loadExperience = () => import('./components/Experience');
const loadContact = () => import('./components/Contact');

const preloadDeferredSections = () =>
  Promise.all([
    loadAbout(),
    loadSkills(),
    loadProjects(),
    loadExperience(),
    loadContact(),
  ]);

// Loading components only when needed
const About = lazy(loadAbout);
const Skills = lazy(loadSkills);
const Projects = lazy(loadProjects);
const Experience = lazy(loadExperience);
const Contact = lazy(loadContact);

// Simple loading spinner
const LoadingFallback = memo(() => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

function App() {
  useEffect(() => {
    const preloadSections = () => {
      void preloadDeferredSections();
    };

    let idleId;
    const timerId = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(preloadSections, { timeout: 1200 });
      } else {
        preloadSections();
      }
    }, 150);

    return () => {
      window.clearTimeout(timerId);
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
