import React from "react";

function Home() {

  return (
    <div id="pageContainer">
      <section id="home">
        <div className="homeSection">
          <div className="homeSectionLeft">
            <iframe width="100%" height="100%" className="responsive-iframe"
                    src="https://www.youtube-nocookie.com/embed/YqhH-RfInA4?playlist=YqhH-RfInA4&autoplay=1&controls=1&loop=1&mute=1">
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
    </div>
  );
};

export default Home;
