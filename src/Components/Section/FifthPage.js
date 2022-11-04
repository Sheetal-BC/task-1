import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faAngleRight } from '@fortawesome/free-solid-svg-icons';
import img11 from '../Assets/11.png';
import img12 from "../Assets/12.png";
import img13 from "../Assets/13.png";
import img14 from "../Assets/14.png";
import img15 from "../Assets/15.png";



import './FifthPage.css';


function FifthPage() {
  return (
    <div id="fifth">
      <div className="fifth-one">
        <h1>Lorem ipsum</h1>
        <h1>Lorem ipsum</h1>
        <p>
          View all{" "}
          <span>
            <FontAwesomeIcon className="fifth-one-icon" icon={faAngleRight} />
          </span>
        </p>
      </div>
      <div className="main">
        <div className="first-main">
          <div className="first-main-image">
            <img src={img11} className="first-image" alt="" />
            <div className="first-main-cont">
              <h4>Quote of the month</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </div>
          <div className="second-main-image">
            <img src={img12} className="first-image" alt="" />
            <div className="first-main-cont">
              <h4>Quote of the month</h4>
              <img src={img14} className="img1" alt="" />
              <img src={img15} className="img2" alt="" />
            </div>
          </div>
          <div className="third-main-image">
            <img src={img13} className="first-image" alt="" />
            <div className="first-main-cont">
              <h4>Quote of the month</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
        <div className="second-main">
          <div className="second-main-first">
            <div className="blue-box">
              <div className="blue-box1">
                <div className="dot-align">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <h2>
                  19 <br />
                  Mar{" "}
                </h2>
              </div>
              <div className="darkblue-box">2021</div>
            </div>
            <div className="second-item">
              <h4>Lorem ipsum</h4>
              <p className='second-line'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco..
              </p>
              <p className='time'>07:00 - 10:00 (March 20, 2021)</p>
              <a className='link' href="#">Register Now</a>
            </div>
          </div>
          <div className="second-main-second">
            <div className="blue-box">
              <div className="blue-box1">
                <div className="dot-align">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <h2>
                  19 <br />
                  Mar{" "}
                </h2>
              </div>
              <div className="darkblue-box">2021</div>
            </div>
            
              <div className="second-item">
                <h4>Lorem ipsum</h4>
                <p className='second-line'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco..
                </p>
                <p className='time'>07:00 - 10:00 (March 20, 2021)</p>
                <a className="link" href="#">Register Now</a>
              </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
