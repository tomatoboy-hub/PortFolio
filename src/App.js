import './App.css';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Intern from './components/Intern';
import ProjectPage from './components/ProjectPage';
import FixedFooter from './components/FixedFooter';
import './components/styles/transition.css';
import { useLocation,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollToTopButton from './components/ScrollToTopButton';



function MainRoutes() {
  const location = useLocation();

  return (
    
    <TransitionGroup>
      <CSSTransition timeout={250} classNames="fade" key={location.key}>
        <div className="main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/intern' element={<Intern/>}/>
        </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(0); 

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    if (hasLoadedBefore) {
      setLoading(false);
      setTimeout(() => {
        setOpacity(1);  // loading が終了したら opacity を 1 に変更
      }, 50);
    } else {
      setTimeout(() => {
        setLoading(false);
        
        setTimeout(() => {
          setOpacity(1);  // loading が終了したら opacity を 1 に変更
        }, 50);
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
      <div className="App" style={{ opacity: opacity }}>
        <Header />
        <MainRoutes />
        <FixedFooter />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
