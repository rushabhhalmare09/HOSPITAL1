import React from 'react';
import './ReceptLoginSection.css';
import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function ReceptLoginSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='recept__section'>
        <div className='recept__wrapper'>
          <h1 className='recept__heading'>RECEPTIONIST</h1>
          <div className='recept__container'>
            {/* //Here after clicking on buttonAd which page to open */}
            <Link to = "/login-receptionist" className='recept__container-card'>
              <div className='recept__container-cardInfo'>
                <div className='image'>
                <MdPerson/>
                </div>
            {/* LOGIN DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <buttonRe type="submit">Login</buttonRe>
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
export default ReceptLoginSection;