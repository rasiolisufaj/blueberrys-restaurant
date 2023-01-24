(function () {
  "use strict";

  let readMoreButton = document.getElementById("readMoreButton");
  readMoreButton.addEventListener("click", function (e) {
    e.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreText");
    var aboutUsDescription = document.getElementById("aboutUsDescription");
    var upicon = document.getElementById("aboutUsArrowUp");
    var downicon = document.getElementById("aboutUsArrowDown");
    var aboutContainer = document.getElementById("about");
    // let height = window.innerHeight ;
    if (screen.width >= 800) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        aboutUsDescription.style.height = "343px";
        downicon.style.display = "inline";
        upicon.style.display = "none";
        aboutUsDescription.style.transition = "height 1s ease";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        aboutUsDescription.style.height = "700px";
        downicon.style.display = "none";
        upicon.style.display = "inline";
        aboutUsDescription.style.transition = "height 1s ease";
      }
    }
  });
})();
