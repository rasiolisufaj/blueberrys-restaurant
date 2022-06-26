import React from "react";
import AboutUsImage from "../assets/img/aboutUsPhoto.jpg";
import ArrowWhiteImage from "../assets/img/arrowWhite.svg";
import {Link} from "react-router-dom";

function AboutUs() {

  return (
    <section id="about">
      <div data-aos="fade-up">
        <header className="aboutHeader">
          <h2 className="aboutHeading">ABOUT US</h2>
          <div className="valueAndTeamButtons">
            <Link to={"/values"} className="aboutValue nav-link">
              <div className="ValueButton">Values</div>
              <img src={ArrowWhiteImage} alt=""/>
            </Link>
            <Link to={"/team"} className="aboutTeam nav-link">
              <div className="TeamButton">Team</div>
              <img src={ArrowWhiteImage} alt=""/>
            </Link>
          </div>
        </header>

        <div className="aboutUsBackgroundImage">
          <img src={AboutUsImage} alt=""/>
        </div>
        <div className="positionRelativeForSmallWIdth">
          <div className="aboutUsDescription" id="aboutUsDescription">
            <p className="aboutUsPara">
              <div className="aboutUsFirstPara">
                Blueberry’s Grill was created from what was once a modest small
                restaurant serving classic breakfast dishes in Sunny Side Up
                Grill, Little River – a small town in South Carolina.
              </div>
              <span className="sty">
                        With some help, we became what you see today. Blueberry’s Grill is a Mediterranean-themed American casual dining
              </span>
              <span id="dots"></span>
              <span id="more">
                        <div id="aboutUsOpenedPara">
                            restaurant chain, serving American cuisine, based in NC and SC.
                            We pride ourselves on our hospitality and to make everyone feel
                            that warm welcome when they walk through the doors.
                        </div>

                        <div className="aboutUsFirstPara">
                          Serving up an elevated food experience with delicious and unique dishes for
                          breakfast, brunch and lunch that everyone can enjoy together. We
                          are known for our modern interpretation of classic dishes and
                          its consistency on only using high-quality fresh ingredients.
                        </div>
                        <div className="aboutUsFirstPara">
                          Whether you are a picky eater or adventurous food lover, you
                          will find something to fill your belly at Blueberry’s Grill.
                        </div>
                        <div className="aboutUsFirstPara">
                          Come on a journey with us...
                        </div>
                    </span>
            </p>
            <div id="readMoreButton" className="aboutUsFirstPara">
              <span id="readMoreText">Read more</span>
              <i aria-hidden="true" className="fas fa-chevron-down" id="aboutUsArrowDown"></i>
              <i aria-hidden="true" className="fas fa-chevron-up" id="aboutUsArrowUp"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
