import './App.css';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import FixedFooter from './components/FixedFooter';
import React, { useState, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './components/styles/transition.css';
import { useLocation } from 'react-router-dom';

function MainRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={250} classNames="fade" key={location.key}>
        <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/project' element={<ProjectPage />} />
        </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }, 3000);
    }
  }, []);

  if (loading) {
    return (
      <div className="Appload">
        <Puff
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <MainRoutes />
        <FixedFooter />
      </div>
    </Router>
  );
}

export default App;
