import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import InternPage from './components/InternPage';

function MainRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/intern" element={<InternPage />} />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    const delay = hasLoadedBefore ? 0 : 2000;
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoadedBefore', 'true');
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-slate-900">
        <Puff color="#06b6d4" height={80} width={80} />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col animate-fade-in">
        <Header />
        <main className="flex-1">
          <MainRoutes />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
