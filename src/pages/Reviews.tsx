import React from "react";

import ReviewLogoImage from "./../assets/img/reviews/reviewLogo.png";
import {Link} from "react-router-dom";
import User from "../types/user.type";
import AuthService from "../services/auth.service";
import ReviewsService from "../services/reviews.service";
import Review from "../types/reviews.type";
import ReviewCard from "../components/ReviewCard";
import SocialMediaBlock from "../components/SocialMediaBlock";
import SocialMediaSmallBlock from "../components/SocialMediaSmallBlock";

interface Props {
  openLoginDialog: () => void
}

interface State {
  loggedUser?: User,
  reviewItems: Review[]
}

export default class Reviews extends React.Component<Props, State> {

  state: State = {
    loggedUser: undefined,
    reviewItems: []
  }

  async componentDidMount() {
    const user = AuthService.getLoggedUser();
    console.log("Reviews loggedUser : ", user);

    const reviewItems: Review[] = await ReviewsService.getAll()
    console.debug("reviewItems", reviewItems);

    this.setState({loggedUser: user, reviewItems})
  }

  addReview() {
    console.debug("Add review in DB");
  }

  render() {
    const {openLoginDialog} = this.props;
    const {loggedUser, reviewItems} = this.state;

    return (
      <section id="reviews">
        <div data-aos="fade-up">
          <div className="reviewsContent">
            <div className="reviewsHeader">
              <div className="reviewsTitle">
                Reviews
              </div>

              <SocialMediaBlock/>
            </div>
          </div>

          <div className="reviewsCarousel">
            {
              reviewItems.map((review) => (
                <ReviewCard reviewCard={review} key={review.id}/>
              ))
            }
          </div>

          <div id="myCarousel" className="carousel slide reviewsCarousel-small" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              {
                reviewItems.map((review) => (
                  <ReviewCard reviewCard={review} key={"m" + review.id}/>
                ))
              }
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
              <input required/>
              <Link to={"/"} className="mainButton loginToReviewButton" onClick={this.addReview}>Add review</Link>
            </div>
          </div>
        )}

        <SocialMediaSmallBlock/>

      </section>
    )
  };
}