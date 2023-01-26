(function () {
  "use strict";
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const moreParagraphs = document.querySelectorAll('#more p.aboutUsPara');
  console.log(moreParagraphs);
  const btnText = document.getElementById("readMoreText");
  const aboutUsDescription = document.getElementById("aboutUsDescription");
  const upicon = document.getElementById("aboutUsArrowUp");
  const downicon = document.getElementById("aboutUsArrowDown");
  const aboutContainer = document.getElementById("about");
  let readMoreButton = document.getElementById("readMoreButton");

  readMoreButton.addEventListener("click", function (e) {
    e.preventDefault();
    // let height = window.innerHeight ;
    if (screen.width >= 800 || screen.width <= 436) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        aboutUsDescription.style.height = "343px";
        downicon.style.display = "inline";
        upicon.style.display = "none";
        // aboutUsDescription.style.transition = "height 1s ease";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        aboutUsDescription.style.height = "690px";
        downicon.style.display = "none";
        upicon.style.display = "inline";
        aboutUsDescription.style.transition = "height 0.5s ease-in-out";
        setTimeout(() => {
          moreText.style.display = 'block';
        }, 500);
      }
    }
  });
})();
