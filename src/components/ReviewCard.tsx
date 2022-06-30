import React from 'react';
import Review from "../types/reviews.type";
import ReviewLogoImage from "./../assets/img/reviews/reviewLogo.png";

interface Props {
  reviewCard: Review
}

export default class ReviewCard extends React.Component <Props> {

  async componentDidMount() {
    const {reviewCard} = this.props;
    console.log("reviewCard", reviewCard);
  }

  render() {
    const {reviewCard} = this.props;

    let stars = new Array<number>(reviewCard.rank);
    for (let i = 0; i < reviewCard.rank; i++) {
      stars.push(i);
    }

    return (
      <>
        <div className="reviewCard review-1">
          <div className="reviewLogo">
            <img src={ReviewLogoImage} alt=""/>
          </div>
          <div className="reviewBy"> {reviewCard.name}</div>
          <div className="review-stars-block">
            {
              stars.map((id) => (
                <i className="review-star" key={id}>★</i>
              ))
            }
          </div>
          <div className="reviewDescription">
            {reviewCard.comment}
          </div>
          <div className="reviewDate">{reviewCard.date?.getDate()}</div>
        </div>
      </>
    )
  };
}