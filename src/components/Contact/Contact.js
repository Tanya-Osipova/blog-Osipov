import React from 'react';
import avatar from '../../images/heroImage.jpg'
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className='contact__image-container'>
        <img className='contact__image' src={avatar} alt="Avatar" />
        <h2 className='contact__title'>Evgenii Osipov</h2>
        <p className='contact__subtitle'>Biochemist</p>
      </div>
      <ul className="contact__list">
        <li>
          <p className='contact__data'><i className="fa-solid fa-location-dot contact__icon"></i>Leuven, Belgium</p>
        </li>
        <li>
          <p className='contact__data'><i className="fa-solid fa-suitcase contact__icon"></i>KU Leuven</p>
        </li>
        <li>
          <p className='contact__data'><i className="fa-solid fa-envelope contact__icon"></i>email@email.com</p>
        </li>
        <li>
          <p className='contact__data'><i className="fa-solid fa-phone contact__icon"></i>8943934</p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;