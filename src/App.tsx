import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./assets/css/App.css";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import MenuBreakfast from "./pages/MenuBreakfast";
import Gallery from "./pages/Gallery";
import Waitlist from "./pages/Waitlist";
import Profile from "./pages/Profile";

export const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      authenticate()
    }

    init();
  }, [])

  const authenticate = async () => {
    try {
      setLoading(false) // use loading if you want to avoid rendering while loading

      setTimeout(() => {
        console.log('On token expiration update the token. TODO')
      }, 30000)
    } catch (e) {
      console.log("Issue with the authentication", e);
    }
  }

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/#aboutUs" element={<Home/>}/>
          <Route path="/#reviews" element={<Home/>}/>
          <Route path="/menu" element={<MenuBreakfast/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/waitlist" element={<Waitlist/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
