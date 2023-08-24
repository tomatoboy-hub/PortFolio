import './App.css';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/project' element={<ProjectPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
