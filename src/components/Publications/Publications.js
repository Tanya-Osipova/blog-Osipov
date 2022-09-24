import React from 'react';
import Nav from '../Nav/Nav';
import PublicationCard from '../PublicationCard/PublicationCard';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Loader from '../Loader/Loader';
import './Publications.css';

const Publications = ({ 
  publicationData, 
  handleSearchInput, 
  searchTerm, 
  isLoading,
  isError,
}) => {
  return (
    <>
      <Nav />
      <section className='publications'>
        <Title>Publications</Title>
        <Input
          id='search'
          type='text'
          placeholder='Search By Title'
          value={searchTerm}
          onInputChange={handleSearchInput} 
          searchTerm={searchTerm} 
        />
        {isError && <p className='data-fetching-error'>Something went wrong...</p>}
        {!publicationData.length && <p className='data-fetching-error'>No publication found</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="publications__list">
            {publicationData.map((card) => {
              return (
                <PublicationCard 
                  key={card.id}
                  {...card}
                />
              )
            })}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Publications;