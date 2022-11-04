import React from "react";
import img1 from "../Assets/1.png";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./SecondPage.css";

function SecondPage() {
  return (
    <>
      <div id="second">
        <div className="second-footer">
          <div className="heading">
            <h1>
              Upcoming <br /> Examinations <br />
              <p className="regi">
                Enquire about the examination & <br />
                register for the exams
              </p>
            </h1>

            <span className="line"></span>
          </div>
          <div className="first-time">
            <div className="time">
              <img
                src={img1}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div>
              <h4>20th October 2014 </h4>
              <p>Level 1 exam</p>
            </div>
          </div>
          <div className="second-time">
            <div className="time">
              <img
                src={img1}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div>
              <h4>Nov-Dec 2016</h4>
              <p>
                Level 2 <br /> Lorem Ipsum <br /> Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="third-time">
            <div className="time">
              <img
                src={img1}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div>
              <h4>Ongoing this year</h4>
              <p>Level 3 (Grad)</p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-space">
            <Card>
              <h4 className="card-header">Lorem Ipsum</h4>
              <p className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                auctor enim non suscipit auctor. Nam tempus elit vitae quam
                ornare, vel ultricies eros tempus. Cras ac arcu nec augue
                faucibus accumsan iaculis in turpis. Integer non elit sit amet
                felis tempus placerat quis et nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis tempus non quam et fringilla.
              </p>

              <button className="card-btn">
                Know More{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="more"
                  />
                </span>
              </button>
            </Card>
          </div>
          <div className="card-space">
            <Card>
              <h4 className="card-header">Lorem Ipsum</h4>
              <p className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                auctor enim non suscipit auctor. Nam tempus elit vitae quam
                ornare, vel ultricies eros tempus. Cras ac arcu nec augue
                faucibus accumsan iaculis in turpis. Integer non elit sit amet
                felis tempus placerat quis et nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis tempus non quam et fringilla.
              </p>

              <button className="card-btn">
                Know More
                <span className="btn-icon">
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="more"
                  />
                </span>
              </button>
            </Card>
          </div>
          <div className="card-space">
            <Card>
              <h4 className="card-header">Lorem Ipsum</h4>
              <p className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                auctor enim non suscipit auctor. Nam tempus elit vitae quam
                ornare, vel ultricies eros tempus. Cras ac arcu nec augue
                faucibus accumsan iaculis in turpis. Integer non elit sit amet
                felis tempus placerat quis et nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis tempus non quam et fringilla.
              </p>

              <button className="card-btn">
                Know More{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="more"
                  />
                </span>
              </button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
