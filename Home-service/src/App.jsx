import { useState } from 'react';
import './App.css';

const images = [
  {
    src: 'https://i.pinimg.com/736x/d3/14/4b/d3144b4e0cea8aaa5404868e4f3495d8.jpg',
    description: 'Image 1 description',
  },
  {
    src: 'https://image.cdn2.seaart.ai/2024-06-26/cptmimde878c73bf3cb0-2/9d89364a0065345464fe56f2f20a79ca_low.webp',
    description: 'Image 2 description',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6SHxNIB6dlbG2_41z38h9pmCR8htmPHIug&s',
    description: 'Image 3 description',
  },
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="App">
      <div className="image-slider">
        <button className="arrow left-arrow" onClick={prevImage}>&lt;</button>
        <div className="image-container">
          <img src={images[currentImage].src} alt={`Slide ${currentImage + 1}`} />
          <p>{images[currentImage].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default App;
