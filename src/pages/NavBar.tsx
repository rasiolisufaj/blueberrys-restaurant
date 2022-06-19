import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../assets/css/App.css";

import * as FaIcons from 'react-icons/fa';
import Image from "./../assets/img/logo.png";

function NavBar() {

  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <>
      <div className="sidebarMobile">
        <div>
          <img src={Image} alt="Home"/>
        </div>

        <Link to='#' className='mobile-navbar-toggle'>
          {!navbar && <FaIcons.FaBars onClick={showNavbar}/>}
          {navbar && <FaIcons.FaRegWindowClose onClick={showNavbar}/>}
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
            <li><Link to={"/aboutUs"} className="nav-link">About us</Link></li>
            <li><Link to={"/reviews"} className="nav-link">Reviews</Link></li>
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
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
