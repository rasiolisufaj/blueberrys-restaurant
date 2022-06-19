import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HomeAboutUs from "./pages/HomeAboutUs";
import HomeReviews from "./pages/HomeReviews";
import MenuBreakfast from "./pages/MenuBreakfast";
import Gallery from "./pages/Gallery";
import Waitlist from "./pages/Waitlist";

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to={"/aboutUs"} className="nav-link">About us</Link></li>
          <li className="nav-item"><Link to={"/reviews"} className="nav-link">Reviews</Link></li>
          <li className="nav-item dropdown">
            <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Menu</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to={"/menu-breakfast"} className="dropdown-item">Breakfast</Link>
              <Link to={"/menu-lunch"} className="dropdown-item">Lunch</Link>
              <Link to={"/menu-cocktails"} className="dropdown-item">Special cocktails</Link>
            </div>
          </li>
          <li className="nav-item"><Link to={"/contactUs"} className="nav-link">Contact us</Link></li>
          <li className="nav-item"><Link to={"/gallery"} className="nav-link">Gallery</Link></li>
          <li className="nav-item"><Link to={"/waitlist"} className="nav-link">Waitlist</Link></li>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<HomeAboutUs/>}/>
        <Route path="/reviews" element={<HomeReviews/>}/>
        <Route path="/menu" element={<MenuBreakfast/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/waitlist" element={<Waitlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
