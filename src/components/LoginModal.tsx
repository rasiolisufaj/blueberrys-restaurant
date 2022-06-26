import React from 'react';
import {Modal} from 'antd';
import LogoImage from "../assets/img/LoginPageLogo.svg";
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthService from "./../services/auth.service";

interface Props {
  showLoginDialog: boolean
  onCancel: () => void
}

export default class LoginModal extends React.Component<Props> {

  login() {
    AuthService.login("ermal"); //test
    this.handleRefresh();
  }

  handleRefresh() {
    window.location.reload();
  }

  async componentDidMount() {
    console.log("LoginModal");
  }

  render() {
    const {onCancel, showLoginDialog} = this.props;
    const closeIcon = <FontAwesomeIcon icon={faClose}/>
    return (
      <>
        <Modal
          visible={showLoginDialog}
          footer={null}
          width={1100}
          className={"customPopup"}
          onCancel={onCancel}
          closeIcon={closeIcon}
        >

          <section id="loginPopupSection">
            <div className="loginPopupContainer">

              <div className="registerOrLoginMessageDiv">
                <div>
                  <img src={LogoImage} alt=""/>
                </div>
                <div className="loginText">
                  <b>Register</b> or <b>log in </b> <br/>to your account
                </div>
              </div>

              <div className="registerAndLoginFormDiv">
                <div className="registerForm">
                  <h2>Register</h2>
                  <form>
                    <div>
                      <div className="formItem">
                        <label htmlFor="name">Your name<span className="required">*</span></label>
                        <input type="text" name="name" className="formInput" id="name" required/>
                      </div>
                      <div className="formItem">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" className="formInput" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" required/>
                      </div>
                      <div className="formItem">
                        <label htmlFor="email">Email address<span className="required">*</span></label>
                        <input type="email" className="formInput" name="email" id="email" required/>
                      </div>

                      <div className="formItem">
                        <label htmlFor="pwd">Create Password<span className="required">*</span></label>
                        <input type="password" className="formInput" name="pwd" id="pwd" required/>
                      </div>
                      <div className="formItem">
                        <label htmlFor="repeatPwd">Verify Password<span className="required">*</span></label>
                        <input type="password" className="formInput" name="repeatPwd" id="repeatPwd" required/>
                      </div>
                      <div className="formItem">
                        <button type="submit" className="mainButton">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="loginForm">
                  <h2>Login</h2>
                  <form>
                    <div>
                      <div className="formItem">
                        <label htmlFor="email">Username or email address<span className="required">*</span></label>
                        <input type="text" className="formInput" name="email" id="email" required/>
                      </div>

                      <div className="formItem">
                        <label htmlFor="pwd">Password<span className="required">*</span></label>
                        <input type="password" className="form-controlLogin" name="pwd" id="pwd" required/>
                      </div>
                      <div className="formItem">
                        <label className="rememberMeDiv"><span className="rememberMeText">Remember me</span>
                          <input type="checkbox"/>
                          <span className="checkboxCustom"> </span>
                        </label>
                      </div>
                      <div className="formItem">
                        <button type="submit" className="mainButton marginTop-20 marginBottom-10"
                                onClick={this.login}>
                          Login
                        </button>
                      </div>
                      <div className="formItem">
                        <button type="submit" className="lostPasswordButton">
                          LOST YOUR PASSWORD?
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </>
    )
  };
}