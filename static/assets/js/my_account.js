const myAccountLink = document.getElementById('myAccountLink');
const orderHistoryLink = document.getElementById('orderHistoryLink');
const myWishlistLink = document.getElementById('myWishlistLink');
const paymentDetailsLink = document.getElementById('paymentDetailsLink');
const changePasswordLink = document.getElementById('changePasswordLink');
const myAccountElement = document.getElementById('myAccount');
// const orderHistoryElement = document.getElementById('orderHistory');
// const myWishlistElement = document.getElementById('myWishlist');
// const paymentDetailsElement = document.getElementById('paymentDetails');
const changePasswordElement = document.getElementById('changePassword');

const myAccountSmallLink = document.getElementById('myAccountSmallLink');
const orderHistorySmallLink = document.getElementById('orderHistorySmallLink');
const myWishlistSmallLink = document.getElementById('myWishlistSmallLink');
const paymentDetailsSmallLink = document.getElementById('paymentDetailsSmallLink');
const changePasswordSmallLink = document.getElementById('changePasswordSmallLink');
const accountContainerElement = document.getElementById('accountContainer');
// const orderHistoryContainerElement = document.getElementById('orderHistoryContainer');
// const myWishlistContainerElement = document.getElementById('myWishlistContainer');
// const paymentDetailsContainer1Element = document.getElementById('paymentDetailsContainer1');
// const paymentDetailsContainer2Element = document.getElementById('paymentDetailsContainer2');
const changePasswordContainerElement = document.getElementById('changePasswordContainer');

// Event Listeners
myAccountLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.add('activeLink');
  // orderHistoryLink.classList.remove('activeLink');
  // myWishlistLink.classList.remove('activeLink');
  // paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.remove('activeLink');
  myAccountElement.classList.remove('hidden');
  // orderHistoryElement.classList.add('hidden');
  // myWishlistElement.classList.add('hidden');
  // paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.add('hidden');
});

// orderHistoryLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   myAccountLink.classList.remove('activeLink');
//   orderHistoryLink.classList.add('activeLink');
//   myWishlistLink.classList.remove('activeLink');
//   paymentDetailsLink.classList.remove('activeLink');
//   changePasswordLink.classList.remove('activeLink');
//   myAccountElement.classList.add('hidden');
//   orderHistoryElement.classList.remove('hidden');
//   myWishlistElement.classList.add('hidden');
//   paymentDetailsElement.classList.add('hidden');
//   changePasswordElement.classList.add('hidden');
// });

// myWishlistLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   myAccountLink.classList.remove('activeLink');
//   orderHistoryLink.classList.remove('activeLink');
//   myWishlistLink.classList.add('activeLink');
//   paymentDetailsLink.classList.remove('activeLink');
//   changePasswordLink.classList.remove('activeLink');
//   myAccountElement.classList.add('hidden');
//   orderHistoryElement.classList.add('hidden');
//   myWishlistElement.classList.remove('hidden');
//   paymentDetailsElement.classList.add('hidden');
//   changePasswordElement.classList.add('hidden');
// });

// paymentDetailsLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   myAccountLink.classList.remove('activeLink');
//   orderHistoryLink.classList.remove('activeLink');
//   myWishlistLink.classList.remove('activeLink');
//   paymentDetailsLink.classList.add('activeLink');
//   changePasswordLink.classList.remove('activeLink');
//   myAccountElement.classList.add('hidden');
//   orderHistoryElement.classList.add('hidden');
//   myWishlistElement.classList.add('hidden');
//   paymentDetailsElement.classList.remove('hidden');
//   changePasswordElement.classList.add('hidden');
// });

changePasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountLink.classList.remove('activeLink');
  // orderHistoryLink.classList.remove('activeLink');
  // myWishlistLink.classList.remove('activeLink');
  // paymentDetailsLink.classList.remove('activeLink');
  changePasswordLink.classList.add('activeLink');
  myAccountElement.classList.add('hidden');
  // orderHistoryElement.classList.add('hidden');
  // myWishlistElement.classList.add('hidden');
  // paymentDetailsElement.classList.add('hidden');
  changePasswordElement.classList.remove('hidden');
});

// Event Listeners for Small Screen
myAccountSmallLink.addEventListener('click', (e) => {
  e.preventDefault();
  myAccountSmallLink.parentElement.classList.toggle('SWPOtherLinks');
  myAccountSmallLink.classList.toggle('activeLink');
  accountContainerElement.classList.toggle('hidden');
});

// orderHistorySmallLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   orderHistorySmallLink.parentElement.classList.toggle('SWPOtherLinks');
//   orderHistorySmallLink.classList.toggle('activeLink');
//   orderHistoryContainerElement.classList.toggle('hidden');
// });

// myWishlistSmallLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   myWishlistSmallLink.parentElement.classList.toggle('SWPOtherLinks');
//   myWishlistSmallLink.classList.toggle('activeLink');
//   myWishlistContainerElement.classList.toggle('hidden');
// });

// paymentDetailsSmallLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   paymentDetailsSmallLink.parentElement.classList.toggle('SWPOtherLinks');
//   paymentDetailsSmallLink.classList.toggle('activeLink');
//   paymentDetailsContainer1Element.classList.toggle('hidden');
// });

changePasswordSmallLink.addEventListener('click', (e) => {
  e.preventDefault();
  changePasswordSmallLink.parentElement.classList.toggle('SWPOtherLinks');
  changePasswordSmallLink.classList.toggle('activeLink');
  changePasswordContainerElement.classList.toggle('hidden');
});