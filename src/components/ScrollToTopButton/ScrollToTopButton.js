import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './ScrollToTopButton.css';

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const windowHeight = 300;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > windowHeight) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  const handleToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      type='button'
      className={showTopButton ? 'top-button' : ''}
      onClick={handleToTopButton}
    >
      <FaArrowUp />
    </button> 
  );
}

export default TopButton;