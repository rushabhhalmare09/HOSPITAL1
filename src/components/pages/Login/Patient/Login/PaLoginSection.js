import React from 'react';
import './PaLoginSection.css';
import { SiPingup } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function PaLoginSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pa__section'>
        <div className='pa__wrapper'>
          <h1 className='pa__heading'>PATIENT</h1>
          <div className='pa__container'>
            {/* //Here after clicking on buttonAd which page to open */}
            <Link to = "/login-patient" className='pa__container-card'>
              <div className='pa__container-cardInfo'>
                <div className='image'>
                <SiPingup />
                </div>
            {/* LOGIN DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />
                
                  <buttonPa type="submit">Login</buttonPa>
                            {/* Here we are giving [LINK] to text so click on text i.e "log-in" */}
                {/* <buttonPa type="submit"><Link to = "">Login</Link></buttonPa> */}
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
export default PaLoginSection;