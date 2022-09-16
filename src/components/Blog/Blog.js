import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import BlogCard from '../BlogCard/BlogCard';
import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Button from '../Button/Button';
import './Blog.css';

const Blog = ({ blogData }) => {
  const [moreBlog, setMoreBlog] = useState(6);
  const moreBlogCards = 3;

  const handleMoreBlog = () => {
    setMoreBlog((prevValue) => prevValue + moreBlogCards)
  };
  
  return (
    <>
      <Nav />
      <section className='blog'>
        <Title>My Blog</Title>
        
        <ul className='blog__list'>
          {blogData.slice(0, moreBlog).map((card) => {
            return (
              <BlogCard 
                key={card.id} 
                {...card} 
              />
            )
          })}
        </ul>

        {moreBlog < blogData.length && (
          <Button 
            className='blog__more-button'
            type='button'
            onClick={handleMoreBlog}
          >
            <FaChevronDown className='blog__icon' />
            <span className='blog__button-text'>More</span>
          </Button>
        )}
        
      </section>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Blog;