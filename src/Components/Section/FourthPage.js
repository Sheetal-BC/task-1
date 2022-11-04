import React from "react";
import SecondCard from "../Card/SecondCard";

import img5 from "../Assets/5.png";
import img6 from "../Assets/6.png";
import img7 from "../Assets/7.png";
import "./FourthPage.css";

function FourthPage() {
  return (
    <div id="fourth" className="card--two">
      <SecondCard>
        <div className="card-img-head">
          <img src={img5} alt=""/>
        </div>
        <div className="card-img-body">
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </h5>
          <p>Know More</p>
          <div className="to--float">
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </SecondCard>
      <SecondCard>
        <div className="card-img-head">
          <img src={img7}  alt=""/>
        </div>
        <div className="card-img-body">
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </h5>
          <p>Know More</p>
          <div className="to--float">
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </SecondCard>
      <SecondCard>
        {" "}
        <div className="card-img-head">
          <img src={img6} alt=""/>
        </div>
        <div className="card-img-body">
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </h5>
          <p>Know More</p>
          <div className="to--float">
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </SecondCard>
    </div>
  );
}

export default FourthPage;
