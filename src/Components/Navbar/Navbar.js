import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="first-header">
        <ul>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Lorem Ipsum</a>
          </li>
          <li>
            <a>Lorem Ipsum</a>
          </li>
          <li>
            <a>Lorem Ipsum</a>
          </li>
          <li>
            <a>Newsroom</a>
          </li>
          <li>
            <a>Press Release</a>
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
            <span className='search'><FontAwesomeIcon icon={faSearch}  size="1x" /> </span>
          <button className="enrolment-btn">Enrolment</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar