const loginBtnElement = document.getElementById('LoginBtn');
const closeLoginElement = document.getElementById('closeLoginIcon');
const homeElement = document.getElementById('home');
const aboutElement = document.getElementById('about');
const blogElement = document.getElementById('blogHome');
const reviewsElement = document.getElementById('reviews');
const footerElement = document.getElementById('footer');
const loginPopupElement = document.getElementById('loginSectionPopup');
const pageContainerEl = document.getElementById('pageContainerRasiol');

function loginPopup(){
  homeElement.classList.toggle('hidden');
  aboutElement.classList.toggle('hidden');
  blogElement.classList.toggle('hidden');
  reviewsElement.classList.toggle('hidden');
  footerElement.classList.toggle('hidden');
  pageContainerEl.classList.toggle('hidden');
  loginPopupElement.classList.toggle('showUp');
}

loginBtnElement.addEventListener("click",() => loginPopup());
closeLoginElement.addEventListener('click', () => loginPopup());
