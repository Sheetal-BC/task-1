import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import Section from '../Section/Section';
import './Navbar.css';
import SecondPage from '../Section/SecondPage';
import ThirdPage from '../Section/ThirdPage';
import FourthPage from '../Section/FourthPage';
import FifthPage from '../Section/FifthPage';
import SixthPage from '../Section/SixthPage';
import Footer from '../Footer/Footer';

function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="first-header">
          <ul>
            <li>
              <a href="#first">About us</a>
            </li>
            <li>
              <a href="#second">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#third">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#fourth">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#fifth">Newsroom</a>
            </li>
            <li>
              <a href="#sixth">Press Release</a>
            </li>
            <li>
              <a>Lorem Ipsum</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </nav>
        <nav className="second-header">
          <div>
            <h1>LOGO</h1>
          </div>
          <div className="svg-icon">
            <button className="dropdown-btn">
              Qualifications
              <FontAwesomeIcon
                icon={faAngleDown}
                className="svg-icon"
                size="1x"
              />
            </button>
            <button className="dropdown-btn">
              Organizations
              <FontAwesomeIcon
                icon={faAngleDown}
                className="svg-icon"
                size="1x"
              />
            </button>
            <button className="dropdown-btn">
              Research & Analysis
              <FontAwesomeIcon
                icon={faAngleDown}
                className="svg-icon"
                size="1x"
              />
            </button>
            <button className="dropdown-btn">
              Lorem ipsum
              <FontAwesomeIcon
                icon={faAngleDown}
                className="svg-icon"
                size="1x"
              />
            </button>
            <button className="dropdown-btn">
              Lorem ipsum
              <FontAwesomeIcon
                icon={faAngleDown}
                className="svg-icon"
                size="1x"
              />
            </button>
            <span className="search">
              <FontAwesomeIcon icon={faSearch} size="1x" />{" "}
            </span>
            <button className="enrolment-btn">Enrolment</button>
          </div>
        </nav>
      </header>

      <div>
        <Section />
      </div>
      <div>
        <SecondPage />
      </div>
      <div className="third">
        <ThirdPage />
      </div>
      <div>
        <FourthPage />
      </div>
      <div>
        <FifthPage />
      </div>
      <div>
        <SixthPage />
        
      </div>
      
    </>
  );
}

export default Navbar