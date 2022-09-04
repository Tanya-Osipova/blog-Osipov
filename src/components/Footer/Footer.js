import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <div className="footer__content">
        <ul className="footer__list">
          <li className='footer__item'>
            <FaTwitter className='footer__icon' />
          </li>
          <li className='footer__item'>
            <FaTelegramPlane className='footer__icon'/>
          </li>
          <li className='footer__item'>
            <FaLinkedinIn className='footer__icon' />
          </li>
        </ul>
        <p className='footer__copyright'>
          &copy; Tanya Osipova. <span className='footer__date'>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;