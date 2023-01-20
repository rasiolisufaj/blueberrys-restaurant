const toggleBtnEl = document.getElementById('menuToggleBtn');
const sidebarEl = document.getElementById('sidebar');
const menuLinksEl = document.querySelectorAll('.nav-link');
const loginBtnEl = document.getElementById('LoginBtn');
const exitIconEl = document.querySelector('i.fa-xmark');
const menuIconEl = document.getElementById('menuSvg');
// Event Listeners
toggleBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  sidebarEl.classList.toggle('sx');
  menuIconEl.toggleAttribute('hidden');
  exitIconEl.toggleAttribute('hidden');
});

menuLinksEl.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarEl.classList.toggle('sx');
    menuIconEl.toggleAttribute('hidden');
    exitIconEl.toggleAttribute('hidden');
  });
});

loginBtnEl.addEventListener('click', () => {
  sidebarEl.classList.toggle('sx');
  menuIconEl.toggleAttribute('hidden');
  exitIconEl.toggleAttribute('hidden');
});

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