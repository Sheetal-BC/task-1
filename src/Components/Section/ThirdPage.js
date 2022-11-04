import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ThirdPage.css';

function ThirdPage() {
  return (
    <div id="third">
      <div className="third--one">
        <div className="third--first">
          <h5>Lorem ipsum</h5>
          <h1>123+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat
          </p>
        </div>
        <div className="third--first">
          <h5>Lorem ipsum</h5>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </div>
        <div className="third--first">
          <h5>Lorem ipsum</h5>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </div>
        <div className="third--first">
          <h5>Lorem ipsum</h5>
          <h1>123</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>
      </div>
      <div className="tag--img">
        <div className="first-text">
          <p>January, 2011</p>
          <h4>
            Lorem ipsum <br />
            dolor sit amet
          </h4>
        </div>
        <div className="first-text">
          <p>April 31, 2015</p>
          <h4>
            Lorem ipsum <br /> dolor sit amet
          </h4>
        </div>
        <div className="first-text">
          <p>December 21, 2010</p>
          <h4>
            Lorem ipsum <br />
            dolor sit amet
          </h4>
        </div>
        <div className="first-text">
          <button className="left-arw">
            <FontAwesomeIcon className="arw-icon" icon={faAngleLeft} />
          </button>
          <button className="left-arw">
            <FontAwesomeIcon className="arw-icon" icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage