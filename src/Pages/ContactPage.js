import React from 'react';


function ContactPage(props) {
  return (
    <div>

      <h3 className='webText Headers'>Stay Connected</h3>

      <div className='keepContact'>

        <ul className='contactList shadow'>
          <li className='webText'>Email:<a className='linkText' href='mailto: andaiyewurm@gmail.com' target="_blank">andaiyewurm@gmail.com</a> </li>
          <li className='webText'>LinkedIn: <a className='linkText' href='https://www.linkedin.com/in/andaiye-wurm-5bb375209/' target="_blank">Andaiye Wurm</a></li>
          <li className='webText'>GitHub: <a className='linkText' href='https://github.com/andywurm' target="_blank">andywurm</a> </li>
          <li className='webText'>Resume: <a className='linkText' href='https://github.com/andywurm' target="_blank">Andaiye Wurm 2022 Resume</a> </li>
        </ul>

      </div>

      <footer className='contactFoot'>Last Updated: June 2022</footer>

    </div>
  );
}

export default ContactPage;