import React from 'react';
import './styles/Footer.css'
import { FaFacebookF,FaTwitter,FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="row">
          <div className="footer-col">
            
            <img src={logo} alt='logo' />
            {/* <h4>company</h4> */}
            <ul>
              <li><a href="#about" >about us</a></li>
              <li><a href="#products" >our products</a></li>
              <li><a href="#tech" >technologies</a></li>
              <li><a href="#blog" >our blogs</a></li>
              <li><a href="/" >privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="/" >FAQ</a></li>
              <li><a href="#contact" >Contact Us</a></li>

            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Locations</h4>
            <ul>
              <li><a href="/" >USA Office
69, Surrey Drive, Apt. 203, Glen Ellyn, IL 60137. US</a></li>
              <li><a href="/" >Lahore Office
15th Floor,Arfa Software Technology Park, 346-B, Ferozepur Road, Lahore</a></li>
              <li><a href="/" >Karachi Office
Office # 608, Parsa Tower, Shahra-e-Faisal Karachi, Pakistan.</a></li>
              <li><a href="/" >Dubai Office
308, Tiffany Tower, Cluster W, JLT, Dubai, UAE.</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/TheGameStormStudios" ><FaFacebookF/></a>
              <a href="https://twitter.com/gamestormstudio" ><FaTwitter/></a>
              <a href="https://www.youtube.com/channel/UCWLBUZtZnLSuUVcNI3Ok1dQ" ><FaYoutube/></a>
              <a href="https://www.linkedin.com/company/game-storm-studios" ><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
