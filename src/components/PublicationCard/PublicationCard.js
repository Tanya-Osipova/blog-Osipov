import React from 'react';
import { FaFilePdf } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import paper from '../../images/publication/blog1.avif'
import './PublicationCard.css';

function PublicationCard(props) {
  return (
    <li className="publication-card__item">
      <img className='publication-card__img' src={paper} alt={props.title} />
      <ul className="publication-card__links">
        <li className="publication-card__links-item">
          <FaFilePdf className='publication-card__icon' />
        </li>
        <li className="publication-card__links-item">
          <FaLink className='publication-card__icon' />
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