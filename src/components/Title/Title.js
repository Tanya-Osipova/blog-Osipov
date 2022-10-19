import React from 'react';
import './Title.css';

const Title = ({ children, id }) => (
  <div className='title' id={id}>
    <h2 className='title__title'>
      {children}
    </h2>
    <hr className='title__line' />
  </div>
);

export default Title;