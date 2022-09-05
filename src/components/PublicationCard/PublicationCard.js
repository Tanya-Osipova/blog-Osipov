import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import paper from '../../images/publication/blog1.avif'
import './PublicationCard.css';

function PublicationCard(props) {

  const animStyle = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' }, 
    delay: 300,
    config: {duration: 1000},
  })

  return (
    <animated.div style={animStyle}>
      <li className="publication-card__item">
        <img className='publication-card__img' src={paper} alt={props.title} />
        <ul className="publication-card__links">
          <li className="publication-card__links-item">
            <Link to='' className='publication-card__link'>
              <FaFilePdf className='publication-card__icon' />
            </Link>
          </li>
          <li className="publication-card__links-item">
            <Link to='' className='publication-card__link'>
              <FaLink className='publication-card__icon' />
            </Link>
          </li>
        </ul>
        <div className="publication-card__overlay">
          <p className="publication-card__text">
            {props.authors} <span className='publication-card__title'>{props.title}</span> {props.publication}
          </p>
        </div>
      </li>
    </animated.div>
  );
}

export default PublicationCard;