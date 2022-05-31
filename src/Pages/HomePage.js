import React from 'react';
import mePic from '../IMG/wave.png';
import meExPic from '../IMG/Exp.png';
import Carousel from 'react-bootstrap/Carousel'

function HomePage(props) {
  return (
    <div>

      <br />
      <h3 className='webText homeHeader'> Welcome to My Website! </h3>
      <br />

      <div className='caroContainer shadow'>

        <Carousel>

          <Carousel.Item>
            <div className='caroSpace'>
              <img className='mePic' src={mePic} alt='me' />
              <p className='homeText'> <span className='homeBig'> Introduction </span></p>
              <p className='homeText'> My name is Andaiye Wurm and I graduated Brooklyn College in Spring of 2022 with a Bachelors of Science in Multimedia Computing. I like to be creative and use my art skills to make cool and interesting websites. <br />Click on the other pages to find out more about the websites I have made in the past!</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='caroSpace'>
              <img className='meExPic' src={meExPic} alt='me' />
              <p className='homeText'> <span className='homeBig'> Interests and Hobbies </span></p>
              <ul className='homeText'>
                <li><u>Art:</u> I love to draw digitally. The drawings you see on this page are made by me as well.</li>
                <li><u>Figure Skating:</u> I love figure skating. My favorite figure skater is Shoma Uno and is the reason I decided to learn Japanese!</li>
                <li><u>Video Games:</u> I love to play games in my free time. My favorite game of all time is Kingdom Hearts II. </li>
              </ul>
            </div>
          </Carousel.Item>

        </Carousel>

      </div>

      <footer className='foot'>Last Updated: June 2022</footer>

    </div>
  );
}

export default HomePage;