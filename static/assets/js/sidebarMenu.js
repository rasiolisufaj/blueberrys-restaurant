// Sidebar Menu
$(document).ready(function(){
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });
   });

// Sidebar Locations Link
const locationsLinkElement = document.getElementById('locations-link');
const asideLinksElement = document.getElementById('aside-links');
const sideLocationsElement = document.getElementById('side-locations');
const backIconElement = document.getElementById('backIcon');

function locationSidebar(){
  asideLinksElement.classList.toggle('hidden');
  sideLocationsElement.classList.toggle('hidden');
  locationsLinkElement.classList.toggle('locations-blue');
}

locationsLinkElement.addEventListener('click', () => locationSidebar());
backIconElement.addEventListener('click', () => locationSidebar());