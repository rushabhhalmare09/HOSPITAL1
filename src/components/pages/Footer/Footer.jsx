import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint, MdLocalHospital } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Newsletter
        </p>
        <p className='footer-subscription-text'>
          Subscribe for latest News
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How we work</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Feedback</Link>
            <Link to='/'>Terms and Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Programmes</h2>
            <Link to='/'>Charity Eventa</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdLocalHospital className='navbar-icon' />
              LIFELINE HOSPITAL
            </Link>
          </div>
          <small className='website-rights'>LIFELINE HOSPITAL © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//https://www.facebook.com/'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//https://www.instagram.com/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//https://www.youtube.com/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={'//https://twitter.com/?lang=en'}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={'//https://www.linkedin.com/signup'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;