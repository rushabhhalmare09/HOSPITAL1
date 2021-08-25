import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MdLocalHospital} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    
    // FOr mobile view
    const closeMobilMenu = () => setClick(false)
    
    //This is for showing button if size is of certain pixel
    const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false);
      }else{
          setButton(true);
      }
    };

    useEffect( () => {
        showButton();
    }, []);
    
    //This is when pixel is less we will see only 3 horizontal lines
    window.addEventListener('resize', showButton);

    return (
    <>
        {/* Wrapping Entire COntent to WHite color (#fff = white) */}
        <IconContext.Provider value = {{color: '#fff'}}>
        <div className = 'navbar'>
            <div className = 'navbar-container container'>
        {/* Link is another form of href */}
              <Link to = '/' className='navbar-logo' onClick = {closeMobilMenu}>
                    <MdLocalHospital className='navbar-icon' />
                    LifeLine 
               </Link>
               <div className = 'menu-icon'  onCLick= {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = "nav-item">
                         <Link to = '/' className = "nav-links"  onClick = {closeMobilMenu}>
                             Home
                         </Link>    
                    </li>
                    <li className = "nav-item">
                         <Link to = '/gallery' className = "nav-links" onClick = {closeMobilMenu}>
                             Gallery
                         </Link>    
                    </li>
                    <li className = "nav-item">
                         <Link to = '/aboutUs' className = "nav-links" onClick = {closeMobilMenu}>
                             About Us
                         </Link>    
                    </li>
                    <li className = "nav-btn">
                         {button ? (
                            <Link to = '/sign-up' className = "btn-link">
                              <Button buttonStyle = 'btn--outline'> SIGN UP</Button>
                         </Link> 
                         ):(
                             <Link to = '/sign-up' className = "btn-link" onClick = {closeMobilMenu}>
                                 <Button buttonStyle = 'btn--outline'
                                    buttonSize = 'btn--mobile'> SIGN UP</Button>
                             </Link>

                         )}                                                    
                    </li>
                    <li className = "nav-btn">
                         {button ? (
                            <Link to = '/log-in' className = "btn-link">
                              <Button buttonStyle = 'btn--outline'> LOG IN</Button>
                         </Link> 
                         ):(
                             <Link to = '/log-in' className = "btn-link" onClick = {closeMobilMenu}>
                                 <Button buttonStyle = 'btn--outline'
                                    buttonSize = 'btn--mobile'> LOG IN</Button>
                             </Link>

                         )}                                                    
                    </li>
                </ul>
            </div>           
        </div>
        </IconContext.Provider>
     </>
    );
};

export default Navbar;
