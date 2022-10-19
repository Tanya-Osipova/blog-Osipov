import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './PageNotFound.css';

const PageNotFound = () => (
  <div className="page-not-found">
    <div className='page-not-found__content'>
      <img className='page-not-found__logo' src={logo} alt="logo" />
      <p className='page-not-found__title'>404 - Page not found</p>
      <Link className="page-not-found__link" to="/">
        Go back to homepage
      </Link>
    </div>
  </div>
);

export default PageNotFound;
