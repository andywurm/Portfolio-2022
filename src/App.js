import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styling/Contact.css';
import './Styling/Home.css';
import './Styling/Projects.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import {useEffect} from 'react';

import headerIMG from './IMG/webpic.png';

import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';


function Navigation() {

  useEffect(() => {
    document.title = "Andaiye Wurm"
  }, []);

  return (
    <div>

      <img className="headerIMG" src={headerIMG} alt="Drawing" />

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>

    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </Router >
    </div >
  );
}

export default App;
