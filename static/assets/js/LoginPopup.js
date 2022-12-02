// Login Popup
let crossButtonInLoginPage = document.getElementById("crossIconPopup");
let LoginSectionDIsplay = document.getElementById("LoginSectionPopup");
let LoginButton = document.getElementById("loginButtonPopup");
let home = document.getElementById("home");
let about = document.getElementById("about");
let blogHome = document.getElementById("blogHome");
let reviews = document.getElementById("reviews");
let footer = document.getElementById("footer");
// let main = document.getElementById("main");
LoginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (LoginSectionDIsplay.style.display === "none") {
    LoginSectionDIsplay.style.display = "flex";
    // main.style.display = "none";
    home.classList.add("HomedisplayNone");
    home.classList.remove("HomedisplayBlock");
    about.style.display = "none";
    blogHome.style.display = "none";
    reviews.style.display = "none";
    footer.style.display = "none";
  } else {
    LoginSectionDIsplay.style.display = "none";
    home.classList.add("HomedisplayBlock");
    home.classList.remove("HomedisplayNone");
    about.style.display = "block";
    blogHome.style.display = "block";
    reviews.style.display = "block";
    footer.style.display = "block";
    // main.style.display = "block";
  }
});
crossButtonInLoginPage.addEventListener("click", function (e) {
  e.preventDefault();
  LoginSectionDIsplay.style.display = "none";
  home.classList.add("HomedisplayBlock");
  about.style.display = "block";
  blogHome.style.display = "block";
  reviews.style.display = "block";
  footer.style.display = "block";
  //   main.style.display = "block";

  // LoginSectionDIsplay.style.width = "0";
});
