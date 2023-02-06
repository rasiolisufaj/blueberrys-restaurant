const myAccountLink = document.getElementById('myAccountLink');
const orderHistoryLink = document.getElementById('orderHistoryLink');
const myWishlistLink = document.getElementById('myWishlistLink');
const paymentDetailsLink = document.getElementById('paymentDetailsLink');
const changePasswordLink = document.getElementById('changePasswordLink');

const myAccountElement = document.getElementById('myAccount');
const orderHistoryElement = document.getElementById('orderHistory');
const myWishlistElement = document.getElementById('myWishlist');
const paymentDetailsElement = document.getElementById('paymentDetails');
const changePasswordElement = document.getElementById('changePassword');

// Event Listeners
myAccountLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.add('activeLink');
  orderHistoryLink.classList.remove('activeLink');
  myWishlistLink.classList.remove('activeLink');
  paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.remove('activeLink');
  myAccountElement.classList.remove('hidden');
  orderHistoryElement.classList.add('hidden');
  myWishlistElement.classList.add('hidden');
  paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.add('hidden');
});

orderHistoryLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.remove('activeLink');
  orderHistoryLink.classList.add('activeLink');
  myWishlistLink.classList.remove('activeLink');
  paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.remove('activeLink');
  myAccountElement.classList.add('hidden');
  orderHistoryElement.classList.remove('hidden');
  myWishlistElement.classList.add('hidden');
  paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.add('hidden');
});

myWishlistLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.remove('activeLink');
  orderHistoryLink.classList.remove('activeLink');
  myWishlistLink.classList.add('activeLink');
  paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.remove('activeLink');
  myAccountElement.classList.add('hidden');
  orderHistoryElement.classList.add('hidden');
  myWishlistElement.classList.remove('hidden');
  paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.add('hidden');
});

paymentDetailsLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.remove('activeLink');
  orderHistoryLink.classList.remove('activeLink');
  myWishlistLink.classList.remove('activeLink');
  paymentDetailsLink.classList.add('activeLink');
  changePasswordLink.classList.remove('activeLink');
  myAccountElement.classList.add('hidden');
  orderHistoryElement.classList.add('hidden');
  myWishlistElement.classList.add('hidden');
  paymentDetailsElement.classList.remove('hidden');
  changePasswordElement.classList.add('hidden');
});

changePasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.remove('activeLink');
  orderHistoryLink.classList.remove('activeLink');
  myWishlistLink.classList.remove('activeLink');
  paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.add('activeLink');
  myAccountElement.classList.add('hidden');
  orderHistoryElement.classList.add('hidden');
  myWishlistElement.classList.add('hidden');
  paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.remove('hidden');
});