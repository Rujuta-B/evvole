import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';

function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: null });
    
    // You can use a service like EmailJS, FormSpree, or your own backend
    // Here's a basic fetch request as an example
    fetch('https://formspree.io/f/sales@evvole.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      setFormStatus({ submitted: false, error: error.message });
    });
  };

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
          
          {formStatus.submitted && !formStatus.error && (
            <div className="success-message">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}
          
          {formStatus.error && (
            <div className="error-message">
              Sorry, there was an error submitting your form. Please try again or contact us directly.
            </div>
          )}
          
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                required
              ></textarea>
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