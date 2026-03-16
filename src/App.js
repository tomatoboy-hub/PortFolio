import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/intern" element={<InternPage />} />
      </Routes>
    </AnimatePresence>
  );
}

const loaderVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900"
      variants={loaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative flex items-center justify-center mb-6">
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-20 h-20 rounded-full border-t-2 border-cyan-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute text-cyan-400 font-bold text-lg tracking-wider select-none">HS</span>
      </div>

      <motion.p
        className="text-gray-500 text-sm tracking-widest uppercase"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hayata Shimizu
      </motion.p>

      <motion.div
        className="mt-5 flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    const delay = hasLoadedBefore ? 0 : 2200;
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoadedBefore', 'true');
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router>
            <div className="min-h-screen bg-slate-900 text-white flex flex-col">
              <Header />
              <main className="flex-1">
                <MainRoutes />
              </main>
              <Footer />
              <ScrollToTopButton />
            </div>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
