import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='bg-clr'>
        <img src="/src/assets/images/footer-wave.png" alt="" style={{width: "100%", marginBottom: "-1rem"}} />
    <footer className="footer">
      <div className="footer-container bottom-border">
        <div className="footer-column col">
          <h3 >About Us</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-curriculum">Our Curriculum</a></li>
            <li><a href="/difference">Difference</a></li>
          </ul>
        </div>
        <div className="footer-column col">
          <h3>More</h3>
          <ul>
            <li><a href="/preschool-programme">Preschool Programme</a></li>
            <li><a href="/bagless-school">Bagless School Programme</a></li>
            <li><a href="/parents-speak">Parents Speak</a></li></ul>
        </div>
        <div className="footer-column col">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Media</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Locate Us</a></li>
          </ul>
        </div>
        <div className="footer-column col">
          <h3>Franchise</h3>
          <ul>
            <li><a href="#">Start Your Own Preschool</a></li>
            <li><a href="#">Franchise Locations</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom border-top">
        <p>Copyright © 2024 Lighthouse Learning Private Limited | <a href="#">Privacy Policy</a></p>
        <div className="social-media">
        <div className="social-icons">
            <a className='fb' href="https://www.facebook.com/WisdomWorldAcademyIndore" target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
            </a>
            <a className='insta' href="https://www.instagram.com/wisdom_world_academy/" target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
            </a>
            <a className='yt' href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faYoutube} size="2x" /> */}
            </a>
        </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
