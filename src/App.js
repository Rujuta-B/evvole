import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Legacy from './components/Legacy';
import Inquiry from './components/Inquiry';
import Footer from './components/Footer';

// ScrollToTop component for page navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's no hash in the URL, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there's a hash, scroll to that element after a short delay
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  // Simple scroll function without changing URL
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <header className="header">
              <div className="nav-container">
                <div className="logo">
                  <Link to="/"><img src="evvole-logo.svg" alt="EVVOLE Logo" /></Link>
                </div>
                <nav>
                  <ul className="nav-menu">
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
                    <li><a href="#category" onClick={(e) => { e.preventDefault(); scrollToSection('category'); }}>Category Vertical</a></li>
                    <li><Link to="/legacy">Our Legacy</Link></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                    <li><Link to="/inquiry">Inquiry</Link></li>
                  </ul>
                </nav>
              </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Luxury. Heritage.<br />Handcrafted<br />Excellence.</h1>
                  <div className="hero-buttons">
                    <a 
                      href="https://workdrive.zohopublic.in/folder/stnx6e017550c06734b8bb6ee4fbacadfbc36?layout=list" 
                      className="cta-button" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Explore Our Collection
                    </a>
                    <a href="#contact" className="cta-button secondary">Get in Touch</a>
                  </div>
                </div>
                <div className="hero-image"></div>
              </div>
              <div className="quality-badges">
                <div className="badge">Quality</div>
                <div className="badge">Sustainability</div>
                <div className="badge">Craftsmanship</div>
              </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="about">
              <div className="container">
                <div className="about-content">
                  <div className="about-text">
                    <h2>About Us</h2>
                    <p>Evvole Exims is where timeless craftsmanship meets modern design. We strive through quality textiles, heritage artistry, and meticulous attention to detail to provide the highest-grade textiles to the international market.</p>
                    <p>With a strong focus on luxury, sustainability, and authenticity, our collections embody heritage, artistry, and outstanding long-term quality. We are committed to preserve the unique identity of Indian craftsmanship while offering creative solutions that satisfy modern textile masterpieces.</p>
                  </div>
                  <div className="about-image"></div>
                </div>
              </div>
            </section>

            {/* Category Vertical Section */}
            <section id="category" className="category">
              <div className="container">
                <h2>Category Vertical</h2>
                <div className="category-grid">
                  <div className="category-item">
                    <img src="handloom.svg" alt="HandLoom" className="category-item-image" />
                    <h3>HandLoom</h3>
                    <p>Handloom carpets are crafted using manually operated looms, without the use of any electrical or mechanical devices. They are made by skilled artisans who have inherited the art through generations.</p>
                  </div>
                  <div className="category-item">
                    <img src="tufted.svg" alt="Hand Tufted" className="category-item-image" />
                    <h3>Hand Tufted</h3>
                    <p>Hand-tufted rugs are created by pushing yarn through a pre-stretched canvas using a hand tool. This process allows the artisan to control every aspect of the rug's design and craftsmanship.</p>
                  </div>
                  <div className="category-item">
                    <img src="knotted.svg" alt="Hand Knotted" className="category-item-image" />
                    <h3>Hand Knotted</h3>
                    <p>Hand-knotted rugs are the epitome of craftsmanship, where each knot is hand-tied individually. These rugs can take months or even years to complete, resulting in unparalleled quality and durability.</p>
                  </div>
                  <div className="category-item">
                    <img src="woven.svg" alt="Hand Woven" className="category-item-image" />
                    <h3>Hand Woven</h3>
                    <p>Hand-woven rugs utilize traditional techniques passed down through generations. These floor coverings are crafted using time-honored methods that create unique patterns and textures with exceptional attention to detail.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
              <div className="container">
                <h2>Services</h2>
                <div className="services-content">
                  <p>At Evvole Exims, we specialize in the export of high-quality handwoven carpets and rugs using traditional techniques such as handloom, hand-tufted, hand-knotted, and hand-woven carpets using traditional techniques and contemporary design trends with attention to detail.</p>
                  <p>Our services encompass transparency, timely delivery, and uncompromised excellence, including processing, production, marketing and exporter designed—US companies, premium hotels, residences, and interior designers who seek partner for premium Indian rugs that bring authenticity and elegance to international markets.</p>
                  <img src="services.png" alt="Our Services" className="services-image" />
                </div>
              </div>
            </section>

            {/* Contact Section */}
            {/* <section id="contact" className="contact">
              <div className="container">
                <div className="contact-content">
                  <div>
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                      <p>+91 87500 066088</p>
                      <p>sales@evvole.com</p>
                      <p>India | UK | USA</p>
                      <p>84 NATIONAL HIGHWAY LABDUMPURA RAJASTHAN BHARTAR 341 304</p>
                    </div>
                  </div>
                  <div className="qr-code"></div>
                </div>
              </div>
            </section> */}

            <Footer />
          </>
        } />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </Router>
  );
}

export default App;
