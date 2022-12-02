import React from "react";
import AboutUs from "./AboutUs";
import HomeBlog from "./HomeBlog";
import Reviews from "./Reviews";
import Footer from "./Footer";

interface Props {
  openLoginDialog: () => void
}

export default class Home extends React.Component<Props> {

  render() {
    return (
      <div id="pageContainer">

        <section id="home">
          <div className="pageContainerWrap">
            <div className="pageContainerWrapCenter">
              <div className="wrap ">
                <div className="sectionHomeBody">
                  <div className="row">
                    <div className="homeSectionLeft ">
                      <div className="columnWrap ">
                        <div className="wrap ">
                          <div className="iframeDiv">
                            <iframe src="https://www.youtube-nocookie.com/embed/YqhH-RfInA4?playlist=YqhH-RfInA4&amp;autoplay=1&amp;controls=1&amp;loop=1&amp;mute=1&amp;origin=http://localhost"
                                    width="100%" height="100%" className="responsive-iframe" title="Blueberry Video">
                            </iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="homeSectionRight ">
                      <div className="columnWrap centered">
                        <div className="wrap homeSectionRightContent">
                          <div className="title"><h2>ENTICE YOUR PALETTE!</h2></div>
                          <div className="content">
                            <div><p className="homeSectionRightPar">Treat yourself with a fresh and modern American menu. Fresh ingredients sourced locally, where possible, and prepared by a dedicated team.</p></div>
                            <div><p className="sloganPar">SIT. DRINK AND EAT. BE OUR GUEST.</p></div>
                          </div>
                          <div className="waitlistButton">Waitlist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <AboutUs/>
        <HomeBlog/>
        <Reviews openLoginDialog={this.props.openLoginDialog}/>
        <Footer/>
      </div>
    )
  };
}