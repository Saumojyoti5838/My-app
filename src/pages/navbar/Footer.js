import React from 'react';
import logo3 from './images/instagram.webp';
import logo4 from './images/mail.png';
import logo5 from './images/unstop.png';
import logo6 from './images/linked.png';
import logo7 from './images/ty.png';
import './footr.css';

const Footer = () =>{
    return (
      <div>
  <footer className="footer-container">
  <div className="social-icons">
    <a  className='log' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img className='ima' src={logo3} alt="my" height="25px" />
    </a>
    <a  className='log' href="https://www.saumojyoti5838@gmail.com" target="_blank" rel="noopener noreferrer">
    <img className='ima' src={logo4} alt="my" height="25px" />
    </a>
    <a className='log' href="https://unstop.com/u/Riju_5838" target="_blank" rel="noopener noreferrer">
    <img className='ima' src={logo5} alt="unstop" height="25px" />
    </a>
    <a  className='log' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img className='ima' src={logo6} alt="linked" height="25px" />
    </a>
    <a  className='log' href="https://github.com/users/Saumojyoti-Das/succession/invitation" target="_blank" rel="noopener noreferrer">
    <img className='ima' src={logo7} alt="git" height="25px" />
    </a>
  
    {/* Add more social icons as needed */}
  </div>
  <p className='ui'>&copy; 2024 Your Website Name</p>
  </footer>
  </div>
    );
  }
  export default Footer;