import React from 'react';
import mePic from '../IMG/wave.png';

function HomePage(props) {
  return (
    <div>
      <div className='keepHome'>

        <h3 className='webText homeHeader'> Welcome to My Website! </h3>
        <br />

        <img className='mePic' src={mePic} alt='me' />

        <p className='homeText ind'> My name is Andaiye Wurm and I graduated Brooklyn College in Spring of 2022 with a Bachelors of Science in Multimedia Computing. I like to be creative and use my art skills to make cool and interesting websites. Click on the other pages to find out more about the websites I have made in the past!</p>

        <p className='homeText'> <span className='homeBig'> Interests and Hobbies </span></p>

        <ul className='homeText'>
          <li><u>Art:</u> I love to draw digitally. The drawings you see on this page are made by me as well.</li>
          <li><u>Figure Skating:</u> I love figure skating. My favorite figure skater is Shoma Uno and is the reason I decided to learn Japanese!</li>
          <li><u>Video Games:</u> I love to play games in my free time. My favorite game of all time is Kingdom Hearts II. </li>
        </ul>

      </div>

      <footer className='foot'>Last Updated: June 2022</footer>

    </div>
  );
}

export default HomePage;