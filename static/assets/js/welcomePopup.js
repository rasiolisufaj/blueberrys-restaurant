(function () {
  "use strict";

  function openWelcomePopup() {
    let isOpen = false;
    if (isOpen == false) {
      setTimeout(function () {
        document.getElementById("WelcomePopupSection").style.display = "none";
      }, 500);
      document.getElementById("WelcomePopupSection").style.display = "flex";
    }
  }

  var x = window.matchMedia("(max-width: 500px)");
  openWelcomePopup(x); // Call listener function at run time
})();
