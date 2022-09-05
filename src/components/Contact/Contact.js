import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import avatar from '../../images/logo/logo.png'
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
          <p className='contact__data'>
            <FaMapMarkerAlt className='contact__icon'/>Leuven, Belgium 
          </p>
        </li>
        <li>
          <p className='contact__data'>
            <FaSuitcase className='contact__icon' />KU Leuven
          </p>
        </li>
        <li>
          <p className='contact__data'>
            <FaEnvelope className='contact__icon' />email@email.com
          </p>
        </li>
        <li>
          <p className='contact__data'>
            <FaPhoneAlt className='contact__icon' />77777777777
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;