import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Button1 } from './pages/Login/Button1';
import { Link } from 'react-router-dom';

function HeroSection({
  //THis all are the items in which we will apply css and add content into it and which will show on page
  
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
              {description}
             </p>
                {/* Link =  here as we are passing 'sign-up' in link, whenever we clivk on button it will open sign-up page
                    Button = here using 'Button' we are displaying (Button is being made in button.js)
                 */}
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
                {/* <Link to='/log-in'>
                  <Button1 buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button1>
                </Link> */}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;