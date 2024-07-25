import { useState, useEffect } from 'react';
// import './About_Us.css'; // Ensure the CSS file is correctly imported

const slides = [
  "At [Your Company Name], we are dedicated to transforming the way homeowners connect with skilled professionals. Our platform is designed to simplify the process of finding and hiring experts for various home services, ensuring that every project is handled with the utmost care and professionalism.",
  "Connect Homeowners with Skilled Workers: We provide a seamless platform where homeowners can easily discover and engage with skilled workers for a wide range of home services. Whether you're looking for a handyman, plumber, electrician, or any other specialist, our service directory is designed to connect you with the right professionals who meet your needs.",
  "Facilitate Easy Service Booking: Booking home services has never been easier. Our user-friendly interface allows you to schedule appointments with just a few clicks. We streamline the process with automated quotation generation, so you know exactly what to expect without any hidden fees or surprises.",
  "Enhance Transparency and Trust: Building trust is at the heart of what we do. Our platform features a robust review and feedback system, ensuring that you can make informed decisions based on the experiences of other homeowners. We believe in transparency, which is why we provide clear and upfront pricing for all services.",
  "Improve Efficiency for Workers: For skilled workers, we offer a dedicated space to manage their profiles and streamline their operations. Our platform helps workers view upcoming tasks, manage schedules, and receive notifications for new job opportunities. By improving efficiency and communication, we help workers focus on delivering high-quality service.",
  "At [Your Company Name], we are committed to making home service management straightforward, transparent, and efficient for everyone. Join us in revolutionizing the way home services are delivered and experienced!"
];

const About_Us = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the offset for the current slide
  const offset = -currentSlide * 100; // Negative value to slide left

  return (
    <div className="about-us">
      <div className="slider" style={{ transform: `translateX(${offset}%)` }}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="slide"
          >
            <p>{slide}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About_Us;
