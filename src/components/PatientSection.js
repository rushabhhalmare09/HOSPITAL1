import React from 'react';
import { Button } from './Button';
import './PatientSection.css';
// import image1 from '.../public/image/patient1.jpg'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function PatientSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='patient__section'>
        <div className='patient__wrapper'>
          <h1 className='patient__heading'>Patient Feedback</h1>
          <div className='patient__container'>
            <Link to='/sign-up' className='patient__container-card'>
              <div className='patient__container-cardInfo'>
                <div className='image'>
                <BsXDiamondFill />
                </div>
                <h3>K V ROY</h3>
                <h4>BEST</h4>
                <p>Doctors are really awesome of this Hospital, They treat us with atmost importance and the take proper care of us</p>
                <ul className='patient__container-features'>
                  <li>Treatment - 4.5/5.0</li>
                  <li>Care - 4.0/5.0</li>
                  <li>Hygiene - 4.4/5.0</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='patient__container-card'>
              <div className='patient__container-cardInfo'>
                <div className='image'>
                  <BsXDiamondFill />
                </div>
                <h3>K V ROY</h3>
                <h4>Awesome</h4>
                <p>Doctors are really awesome of this Hospital, They treat us with atmost importance and the take proper care of us</p>
                <ul className='patient__container-features'>
                <li>Treatment - 5.0/5.0</li>
                  <li>Care - 4.0/5.0</li>
                  <li>Hygiene - 4.1/5.0</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='patient__container-card'>
              <div className='patient__container-cardInfo'>
                <div className='image'>
                <BsXDiamondFill />
                </div>
                <h3>K V ROY</h3>
                <h4>Awesome</h4>
                <p>Doctors are really awesome of this Hospital, They treat us with atmost importance and the take proper care of us</p>
                <ul className='patient__container-features'>
                <li>Treatment - 5.0/5.0</li>
                  <li>Care - 4.0/5.0</li>
                  <li>Hygiene - 4.1/5.0</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default PatientSection;