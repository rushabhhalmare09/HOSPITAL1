import React from 'react';
import './SignUpSection.css';
import { SiPingup } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function SignUpSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='signup__section'>
        <div className='signup__wrapper'>
          <h1 className='signup__heading'>REGISTRATION</h1>
          <div className='signup__container'>
            {/*link to ="/SignUp"  = this way the page will get redirected to /signUp  */}
            <Link className='signup__container-card'>
              <div className='signup__container-cardInfo'>
              <div className='image'>
                  <SiPingup />
                </div>

                         {/* Sign DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  {/* <h1>Sign Up</h1> */}
                  <p>Please fill in this form to create an account.</p>
                  <hr />
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="Enter Name" name="text" required />
                  
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required />
                  
                  <label for="age"><b>AGE</b></label>
                  <input type="text" placeholder="Enter AGE" name="age" required />

                  <label for="gender"><b>Gender</b></label>
                  <input type="text" placeholder="Enter Gender" name="text" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="psw-repeat" required />

                  <p><h3>By creating an account you agree to our Terms & Privacy</h3></p>
                    <buttonSign type="submit" class="signupbtn">Sign Up</buttonSign>
                    
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
export default SignUpSection;