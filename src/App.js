import React, { Suspense, lazy, memo, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Loading components only when needed
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

// Simple loading spinner
const LoadingFallback = memo(() => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

function App() {
  // Preloading stuff to make the site faster
  useEffect(() => {
    // Loading fonts early
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    preloadLink.as = 'style';
    document.head.appendChild(preloadLink);
    
    // Loading other components in the background
    const timer = setTimeout(() => {
      import('./components/About');
      import('./components/Skills');
    }, 100);
    
    // Clean up when component unmounts
    return () => {
      clearTimeout(timer);
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
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
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
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