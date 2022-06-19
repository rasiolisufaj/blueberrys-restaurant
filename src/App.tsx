import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./pages/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HomeAboutUs from "./pages/HomeAboutUs";
import HomeReviews from "./pages/HomeReviews";
import MenuBreakfast from "./pages/MenuBreakfast";
import Gallery from "./pages/Gallery";
import Waitlist from "./pages/Waitlist";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<HomeAboutUs/>}/>
        <Route path="/reviews" element={<HomeReviews/>}/>
        <Route path="/menu" element={<MenuBreakfast/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/waitlist" element={<Waitlist/>}/>
      </Routes>
    </>
  );
}

export default App;
