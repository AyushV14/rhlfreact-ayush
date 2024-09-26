import logo from './logo.png'; // Import image in React
import React from 'react';
import './cleenhearts.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Real Happiness of Life Foundation" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programmes">Programmes</a></li>
            <li><a href="/clinics">Our Clinics</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/media">Media</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="donate-button">
          <a href="/donate" className="donate">Donate Now</a>
        </div>
      </header>
      
      <footer className="footer">
        <p>&copy; 2024 Real Happiness of Life Foundation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
