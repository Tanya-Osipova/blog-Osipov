import React from 'react';
import './Popup.css';

const Popup = ({ active, setActive, children }) => {
  return (
    <div 
      className={active ? 'popup active' : 'popup'} 
      onClick={() => setActive(false)}
    >
      <div 
        className={active ? 'popup__content active' : 'popup__content'} 
        onClick={e => e.stopPropagation()}
      >
        <button 
          className='popup__close-button' 
          onClick={() => setActive(!active)}
        >
          <i className="fa-solid fa-xmark popup__close-icon"></i>
        </button>

        {children}

      </div>
    </div>
  );
}

export default Popup;
