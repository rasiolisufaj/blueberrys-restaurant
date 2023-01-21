const loginBtnElement = document.getElementById('LoginBtn');
const closeLoginElement = document.getElementById('closeLoginIcon');
const homeElement = document.getElementById('home');
const aboutElement = document.getElementById('about');
const blogElement = document.getElementById('blogHome');
const reviewsElement = document.getElementById('reviews');
const footerElement = document.getElementById('footer');
const loginPopupElement = document.getElementById('loginSectionPopup');
const contactUsSectionEl = document.getElementById('contactUsSection');
const lastSectionOfContactEl = document.getElementById('lastSectionOfContactUs');
const urlParts = window.location.pathname.split('/');
const url = urlParts[urlParts.length - 1];
console.log(url);

function loginPopup(){
  if(url === 'index.html'){
    homeElement.classList.toggle('hidden');
    aboutElement.classList.toggle('hidden');
    blogElement.classList.toggle('hidden');
    reviewsElement.classList.toggle('hidden');
  } else if(url === 'contact_us.html'){
    lastSectionOfContactEl.classList.toggle('hidden');
    contactUsSectionEl.classList.toggle('hidden');
  }
  footerElement.classList.toggle('hidden');
  loginPopupElement.classList.toggle('showUp');
}

loginBtnElement.addEventListener("click",() => loginPopup());
closeLoginElement.addEventListener('click', () => loginPopup());
