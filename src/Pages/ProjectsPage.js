import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Drama1 from '../IMG/Drama1.png';
import Drama2 from '../IMG/Drama2.png';
import Drama3 from '../IMG/Drama3.png';

function ProjectsPage(props) {
  return (
    <div>

      <p className='webText projFirst'>All items are displayed in order from most recent to the oldest.</p>
      <div className='accord'>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className='AccText'>Drama Tracker</span></Accordion.Header>
            <Accordion.Body>
              <img src={Drama1} alt="Drama Tracker" className='projectIMG'/>
              <img src={Drama2} alt="Drama Tracker" className='projectIMG'/>
              <img src={Drama3} alt="Drama Tracker" className='projectIMG'/>
              <p className='webText accDes'>
                Tech Used: React, Bootstrap, HTML, CSS, JavaScript, Sequelize, Postgres, Node.js and Express.
                <br/><br/>
                Users are able to track the Japanese TV Shows and Movies that they are watching, completed, or plan to watch all in one place. The user is only allowed to use this feature if they are logged in. Otherwise they are just able to browse the available content.
                <br/><br/>
                <a href='https://drama-tracker-andy.herokuapp.com/' target="_blank"  className='linkText' >Link to Website</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span className='AccText'>Hobbies Hub</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='AccText'>Hey! Say! JUMP</span></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

      <footer className='foot'>Last Updated: June 2022</footer>

    </div>
  );
}

export default ProjectsPage;