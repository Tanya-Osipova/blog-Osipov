import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className="footer__content">
      <ul className="footer__list">
        <li className='footer__item'>
          <Link
            to={{ pathname: "https://github.com/Tanya-Osipova" }}
            target="_blank"
          >
            <FaGithub className='footer__icon'/>
          </Link>
        </li>
        <li className='footer__item'>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/tanya-osipova/" }}
            target="_blank"
          >
            <FaLinkedinIn className='footer__icon' />
          </Link>
        </li>
      </ul>
      <p className='footer__copyright'>
        &copy; Tanya Osipova. <span className='footer__date'>{new Date().getFullYear()}</span>
      </p>
    </div>
  </footer>
);

export default Footer;