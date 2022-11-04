import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import img2 from "../Assets/2.png";
import "./Section.css";

function Section() {
  return (
    <>
      <div id="first">
        <div className="section">
          <section className="first-section">
            <div className="detail">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                auctor enim non suscipit auctor. Nam tempus elit vitae quam
                ornare, vel ultricies eros tempus. Cras ac arcu nec augue
                faucibus accumsan iaculis in turpis. Integer non elit sit amet
                felis tempus placerat quis et nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis tempus non quam et fringilla. Nulla sagittis
                vulputate fringilla. Cras vitae tempus tortor, vitae semper
                diam. Duis non placerat elit. Phasellus vel efficitur tellus.
                Mauris pellentesque tincidunt urna sit amet suscipit. Mauris non
                molestie nisi, posuere blandit tortor. Nulla nisi nulla,
                scelerisque vel lorem laoreet, blandit facilisis massa. Nunc
                venenatis condimentum ipsum quis rutrum.
              </p>
              <button className="more-btn">
                Know More
                <span className="arrow-right">
                  <FontAwesomeIcon icon={faCaretRight} size="1x" />
                </span>
              </button>
            </div>
          </section>
          <section className="second-section">
            <div className="image-path">
              <img src={img2} alt="user" />
            </div>
            
          </section>
        </div>
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
        </div>
      </div>
    </>
  );
}

export default Section;
