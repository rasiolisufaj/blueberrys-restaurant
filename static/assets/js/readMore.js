(function () {
  "use strict";
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const aboutUsPara = document.querySelectorAll('.aboutUsPara');
  const btnText = document.getElementById("readMoreText");
  const aboutUsDescription = document.getElementById("aboutUsDescription");
  const upicon = document.getElementById("aboutUsArrowUp");
  const downicon = document.getElementById("aboutUsArrowDown");
  const aboutContainer = document.getElementById("about");
  let readMoreButton = document.getElementById("readMoreButton");

  readMoreButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (screen.width >=800 || screen.width <= 436 || screen.width > 437) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        setTimeout(() => {
          moreText.style.display = "none";
        }, 50);
        aboutUsDescription.style.height = "320px";
        downicon.style.display = "inline";
        upicon.style.display = "none";
        aboutUsDescription.style.transition = "height 0.5s ease";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        aboutUsDescription.style.height = "670px";
        downicon.style.display = "none";
        upicon.style.display = "inline";
        aboutUsDescription.style.transition = "height 0.4s ease-in-out";
        setTimeout(() => {
          moreText.style.display = 'block';
        }, 350);
      }
    }
  });
})();
