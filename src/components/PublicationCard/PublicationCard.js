import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import paperPic from '../../images/publication/blog1.avif';
import './PublicationCard.css';

function PublicationCard(props) {
  return (
    <li className="publication-card__item">
      <img className='publication-card__img' src={paperPic} alt={props.title} />
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
  );
}

export default PublicationCard;