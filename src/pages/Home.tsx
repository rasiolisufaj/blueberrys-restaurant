import React from "react";
import AboutUs from "./AboutUs";
import HomeBlog from "./HomeBlog";
import Reviews from "./Reviews";

interface Props {
  openLoginDialog: () => void
}

export default class Home extends React.Component<Props> {

  render() {
    return (
      <div id="pageContainer">
        <section id="home">
          <div className="homeSection">
            <div className="homeSectionLeft">
              <iframe width="100%" height="100%" className="responsive-iframe" title="Blueberry Video"
                      src="https://www.youtube-nocookie.com/embed/YqhH-RfInA4?playlist=YqhH-RfInA4&autoplay=1&controls=1&loop=1&mute=1&origin=http://localhost">
              </iframe>
            </div>

            <div className="homeSectionRight">
              <div>
                <h2>ENTICE YOUR PALETTE!</h2>
              </div>
              <div>
                <div>
                  <p className="homeSectionRightPar">
                    Treat yourself with a fresh and modern American menu. Fresh
                    ingredients sourced locally, where possible, and prepared by a
                    dedicated team.
                  </p>
                </div>
                <div>
                  <p className="sloganPar">SIT. DRINK AND EAT. BE OUR GUEST.</p>
                </div>
              </div>

              <div className="waitlistButton">Waitlist</div>
            </div>
          </div>
        </section>

        <AboutUs/>
        <HomeBlog/>
        <Reviews openLoginDialog={this.props.openLoginDialog}/>
      </div>
    )
  };
}