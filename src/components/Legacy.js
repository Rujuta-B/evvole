import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';

function Legacy() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <Link to="/"><img src="evvole-logo.svg" alt="EVVOLE Logo" /></Link>
          </div>
          <nav>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#category">Category Vertical</Link></li>
              <li><Link to="/legacy">Our Legacy</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/inquiry">Inquiry</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Legacy/Timeline Section */}
      <section id="legacy" className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <h2>Our Legacy</h2>
            <p>Our company's journey began with the founding of our prestigious Antique Brand of Carpets, India's most reliable name in overseas and surface solutions. After decades of manufacturing experience, Shanti Enterprise has emerged as a world-class supplier of high-quality Carpets and Verified Tiles, Quarry Stone, Natural Stone Products, and Accessories.</p>
            <p>To add to its exports range, Evvole Exims was introduced under Shivam Enterprise as a niche brand dealing only with handloom Carpets and Rugs. Commerce, Shivam Enterprise and Evvole Exims, are well established pioneers in overseas buying services-related to high-end Rugs & Carpets.</p>
       
            <img src="legacy.svg" alt="Evvole Legacy Logo" className="company-logo-svg" />
          </div>
         
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Legacy;