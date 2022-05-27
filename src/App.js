import './bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';

import headerIMG from './IMG/webpic.png';

import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';


function Navigation() {
  return (
    <div>

      <img className="headerIMG" src={headerIMG} alt="Drawing"/>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>

    </div>
  )
}

function App() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
