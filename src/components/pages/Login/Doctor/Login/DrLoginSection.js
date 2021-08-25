import React from 'react';
import './DrLoginSection.css';
import {  GiAnatomy  } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function DrLoginSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='doctor__section'>
        <div className='doctor__wrapper'>
          <h1 className='doctor__heading'>Doctor</h1>
          <div className='doctor__container'>
            {/* //Here after clicking on buttonAd which page to open */}
            <Link to = "/login-doctor" className='doctor__container-card'>
              <div className='doctor__container-cardInfo'>
                <div className='image'>
                <GiAnatomy />
                </div>
            {/* LOGIN DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <buttonDr type="submit">Login</buttonDr>
                 </div>
              </form>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default DrLoginSection;