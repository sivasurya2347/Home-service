import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the logic for search submission
    console.log('Search query:', searchQuery);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-name">ACE Home Services</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
      </ul>
      <div className="navbar-icons">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <img src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="search icon" />
          </button>
        </form>
        <button className="auth-button" onClick={handleSignIn}>Sign In</button>
        <button className="auth-button" onClick={handleSignUp}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
