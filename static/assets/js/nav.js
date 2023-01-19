const toggleBtnEl = document.getElementById('menuToggleBtn');
const sidebarEl = document.getElementById('sidebar');
const menuLinksEl = document.querySelectorAll('.nav-link');
toggleBtnEl.addEventListener('click', (e) => {
  sidebarEl.classList.toggle('sx');
});
menuLinksEl.forEach((link) => {
  link.addEventListener('click', () => {
    console.log(link);
    sidebarEl.classList.toggle('sx');
  });
})