import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faClock} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faQuora,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faBus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import img22 from '../Assets/22.png';
import './SixthPage.css';
import Footer from '../Footer/Footer';

function SixthPage() {
  return (
    <div id="sixth">
      <div className="sixth-first">
        <div className="six-left">
          <h1>Subscribe</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <input type="email" placeholder="Enter your email address" />
          <button className="subscribe-btn">
            Subscribe Now <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

        <img className="new-img" src={img22} alt=""/>
      </div>
      <div className="sixth-second">
        <div className="first-grid">
          <h2>Contact us</h2>
          <p>
            Address: amet, consetetur sadipscing elitr, sed diam <br />
            Email id: eirmod tempor invidunt ut labore et dolore <br /> Phone
            no: 123456789
          </p>
        </div>
        <div className="second-grid">
          <h2>Follow us</h2>

          <a href="https://www.facebook.com/" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com/" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.quora.com/" className="quora social">
            <FontAwesomeIcon icon={faQuora} size="2x" />
          </a>
        </div>
        <div className="third-grid">
          <h2>Head Office</h2>
          <div className="locations">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className="locations">
            <FontAwesomeIcon icon={faClock} size="1x" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          </div>
          <div className="locations">
            <FontAwesomeIcon icon={faClock} size="1x" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          </div>
          <div className="locations">
            <FontAwesomeIcon icon={faBus} size="1x" />
            <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
          </div>
        </div> 
        
      </div>
     <Footer />
    </div>
  );
}

export default SixthPage