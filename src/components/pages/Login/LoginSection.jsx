import React from 'react';
import { Button1 } from './Button1';
import './LoginSection.css';
import { GrUserAdmin } from 'react-icons/gr';
import { GiAnatomy } from 'react-icons/gi';
import { MdPerson } from 'react-icons/md';
import { SiPingup } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function LoginSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='login__section'>
        <div className='login__wrapper'>
          <h1 className='login__heading'>LOGIN PORTAL</h1>
          <div className='login__container'>
            {/* //Here after clicking on button which page to open */}
             {/* Giving Specific links on clicking cards */}
            <Link to = "/Admin" className='login__container-card'>
              <div className='login__container-cardInfo'>
                <div className='image'>
                <GrUserAdmin />
                </div>
                <h3>ADMIN</h3>
                <Button1 buttonSize='btn--wide' buttonColor='primary'>
                  LOG IN
                </Button1>
              </div>
            </Link>
            {/* Giving Specific links on clicking cards */}
            <Link to = "/login-doctor" className='login__container-card'>
              <div className='login__container-cardInfo'>
                <div className='image'>
                  <GiAnatomy />
                </div>
                <h3>DOCTOR</h3>
                <Button1 buttonSize='btn--wide' buttonColor='blue'>
                  LOG IN
                </Button1>
              </div>  
            </Link>
            {/* Giving Specific links on clicking cards */}
            <Link to = "/login-patient" className='login__container-card'>
              <div className='login__container-cardInfo'>
                <div className='image'>
                  <SiPingup />
                </div>
                <h3>PATIENT</h3>
                <Button1 buttonSize='btn--wide' buttonColor='primary'>
                  LOG IN
                </Button1>
              </div>
            </Link> 
            {/* Giving Specific links on clicking cards */}
            <Link to = "/login-receptionist" className='login__container-card'>
              <div className='login__container-cardInfo'>
                <div className='image'>
                  <MdPerson />
                </div>
                <h3>RECEPTIONIST</h3>
                <Button1 buttonSize='btn--wide' buttonColor='blue'>
                  LOG IN
                </Button1>
              </div>  
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default LoginSection;