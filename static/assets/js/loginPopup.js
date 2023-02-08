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
const gallerySectionEl = document.getElementById('gallerySection');
const waitlistSectionEl = document.getElementById('waitlistSection');
const productListEl = document.getElementById('merchandiseProduct');
const menuHeaderEl = document.getElementById('menuHeader');
const menuHomeSectionEl = document.getElementById('homeSection');
const valuesSectionEl = document.getElementById('valuesSection');
const teamSectionEl = document.getElementById('teamSection');
const profilePageSectionEl = document.getElementById('ProfilePageSection');
const applyNowFormSectionEl = document.getElementById('applyNowForm');
const urlParts = window.location.pathname.split('/');
const url = urlParts[urlParts.length - 1];

function loginPopup(){
  if(url === 'home.html'){
    homeElement.classList.toggle('hidden');
    aboutElement.classList.toggle('hidden');
    blogElement.classList.toggle('hidden');
    reviewsElement.classList.toggle('hidden');
  } else if(url === 'contact_us.html'){
    lastSectionOfContactEl.classList.toggle('hidden');
    contactUsSectionEl.classList.toggle('hidden');
  } else if(url === 'gallery.html'){
    gallerySectionEl.classList.toggle('hidden');
  } else if(url === 'waitlist.html'){
    waitlistSectionEl.classList.toggle('hidden');
  } else if(url === 'productList.html'){
    productListEl.classList.toggle('hidden');
  } else if(url === 'menu_breakfast.html' || url === 'menu_cocktails.html' || url === 'menu_lunch.html'){
    menuHomeSectionEl.classList.toggle('hidden');
    menuHeaderEl.classList.toggle('hidden');
  } else if(url === 'values.html'){
    valuesSectionEl.classList.toggle('hidden');
  } else if(url === 'team.html'){
    teamSectionEl.classList.toggle('hidden');
  } else if(url === 'my_account.html'){
    profilePageSectionEl.classList.toggle('hidden');
  }
  footerElement.classList.toggle('hidden');
  loginPopupElement.classList.toggle('showUp');
}

loginPopupElement.addEventListener('click', (e) => {
  if(e.target.id === 'loginSectionPopup'){
    loginPopup();
  }
})
loginBtnElement.addEventListener("click",() => loginPopup());
closeLoginElement.addEventListener('click', () => loginPopup());