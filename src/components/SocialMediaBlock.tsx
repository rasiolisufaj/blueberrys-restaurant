import React from 'react';
import FbImage from "./../assets/img/socialMedia/facebook.svg";
import YahooImage from "./../assets/img/socialMedia/yahoo.svg";
import YellowPagesImage from "./../assets/img/socialMedia/yellowPages.svg";
import YelpImage from "./../assets/img/socialMedia/yelp.svg";
import PinterestImage from "./../assets/img/socialMedia/pinterest.png";
import TripAdvisorImage from "./../assets/img/socialMedia/tripadvisor.png";

export default class SocialMediaBlock extends React.Component {

  render() {

    return (
      <>
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


      </>
    )
  };
}