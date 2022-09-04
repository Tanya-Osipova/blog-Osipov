import React from 'react';
import './Title.css';

function Title({children, id}) {
  return (
    <div className='title' id={id}>
      <h2 className='title__title'>
        {children}
      </h2>
      <hr className='title__line' />
    </div>
  );
}

export default Title;