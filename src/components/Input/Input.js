import React from 'react';
import './Input.css';

const Input = ({ 
  id, 
  type, 
  children, 
  placeholder, 
  value, 
  onInputChange,
}) => {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{children}</label>
      <input 
        className='input'
        id={id}
        type={type} 
        onChange={onInputChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;