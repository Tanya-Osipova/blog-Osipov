import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import OsipovPic from '../../images/about/Evgenii.jpg';
import './About.css';

function About(props) {
  return (
    <>
    <Nav />
    <section className='about'>
      <Title>About Me</Title>
        <div className="about__content">
          <img className='about__image' src={OsipovPic} alt="Evgenii Osipov" />
          <p className="about__text">
            My name is Evgenii Osipov. I work as a postdoc at KU Leuven. 
            Here we discover new antiviral drugs using X-ray crystallography 
            and computational tools, like docking and MD.
          </p>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default About;