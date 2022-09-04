import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {

  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' }, 
    delay: 500,
    config: {duration: 1000},
  })
  
  return (
    <header className='header'>
      <Nav />
      <animated.div style={props}>
        <div className="header__info">
          <div className='header__content'>
            <h1 className='header__title'>
              Evgenii Osipov
            </h1>
            <p className='header__subtitle'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, aspernatur.
            </p>
            <Link 
              to='/blog'
              className='header__link'
            >
              blog
            </Link>
          </div>
        </div>
      </animated.div>
    </header>
  );
}

export default Header;