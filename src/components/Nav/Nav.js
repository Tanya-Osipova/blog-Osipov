import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDna } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Hamburger from '../Hamburger/Hamburger';
import Contact from '../Contact/Contact';
import Popup from '../Popup/Popup';
import './Nav.css';

function Nav(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const windowHeight = 200;

  // lock body when sidebar is open
  useEffect(() => {
    if (sidebarActive) {
      document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
      }
  }, [sidebarActive]);

  // add fixed nav
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= windowHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  }, []);

  // Popup esc close
  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
  }, [popupActive]);

  function handleEscapeKey(e) {
    if(e.key === 'Escape') {
      setPopupActive(false)
    }   
  }

  return (
    <>
    <nav className={fixedNav ? 'nav nav_fixed' : 'nav'}>
      <div 
        className={sidebarActive ? "nav__overlay nav__overlay_active" : "nav__overlay"}
        onClick={() => setSidebarActive(!sidebarActive)}
      >
      </div>
      <div className="nav__content">
        <Link to="/">
          <p>
            <FaDna className='nav__logo' />
          </p>
        </Link>
        <Hamburger 
          sidebarActive={sidebarActive}
          onClick={() => setSidebarActive(!sidebarActive)}
        />
        <ul className={sidebarActive ? 'nav__list nav__list_active' : 'nav__list'}>
          <li className='nav__item'>
            <NavLink
              exact to="/"
              className='nav__link nav__link_home'
              activeClassName="nav__link_active"
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              <FaHome className='nav__icon' />
              Home
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to="/about"
              className='nav__link'
              activeClassName="nav__link_active"
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              <FaUserCircle className='nav__icon' />
              About
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to="/publications"
              className='nav__link'
              activeClassName="nav__link_active"
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              <FaBook className='nav__icon' />
              Publications
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to="/blog"
              className='nav__link'
              activeClassName="nav__link_active"
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              <FaEdit className='nav__icon' />
              Blog
            </NavLink>
          </li>
          <li className='nav__item'>
            <button
              className='nav__button'
              type='button'
              onClick={() => setPopupActive(true)}
            >
              <FaEnvelope className='nav__icon' />
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <Popup 
      active={popupActive} 
      setActive={setPopupActive} 
    >
      <Contact />
    </Popup>
    </>
  ); 
}

export default Nav;