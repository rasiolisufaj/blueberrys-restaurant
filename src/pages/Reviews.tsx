import React from "react";

import ReviewLogoImage from "./../assets/img/reviews/reviewLogo.png";
import FbImage from "./../assets/img/socialMedia/facebook.svg";
import YahooImage from "./../assets/img/socialMedia/yahoo.svg";
import YellowPagesImage from "./../assets/img/socialMedia/yellowPages.svg";
import YelpImage from "./../assets/img/socialMedia/yelp.svg";
import PinterestImage from "./../assets/img/socialMedia/pinterest.png";
import TripAdvisorImage from "./../assets/img/socialMedia/tripadvisor.png";


function Reviews() {

  return (
    <section id="reviews">
      <div data-aos="fade-up">
        <header className="reviewsHeader-small">
          <h2>Reviews</h2>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item reviewsTitle">
                  Reviews
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center reviewsSocialMediaIcons">
              <a href="https://www.facebook.com/blueberrysgrill/" target="_blank">
                <img src={FbImage}/>
              </a>
              <a href="https://local.yahoo.com/info-204802573-blueberry-s-grill-myrtle-beach" target="_blank">
                <img src={YahooImage}/>
              </a>
              <a href="https://www.yellowpages.com/myrtle-beach-sc/mip/blueberrys-grill-531519250" target="_blank">
                <img src={YellowPagesImage}/>
              </a>
              <a href="https://www.yelp.com/biz/blueberrys-grill-myrtle-beach-2" target="_blank">
                <img src={YelpImage}/>
              </a>
              <a href="https://pin.it/3RItKJx" target="_blank">
                <img src={PinterestImage}/>
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g54359-d12162017-Reviews-Blueberry_s_Grill-Myrtle_Beach_South_C" target="_blank">
                <img src={TripAdvisorImage}/>
              </a>
            </div>
          </div>
        </nav>

        <div className="reviewsCarousel">
          <div className="review review-1">
            <div className="reviewLogo">
              <img src={ReviewLogoImage} alt=""/>
            </div>
            <div className="reviewBy">Michaela M.</div>
            <div className="review-stars-block">
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
            </div>
            <div className="reviewDescription">
              Perfect for brunch! They have something like 6-7 different
              kinds of mimosas. Not to mention their Blast French Toast is sooo good!!
              Definitely a must if you are in the area!
            </div>
            <div className="reviewDate">31/08/2021</div>
          </div>

          <div className="review review-2">
            <div className="reviewLogo">
              <img src={ReviewLogoImage} alt=""/>
            </div>
            <div className="reviewBy">Lauren M.</div>
            <div className="review-stars-block">
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
            </div>
            <div className="reviewDescription">
              I went here for my birthday brunch and it was fantastic!!!
              food was soo delicious that ididn't mind the wait!
            </div>
            <div className="reviewDate">25/09/2021</div>
          </div>

          <div className="review review-3">
            <div className="reviewLogo">
              <img src={ReviewLogoImage} alt=""/>
            </div>
            <div className="reviewBy">Dejah D.</div>
            <div className="review-stars-block">
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
              <i className="review-star">★</i>
            </div>
            <div className="reviewDescription">
              Stopped in at Blueberry Grill my first day back in town and to my expectation, I am never disappointed!
              The mahimahi tacos were to die for and the mimosa are always a hit- This place is a must try!
            </div>
            <div className="reviewDate">10/10/2021</div>
          </div>
        </div>

        <div id="myCarousel" className="carousel slide reviewsCarousel-small" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <div className="review review-1">
                <div className="reviewLogo">
                  <img src={ReviewLogoImage} alt=""/>
                </div>
                <div className="reviewBy">Michaela M.</div>
                <div className="review-stars-block">
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                </div>
                <div className="reviewDescription">
                  Perfect for brunch! They have something like 6-7 different kinds of mimosas.
                  Not to mention their Blast French Toast is sooo good!! Definitely a must if you are in the area!
                </div>
                <div className="reviewDate">31/08/2021</div>
              </div>
            </div>

            <div className="item">
              <div className="review review-2">
                <div className="reviewLogo">
                  <img src={ReviewLogoImage} alt=""/>
                </div>
                <div className="reviewBy">Lauren M.</div>
                <div className="review-stars-block">
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                </div>
                <div className="reviewDescription">
                  I went here for my birthday brunch and it was fantastic!!!
                  food was soo delicious that ididn't mind the wait!
                </div>
                <div className="reviewDate">25/09/2021</div>
              </div>
            </div>

            <div className="item">
              <div className="review review-3">
                <div className="reviewLogo">
                  <img src={ReviewLogoImage} alt=""/>
                </div>
                <div className="reviewBy">Dejah D.</div>
                <div className="review-stars-block">
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                </div>
                <div className="reviewDescription">
                  Stopped in at Blueberry Grill my first day back in town and to my expectation, I am never disappointed!
                  The mahimahi tacos were to die for and the mimosa are always a hit- This place is a must try!
                </div>
                <div className="reviewDate">10/10/2021</div>
              </div>
            </div>

            <div className="item">
              <div className="review review-4">
                <div className="reviewLogo">
                  <img src={ReviewLogoImage} alt=""/>
                </div>
                <div className="reviewBy">Ermal A.</div>
                <div className="review-stars-block">
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                  <i className="review-star">★</i>
                </div>
                <div className="reviewDescription">
                  Great Service!
                </div>
                <div className="reviewDate">26/06/2022</div>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="reviewsAddNewBlock">
        <div className="loginToAddReview">
          <img src={ReviewLogoImage} alt=""/>
          <span className="TextLoginToAddReview">Login to Add Review</span>
        </div>
        <div className="reviewsLoginButton">
          <a href="#">Login</a>
        </div>
      </div>

      <div className="reviewsSocialMediaIcons-small">
        <div>
          <a href="https://www.facebook.com/blueberrysgrill/" target="_blank">
            <img src={FbImage}/>
          </a>
        </div>
        <div>
          <a href="https://local.yahoo.com/info-204802573-blueberry-s-grill-myrtle-beach" target="_blank">
            <img src={YahooImage}/>
          </a>
        </div>
        <div>
          <a href="https://www.yellowpages.com/myrtle-beach-sc/mip/blueberrys-grill-531519250" target="_blank">
            <img src={YellowPagesImage}/>
          </a>
        </div>
        <div>
          <a href="https://www.yelp.com/biz/blueberrys-grill-myrtle-beach-2" target="_blank">
            <img src={YelpImage}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
