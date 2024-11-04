// components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className='bg-black text-gray-200 w-full'>
      <footer className="footer p-10 bg-black max-w-6xl mx-auto flex justify-between items-start">
        <aside className="text-center">
          <h1 className="nav-logo px-5 text-4xl font-bold text-yellow-400">Eventify</h1>
          <div className="social-icons flex justify-center mt-2 space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="xl" className="text-gray-200 hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="xl" className="text-gray-200 hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="xl" className="text-gray-200 hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-gray-200 hover:text-yellow-400 transition duration-300" />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-yellow-400">Services</h6>
          <p className="link link-hover">Event Planning</p>
          <p className="link link-hover">Venue Management</p>
          <p className="link link-hover">Catering Services</p>
          <p className="link link-hover">Entertainment Booking</p>
        </nav>
        <nav>
          <h6 className="footer-title text-yellow-400">Company</h6>
          <p className="link link-hover">About Us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">FAQ</p>
          <p className="link link-hover">Blog</p>
        </nav>
        <nav>
          <h6 className="footer-title text-yellow-400">Legal</h6>
          <p className="link link-hover">Terms of Service</p>
          <p className="link link-hover">Privacy Policy</p>
          <p className="link link-hover">Refund Policy</p>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-black text-gray-400 border-t border-gray-800 shadow-lg flex justify-center">
        <aside>
          <p>Copyright © 2024 - All rights reserved by Eventify</p>
        </aside>
      </div>
    </div>
  );
}

export default Footer;
