import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Drama1 from '../IMG/Drama1.png';
import Drama2 from '../IMG/Drama2.png';
import Drama3 from '../IMG/Drama3.png';
import HHub from '../IMG/HHub.png';
import HHub2 from '../IMG/HHub2.png';
import HHub3 from '../IMG/HHub3.png';
import hsj from '../IMG/hsj.png';
import hsj2 from '../IMG/hsj2.png';
import hsj3 from '../IMG/hsj3.png';
//`../IMG/${nameIMG}$.png`

function ProjectsPage(props) {

  const [show, setShow] = useState(true);

  function enlargeIMG(imageName) {

  }


  return (
    <div>

      <p className='webText projFirst'>All items are displayed in order from most recent to the oldest.</p>
      <div className='accord shadow'>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className='AccText'>Drama Tracker</span></Accordion.Header>
            <Accordion.Body>
              <span className='projSep'><img src={Drama1} alt="Drama Tracker" className='projectIMG shadow' /></span>
              <span className='projSep'><img src={Drama2} alt="Drama Tracker" className='projectIMG shadow' onClick={enlargeIMG} /></span>
              <span className='projSep'><img src={Drama3} alt="Drama Tracker" className='projectIMG shadow' onClick={enlargeIMG} /></span>
              <p className='webText accDes'>
                Tech Used: React, Bootstrap, HTML, CSS, JavaScript, Sequelize, Postgres, Node.js and Express.
                <br /><br />
                Users are able to track the Japanese TV Shows and Movies that they are watching, completed, or plan to watch all in one place. The user is only allowed to use this feature if they are logged in. Otherwise they are just able to browse the available content.
                <br /><br />
                <a href='https://drama-tracker-andy.herokuapp.com/' target="_blank" className='linkText' >Link to Website</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header><span className='AccText'>Hobbies Hub</span></Accordion.Header>
            <Accordion.Body>
              <span className='projSep'><img src={HHub} alt="Hobbies Hub" className='projectIMG shadow' onClick={enlargeIMG}
              /></span>
              <span className='projSep'><img src={HHub2} alt="Hobbies Hub" className='projectIMG shadow' onClick={enlargeIMG} /></span>
              <span className='projSep'><img src={HHub3} alt="Hobbies Hub" className='projectIMG shadow' onClick={enlargeIMG} /></span>
              <p className='webText accDes'>
                Tech Used: React, Bootstrap, HTML, CSS, JavaScript, Postgres, Node.js and Express.
                <br /><br />
                Users are able to meet other people with similar hobbies or interests. Once they sign up they will be instantly matched to someone else based on that interest and their age. They will then begin to chat with the other person to hopefully work together on their shared hobby. </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='AccText'>Hey! Say! JUMP</span></Accordion.Header>
            <Accordion.Body>
              <span className='projSep'><img src={hsj} alt="HeySayJump" className='projectIMG shadow' onClick={enlargeIMG}
              /></span>
              <span className='projSep'><img src={hsj2} alt="HeySayJump" className='projectIMG shadow' onClick={enlargeIMG}
              /></span>
              <span className='projSep'><img src={hsj3} alt="HeySayJump" className='projectIMG shadow' onClick={enlargeIMG}
              /></span>
              <p className='webText accDes'>
                Tech Used: HTML, CSS and JavaScript.
                <br /><br />
                Users are able to learn more about the Japanese band Hey! Say! JUMP. They can see which programs they are on for that month as well as look at pictures in the gallery. There is also a store section where the user can choose which piece of merch they want, add it to their cart, pay, and check out. </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

      <footer className='foot'>Last Updated: June 2022</footer>

    </div>
  );
}

export default ProjectsPage;