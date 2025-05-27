import React from 'react';
import '../App.css';
import { ReactComponent as PhoneIcon } from '../assets/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/email-icon.svg';
import { ReactComponent as LocationIcon } from '../assets/location-icon.svg';
import { ReactComponent as Insta } from '../assets/insta.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';


function Footer() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-details">
            <h2>Contact Us</h2>
            <div className="contact-info">
            <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <p><a href="tel:+918153033358" className="contact-link">+91 8153033358</a></p>
              </div>
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <p>sales@evvole.com</p>
              </div>
              <div className="contact-item">
                <LocationIcon className="contact-icon" />
                <p>India | UK | USA</p>
              </div>

              <div className="contact-item">
                <p>8A NATIONAL HIGHWAY LAKHDHIRPUR ROAD, MORBI 363642 (Guj.) INDIA</p>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <img src="qrcode.jpeg" alt="QR Code Scanner" className="qr-code" />
            
            <div className="social-media">
              <h3>Follow Us:</h3>
               <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61571839168811" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Facebook className="contact-icon" />
                </a>
                <a href="https://x.com/Evvole_Exims/media" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Twitter className="contact-icon" />
                </a>
                <a href="https://www.instagram.com/evvole_exims/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Insta className="contact-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;