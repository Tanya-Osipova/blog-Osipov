import React from 'react';
import Nav from '../Nav/Nav';
import PublicationCard from '../PublicationCard/PublicationCard';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import publicationData from '../../data/publications';
import './Publications.css';

const Publications = (props) => {
  const cards = publicationData.map((card) => {
    return (
      <PublicationCard 
        key={card.id}
        {...card}
      />
    )
  })
  
  return (
    <>
      <Nav />
      <Title>Publications</Title>
      <section className='publications'>
        <ul className="publications__list">
          {cards}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Publications;