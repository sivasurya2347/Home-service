import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const images = [
  {
    src: 'https://i.pinimg.com/736x/d3/14/4b/d3144b4e0cea8aaa5404868e4f3495d8.jpg',
    alt: 'Banner',
    description: 'This is the banner image.'
  },
  {
    src: 'https://image.cdn2.seaart.ai/2024-06-26/cptmimde878c73bf3cb0-2/9d89364a0065345464fe56f2f20a79ca_low.webp',
    alt: 'About Us',
    description: 'Learn more about us.'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6SHxNIB6dlbG2_41z38h9pmCR8htmPHIug&s',
    alt: 'Our Domains',
    description: 'Explore our domains.'
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Your Company Name</h1>
        <nav>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#our-domains">Our Domains</a></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrevClick}>&#9664;</button>
        <div className="image-container">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <p>{images[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>&#9654;</button>
      </div>
      
      <section id="about-us" className="about-us">
        <h2>About Us</h2>
        <p>Many individuals face difficulties in finding reliable and skilled workers for home services. Similarly, skilled workers struggle to find consistent and well-paying job opportunities. The lack of a centralized platform to connect these two groups leads to inefficiencies and missed opportunities. Home Services Connect aims to solve these issues by providing a comprehensive platform that connects homeowners with skilled workers, ensuring transparency, reliability, and convenience.</p>
      </section>
      
      <section id="our-domains" className="our-domains">
        <h2>Our Domains</h2>
      </section>
      
      <footer className="footer">
        <input type="text" placeholder="Search domain" />
      </footer>
    </div>
  );
};

export default HomePage;
