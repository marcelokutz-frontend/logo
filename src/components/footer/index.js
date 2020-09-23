import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

import './style.scss';
import logo from '../../images/logo.svg';

const Footer = () => (
  <footer id="footer" className="site-footer">
    <Fade up>
      <div className="container">
        <div className="site-footer__brand">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

       
      </div>
      <div className="container">
        <div className="row-footer">
          <div className="footer-col">
            <nav className="site-footer__navigation">
              <ul className="nav site-footer__navigation__menu">
                <li><a href="#" title="Terms & conditions">Terms & conditions</a> | </li>
                <li><a href="#" title="Privacy policy">Privacy policy</a> | </li>
                <li><a href="#" title="Cookies policy">Cookies policy</a> | </li>
                <li><a href="#" title="Copyrights Notification">Copyrights Notification</a></li>
              </ul>
            </nav>
            <p className="copyright">Copyright © 2020 Logotel. All rights reserved.</p>
          </div>
          <div className="links-social">
            <p>SEGUICI SUI SOCIAL:</p>
            <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.youtube.com" title="You Tube" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </Fade>
  </footer>
);

export default Footer;

                                                        