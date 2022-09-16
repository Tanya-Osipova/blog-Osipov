import React from 'react';
import { FaDna } from "react-icons/fa";
import './Loader.css';

function Loader(props) {
  return (
    <div className='loader-container'>
      <FaDna className='loader' />
    </div>
  );
}

export default Loader;