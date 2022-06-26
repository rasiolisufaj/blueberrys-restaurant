import React from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import Image from "./../assets/img/logo.png";
import AuthService from "./../services/auth.service";
import User from "../types/user.type";

interface Props {
  openLoginDialog: () => void
}

interface State {
  loggedUser?: User
  navbar: boolean
}

export default class NavBar extends React.Component<Props> {

  state: State = {
    loggedUser: undefined,
    navbar: false
  }

  async componentDidMount() {
    const user = AuthService.getLoggedUser();
    console.log("navbar loggedUser : ", user);
    this.setState({loggedUser: user})
  }

  logout() {
    AuthService.logout();
    this.handleRefresh();
  }

  handleRefresh() {
    window.location.reload();
  }

  showNavbar = () => {
    const {navbar} = this.state
    this.setState({navbar: !navbar})
  }

  render() {
    const {openLoginDialog} = this.props;
    const {navbar, loggedUser} = this.state;
    return (
      <>
        <div className="sidebarMobile">
          <div>
            <img src={Image} alt="Home"/>
          </div>

          <Link to='#' className='mobile-navbar-toggle'>
            {!navbar && <FaIcons.FaBars onClick={this.showNavbar}/>}
            {navbar && <FaIcons.FaRegWindowClose onClick={this.showNavbar}/>}
          </Link>
        </div>

        <div id="sidebar" className={navbar ? 'open' : 'hide'}>
          <div className="sidebarLogo">
            <a href="/">
              <img src={Image} alt="Home"/>
            </a>
          </div>

          <nav className="navbar">
            <ul>
              <li><Link to={"/"} className="nav-link">Home</Link></li>
              <li><Link to={"/#aboutUs"} className="nav-link">About us</Link></li>
              <li><Link to={"/#reviews"} className="nav-link">Reviews</Link></li>
              <li className="dropdown">
                <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Menu</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/menu-breakfast"} className="dropdown-item">Breakfast</Link>
                  <Link to={"/menu-lunch"} className="dropdown-item">Lunch</Link>
                  <Link to={"/menu-cocktails"} className="dropdown-item">Special cocktails</Link>
                </div>
              </li>
              <li><Link to={"/contactUs"} className="nav-link">Contact us</Link></li>
              <li><Link to={"/gallery"} className="nav-link">Gallery</Link></li>
              <li><Link to={"/waitlist"} className="nav-link">Waitlist</Link></li>
              {!loggedUser && (<li><Link to={"/"} className="nav-link" onClick={openLoginDialog}>Login</Link></li>)}
              {loggedUser && (<li><Link to={"/"} className="nav-link" onClick={this.logout}>Logout</Link></li>)}
              {loggedUser && (<li><Link to={"/profile"} className="nav-link">Profile</Link></li>)}

            </ul>
          </nav>
        </div>

      </>
    )
  };
}