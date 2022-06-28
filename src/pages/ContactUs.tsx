import React from "react";
import locationIcon from "../assets/img/locationIcon.svg";
import contactUsImage from "../assets/img/contactUs.jpg";

interface Props {
}

export default class ContactUs extends React.Component<Props> {

  sendContactRequest() {
    console.debug("sendContactRequest..");
  }

  render() {

    return (
      <div id="pageContainer">
        <section className="contactUsSection">
          <div className="ContactUsContainer">
            <div className="LeftContactContainer">
              <h2 className="ContactUsHeading">Contact Us</h2>
              <form>
                <div className="ContactFormContainer">
                  <div className="ContactFormInputDiv">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                  </div>
                  <div className="ContactFormInputDiv">
                    <input type="email" className="form-control" name="email" placeholder="E-mail" required/>
                  </div>
                  <div className="ContactFormInputDiv">
                    <input type="text" className="form-control" name="Phone" placeholder="Phone" required/>
                  </div>

                  <div className="ContactFormInputDiv">
                  <textarea className="form-control" name="message" placeholder="Message" required
                    // rows="5"
                    />
                  </div>
                  <div className="ContactFormInputDiv">
                    <button type="submit" className="mainButton" onClick={this.sendContactRequest}>Send</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="RightContactContainer">
              <h2 className="MytreBeach">
                <img src={locationIcon} alt="" width="38" height="43"/>
                Mytre Beach
              </h2>

              <iframe width="600" height="450" title="Blueberry Map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424627.4033472163!2d-78.816048!3d33.750287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890065ea041f64ef%3A0xd2aa84391ec65201!2s7931%20N%20Kings%20Hwy%2C%20Myrtle%20Beach%2C%20SC%2029572!5e0!3m2!1sen!2sus!4v1655466240820!5m2!1sen!2sus"
              >
              </iframe>
            </div>
          </div>
        </section>

        <section className="LastSectionOfContactUs">
          <div className="leftLastSectionOfContactUs">
            <img src={contactUsImage} alt="" className="img-fluid"/>
          </div>
          <div className="rigthLastSectionOfContactUs">
            <h2>HOURS</h2>
            <div className="datTimeContainer">
              <div className="dayTimeOfOpen">
                <div className="day">Sunday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Monday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Tuesday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Wednesday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Thursday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Friday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
              <div className="dayTimeOfOpen">
                <div className="day">Saturday</div>
                <div className="time">6:30 AM - 3:00 PM</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  };
}