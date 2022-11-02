import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Assets/1.png';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="first-footer">
        <div className="first-part">
          <h4>
            Quick Links <FontAwesomeIcon icon={faAngleRight} />
          </h4>
          <p className="para-one">Lorem ipsum</p>
          <div className="to-align">
            <div>Level 1</div>
            <div>Level 2</div>
            <div>Level 3</div>
            <div>Enquiry</div>
          </div>
        </div>
        <div className="second-part">
          <p className="para-one">Lorem ipsum</p>
          <div className="to-align">
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="third-part">
          <p className="para-one">Lorem ipsum</p>
          <div className="to-align">
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
      </footer>
      <footer className="second-footer">
        <div className="heading">
          <h1>
            Upcoming <br /> Examinations
          </h1>
          <span className="line"></span>
        </div>
        <div className="first-time">
          <div className="time">
            <img src={img1} style={{ width: "50px", height: "50px" }} />
          </div>
          <div>
            <h4>20th October 2014 </h4>
            <p>Level 1 exam</p>
          </div>
        </div>
        <div className="second-time">
          <div className="time">
            <img src={img1} style={{ width: "50px", height: "50px" }} />
          </div>
          <div>
            <h4>Nov-Dec 2016</h4>
            <p>Level 2</p>
          </div>
        </div>
        <div className="third-time">
          <div className="time">
            <img src={img1} style={{ width: "50px", height: "50px" }} />
          </div>
          <div>
            <h4>Ongoing this year</h4>
            <p>Level 3 (Grad)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer