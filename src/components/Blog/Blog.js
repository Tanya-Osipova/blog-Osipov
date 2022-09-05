import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import blogData from '../../data/blog';
import './Blog.css';

const Blog = (props) => {
  const cards = blogData.map((card) => {
    return (
      <BlogCard 
        key={card.id} 
        {...card} 
      />
    )
  })
  
  return (
    <>
      <Nav />
      <Title>My Blog</Title>
      <section className='blog'>
        <ul className='blog__list'>
          {cards}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Blog;