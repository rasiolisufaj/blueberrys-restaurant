import React from "react";

import AppStoreImage from "./../assets/img/app_store.svg";
import AndroidImage from "./../assets/img/android.svg";
import LocationImage from "./../assets/img/locationIcon.svg";
import PhoneImage from "./../assets/img/phone.svg";
import {Link} from "react-router-dom";
import User from "../types/user.type";
import AuthService from "../services/auth.service";
import ReviewsService from "../services/reviews.service";
import Review from "../types/reviews.type";
import ReviewCard from "../components/ReviewCard";
import SocialMediaBlock from "../components/SocialMediaBlock";
import SocialMediaSmallBlock from "../components/SocialMediaSmallBlock";
import FooterSocialMediaBlock from "../components/FooterSocialMediaBlock";

interface Props {
}

interface State {
}

export default class Footer extends React.Component<Props, State> {


  render() {

    return (
      <footer>
        <div className="footerTop">
          <div className="footerLeft">
            We are here to reward you for your support! Download Blueberry's
            Reward App now! (Coming soon)
          </div>
          <div className="footerRight">
            <div className="appleStore">
              <img
                width="58"
                height="58"
                src={AppStoreImage}
                className=""
                alt=""
                loading="lazy"
              />
              <h3>Download in App store</h3>
            </div>
            <div className="androidStore">
              <img
                width="58"
                height="58"
                src={AndroidImage}
                className=""
                alt=""
                loading="lazy"
              />
              <h3>Download in App store</h3>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="locations">
            <div className="location location-1">
              <div>
                <figure>
                  <a href="#" target="_blank" className="locationIcon">
                    <img
                      width="38"
                      height="43"
                      src={LocationImage}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
              <div className="address">
                <h3>
                  <a href="#" target="_blank">MYRTLE BEACH</a>
                </h3>
                <p>
                  7931 N Kings Hwy<br/>
                  Myrtle Beach, SC 29572
                </p>
              </div>
            </div>
            <div className="location location-2">
              <div>
                <figure>
                  <a href="#" target="_blank" className="locationIcon">
                    <img
                      width="38"
                      height="43"
                      src={LocationImage}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
              <div className="address">
                <h3>
                  <a href="#" target="_blank">NORTH MYRTLE BEACH</a>
                </h3>
                <p>
                  4856 Highway 17 South<br/>
                  North Myrtle Beach, SC 29582
                </p>
              </div>
            </div>

            <div className="location location-3">
              <div>
                <figure>
                  <a href="#" target="_blank" className="locationIcon">
                    <img
                      width="38"
                      height="43"
                      src={LocationImage}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
              <div className="address">
                <h3>
                  <a href="#" target="_blank">WILMINGTON, NC</a>
                </h3>
                <p>
                  1900 Eastwood Road<br/>
                  Wilmington, NC 28403
                </p>
              </div>
            </div>
            <div className="location location-4">
              <div>
                <figure>
                  <a href="#" target="_blank" className="locationIcon">
                    <img
                      width="38"
                      height="43"
                      src={PhoneImage}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
              <div className="address">
                <h3>
                  <a href="#" target="_blank">843-945-4588</a>
                </h3>
                <p>
                  Open 7 Days a Week<br/>
                  7:00am to 6:30pm
                </p>
              </div>
            </div>
          </div>
          <div className="followUs">
            <div className="followUsHeading">FOLLOW US</div>
            <FooterSocialMediaBlock/>
          </div>
        </div>
      </footer>
    )
  };
}