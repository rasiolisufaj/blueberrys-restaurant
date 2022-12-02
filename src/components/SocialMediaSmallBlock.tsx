import React from 'react';
import FbImage from "./../assets/img/socialMedia/facebook.svg";
import YahooImage from "./../assets/img/socialMedia/yahoo.svg";
import YellowPagesImage from "./../assets/img/socialMedia/yellowPages.svg";
import YelpImage from "./../assets/img/socialMedia/yelp.svg";

export default class SocialMediaSmallBlock extends React.Component {

  render() {

    return (
      <div className="reviewsSocialMediaIcons-sm">
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
    )
  };
}