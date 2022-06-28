import React from "react";

import ReviewLogoImage from "./../assets/img/reviews/reviewLogo.png";
import FbImage from "./../assets/img/socialMedia/facebook.svg";
import YahooImage from "./../assets/img/socialMedia/yahoo.svg";
import YellowPagesImage from "./../assets/img/socialMedia/yellowPages.svg";
import YelpImage from "./../assets/img/socialMedia/yelp.svg";
import PinterestImage from "./../assets/img/socialMedia/pinterest.png";
import TripAdvisorImage from "./../assets/img/socialMedia/tripadvisor.png";
import {Link} from "react-router-dom";
import User from "../types/user.type";
import AuthService from "../services/auth.service";

interface Props {
  openLoginDialog: () => void
}

interface State {
  loggedUser?: User
}

export default class Reviews extends React.Component<Props> {

  state: State = {
    loggedUser: undefined,
  }

  async componentDidMount() {
    const user = AuthService.getLoggedUser();
    console.log("Reviews loggedUser : ", user);
    this.setState({loggedUser: user})
  }

  addReview() {
    console.debug("Add review in DB");
  }

  render() {
    const {openLoginDialog} = this.props;
    const {loggedUser} = this.state;

    return (
      <section id="reviews">
        <div data-aos="fade-up">
          <div className="reviewsContent">
            <div className="reviewsHeader">
              <div className="reviewsTitle">
                Reviews
              </div>

              <div className="d-flex align-items-center reviewsSocialMediaIcons">
                <a href="https://www.facebook.com/blueberrysgrill/" target="_blank" rel="noopener noreferrer">
                  <img src={FbImage} alt=""/>
                </a>
                <a href="https://local.yahoo.com/info-204802573-blueberry-s-grill-myrtle-beach" target="_blank" rel="noopener noreferrer">
                  <img src={YahooImage} alt=""/>
                </a>
                <a href="https://www.yellowpages.com/myrtle-beach-sc/mip/blueberrys-grill-531519250" target="_blank" rel="noopener noreferrer">
                  <img src={YellowPagesImage} alt=""/>
                </a>
                <a href="https://www.yelp.com/biz/blueberrys-grill-myrtle-beach-2" target="_blank" rel="noopener noreferrer">
                  <img src={YelpImage} alt=""/>
                </a>
                <a href="https://pin.it/3RItKJx" target="_blank" rel="noopener noreferrer">
                  <img src={PinterestImage} alt=""/>
                </a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g54359-d12162017-Reviews-Blueberry_s_Grill-Myrtle_Beach_South_C" target="_blank" rel="noopener noreferrer">
                  <img src={TripAdvisorImage} alt=""/>
                </a>
              </div>
            </div>
          </div>

          <div className="reviewsCarousel">
            <div className="reviewCard review-1">
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

            <div className="reviewCard review-2">
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

            <div className="reviewCard review-3">
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
                <div className="reviewCard review-1">
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
                <div className="reviewCard review-2">
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
                <div className="reviewCard review-3">
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
                <div className="reviewCard review-4">
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

        {!loggedUser && (
          <div className="loginToReviewSection">
            <div className="loginToReviewDiv">
              <img src={ReviewLogoImage} alt=""/>
              <span>Login to Add Review</span>
            </div>
            <Link to={"/"} className="mainButton loginToReviewButton" onClick={openLoginDialog}>Login</Link>
          </div>
        )}

        {loggedUser && (
          <div className="addReviewSection">
            <div className="loginToReviewDiv">
              <img src={ReviewLogoImage} alt=""/>
              <span>Insert review</span>
              <input  required/>
              <Link to={"/"} className="mainButton loginToReviewButton" onClick={this.addReview}>Add review</Link>
            </div>
          </div>
        )}

        <div className="reviewsSocialMediaIcons-small">
          <div>
            <a href="https://www.facebook.com/blueberrysgrill/">
              <img src={FbImage} alt=""/>
            </a>
          </div>
          <div>
            <a href="https://local.yahoo.com/info-204802573-blueberry-s-grill-myrtle-beach">
              <img src={YahooImage} alt=""/>
            </a>
          </div>
          <div>
            <a href="https://www.yellowpages.com/myrtle-beach-sc/mip/blueberrys-grill-531519250">
              <img src={YellowPagesImage} alt=""/>
            </a>
          </div>
          <div>
            <a href="https://www.yelp.com/biz/blueberrys-grill-myrtle-beach-2">
              <img src={YelpImage} alt=""/>
            </a>
          </div>
        </div>
      </section>
    )
  };
}