import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import './BlogCard.css';

function BlogCard({ id, image, title, date, text }) {
  const [readMore, setReadMore] = useState(false);

  const animStyle = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' }, 
    delay: 300,
    config: {duration: 600},
  })

  return (
    <animated.div style={animStyle}>
      <li className="blog__item">
        <img className='blog__image' src={image} alt={title} />
        <div className="blog__date-container">
          <h2 className='blog__title'>{title}</h2>
          <p className='blog__date'>{date}</p>
        </div>
      
        <p className='blog__text'>
          {readMore ? text : `${text.substring(0, 300)}...`}
        </p>
        
        <button 
          type='button'
          className="blog__read-more" 
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? <FaChevronUp className='blog__arrow' /> : <FaChevronDown className='blog__arrow' />}
        </button>
      </li>
    </animated.div>
  );
}

export default BlogCard;