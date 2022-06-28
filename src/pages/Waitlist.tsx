import React from "react";
import bookImage from "../assets/img/waitlist/book.svg";
import plateImage from "../assets/img/waitlist/plateSpoon.svg";
import clockImage from "../assets/img/waitlist/clock.svg";


interface Props {
}

export default class Waitlist extends React.Component<Props> {


  joinWaitlist() {
    console.debug("Join the waitlist..");
  }


  render() {

    return (
      <div id="pageContainer">
        <section className="waitListSection">
          <div className="waitListwrap">
            <div className="waitlistContainer">
              <div className="LeftWaitListContainer">
                <div>
                  <h2>Enjoy the Blueberry's experience without waiting!</h2>
                </div>
              </div>
              <div className="RightWaitListContainer">
                <div className="WaitListImgclock">
                  <img src={clockImage} alt="" className="img-fluid clockImg"/>
                  Check live wait times
                </div>
                <div className="WaitListImgbook">
                  <img src={bookImage} alt="" className="img-fluid bookImg"/>
                  Join the waitlist
                </div>
                <div className="WaitListImgplate">
                  <img src={plateImage} alt="" className="img-fluid platespoonImg"/>
                  Arrive at your table
                </div>
                <button className="mainButton" onClick={this.joinWaitlist}>JOIN THE WAITLIST</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  };
}