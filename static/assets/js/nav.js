const toggleBtnEl = document.getElementById('menuToggleBtn');
const sidebarEl = document.getElementById('sidebar');
const menuLinksEl = document.querySelectorAll('.nav-link');
toggleBtnEl.addEventListener('click', (e) => {
  sidebarEl.classList.toggle('sx');
});
menuLinksEl.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarEl.classList.toggle('sx');
  });
})

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
      });
    }
  });
});