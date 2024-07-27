import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import About_Us from './About_Us';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg'; 
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import './style.css'; 

const images1 = [
  { src: image1, alt: 'Image Description 1', text: 'Description for image 1' },
  { src: image2, alt: 'Plumber Description', text: 'Professional plumbing services' },
  { src: image3, alt: 'Cleaning Description', text: 'Thorough and reliable cleaning services' },
  { src: image4, alt: 'Carpenter Description', text: 'Expert carpentry work' }
];

const images2 = [
  { src: image5, alt: 'Image Description 2', text: 'Another description for image 2' },
  { src: image6, alt: 'Plumber Description 2', text: 'Another professional plumbing service' },
  { src: image7, alt: 'Cleaning Description 2', text: 'Another thorough cleaning service' },
  { src: image8, alt: 'Carpenter Description 2', text: 'Another expert carpentry work' }
];

const HomePage = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1(prevIndex => (prevIndex + 1) % images1.length);
    }, 5000); // Change image every 5 seconds for the first carousel

    return () => clearInterval(interval1); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex2(prevIndex => (prevIndex + 1) % images2.length);
    }, 5000); // Change image every 5 seconds for the second carousel

    return () => clearInterval(interval2); // Cleanup on component unmount
  }, []);

  const handleNext1 = () => {
    setCurrentIndex1((currentIndex1 + 1) % images1.length);
  };

  const handlePrev1 = () => {
    setCurrentIndex1((currentIndex1 - 1 + images1.length) % images1.length);
  };

  const handleNext2 = () => {
    setCurrentIndex2((currentIndex2 + 1) % images2.length);
  };

  const handlePrev2 = () => {
    setCurrentIndex2((currentIndex2 - 1 + images2.length) % images2.length);
  };

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-box1">
          <img src={images1[currentIndex1].src} alt={images1[currentIndex1].alt} className="slider-image" />
          <div className="description">{images1[currentIndex1].text}</div>
          <button className="arrow arrow-left" onClick={handlePrev1}>←</button>
          <button className="arrow arrow-right" onClick={handleNext1}>→</button>
        </div>
        <div className="home-box2">
          <img src={images2[currentIndex2].src} alt={images2[currentIndex2].alt} className="slider-image" />
          <div className="description">{images2[currentIndex2].text}</div>
          <button className="arrow arrow-left" onClick={handlePrev2}>←</button>
          <button className="arrow arrow-right" onClick={handleNext2}>→</button>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <h1>About Us</h1>
      <div id="about-us">
        <About_Us />
      </div>
    </div>
  );
};

export default HomePage;
