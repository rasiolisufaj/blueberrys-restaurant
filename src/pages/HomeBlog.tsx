import React from "react";
import BlogImage1 from "../assets/img/blog/blog1.jpg";
import BlogImage2 from "../assets/img/blog/blog2.jpg";
import BlogImage3 from "../assets/img/blog/blog3.jpg";
import ArrowBlueImage from "../assets/img/arrowBlue.svg";
import {FaChevronDown} from 'react-icons/fa';
import {Link} from "react-router-dom";

function HomeBlog() {

  return (
    <section id="blogHome">
      <div data-aos="fade-up">
        <div className="blogHeader">
          <Link to={"/blog"}>
            <h2>Blog</h2>
            <img src={ArrowBlueImage} alt=""/>
          </Link>
        </div>

        <div className="blogContent">
          <div className="blogCard">
            <img src={BlogImage1} alt=""/>
            <div className="blogCardContent">
              <h2>BLUEBERRY HUSHPUPPIES</h2>
              <div className="blogCardParagraph">
                Hushpuppies are a classic Southern delicacy of an appetizer. They are deep-fried savory cornmeal-batter
                balls that can be served with breakfast, lunch or dinner. We put a nice spin on the classic hushpuppies
                and add fresh blueberries to the mix. A great way to start the day!
              </div>
              <div className="blogCardReadMore">
                <Link to={"/blog"}>
                  <span>Read more</span>
                  <FaChevronDown onClick={undefined}/>
                </Link>
              </div>
            </div>
          </div>

          <div className="blogCard">
            <img src={BlogImage2} width="445" height="284" alt=""/>
            <div className="blogCardContent">
              <h2>BLOODY MARY & CHEESY SHRIMP & GRITS</h2>
              <div className="blogCardParagraph">
                Shrimp & grits is a popular dish in the low country. For a fun brunch spin, we made these
                shrimp & grits with bloody Mary mix! Bloody Mary Shrimp & Grits will make such a fun brunch
                dish to serve up next to your brunch bloody Mary bar every summer.
              </div>
              <div className="blogCardReadMore">
                <Link to={"/blog"}>
                  <span>Read more</span>
                  <FaChevronDown onClick={undefined}/>
                </Link>
              </div>
            </div>
          </div>

          <div className="blogCard blogCard-3">
            <img src={BlogImage3} width="445" height="284" alt=""/>
            <div className="blogCardContent">
              <h2>BLUEBERRY FRENCH TOAST</h2>
              <div className="blogCardParagraph">
                Absorb the greatness of this dish because your French toasts will forever be transformed in the best way possible.
                This is a French toast game changer. You’ll never want ordinary French toast ever again.
              </div>
              <div className="blogCardReadMore">
                <a href="/#">
                  <span>Read more</span>
                  <FaChevronDown onClick={undefined}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
