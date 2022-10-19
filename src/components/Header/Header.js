import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import NavHome from '../NavHome/NavHome';
import './Header.css';

const Header = () => {

  const animStyle = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' }, 
    delay: 300,
    config: {duration: 600},
  })
  
  return (
    <header className='header'>
      <NavHome />
      <animated.div style={animStyle}>
        <div className="header__info">
          <div className='header__content'>
            <h1 className='header__title'>
              Evgenii Osipov
            </h1>
            <p className='header__subtitle'>
              Laboratory for Biocrystallography, 
              Department of Pharmaceutical Sciences, KU Leuven O&amp;N2
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