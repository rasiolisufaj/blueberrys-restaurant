import React, {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./pages/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import MenuBreakfast from "./pages/MenuBreakfast";
import Gallery from "./pages/Gallery";
import Waitlist from "./pages/Waitlist";
import Profile from "./pages/Profile";
import AuthService from "./services/auth.service";

export const App = () => {

  const [currentUser, setCurrentUser] = useState(false);

  console.log("INIT. currentUser: ", currentUser);

  useEffect(() => {
    async function init() {
      authenticate()
    }

    init();
  }, [])

  const authenticate = async () => {
    try {
      const user = AuthService.getCurrentUser();
      console.log("App currentUser: ", currentUser);
      setCurrentUser(user);

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
        <NavBar currentUser={currentUser}/>
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
