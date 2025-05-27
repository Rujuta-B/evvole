import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';

function Inquiry() {
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

      {/* Inquiry Section */}
      <section id="inquiry" className="inquiry">
        <div className="container">
          <h2>Inquiry</h2>
          <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Inquiry;