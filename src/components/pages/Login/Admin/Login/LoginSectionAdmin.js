import React from 'react';
import './LoginSectionAdmin.css';
import { GrUserAdmin } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function LoginSectionAdmin() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='adminn__section'>
        <div className='adminn__wrapper'>
          <h1 className='adminn__heading'>ADMIN PORTAL</h1>
          <div className='adminn__container'>
            {/* //Here after clicking on buttonAd which page to open */}
            <Link to = "/Admin" className='adminn__container-card'>
              <div className='adminn__container-cardInfo'>
                <div className='image'>
                <GrUserAdmin />
                </div>
            {/* LOGIN DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <buttonAd type="submit">Login</buttonAd>
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
export default LoginSectionAdmin;