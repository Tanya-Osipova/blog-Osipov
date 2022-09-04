import React from 'react';
import './Hamburger.css';

function Hamburger({onClick, sidebarActive}) {
  return (
    <div className={sidebarActive ? "hamburger active" : "hamburger"} onClick={onClick}>
      <div className="bar bar_top"></div>
      <div className="bar bar_middle"></div>
      <div className="bar bar_bottom"></div>
    </div>
  );
}

export default Hamburger;