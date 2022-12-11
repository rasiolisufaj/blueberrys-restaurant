// Sidebar Menu
$(document).ready(function(){
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });
   });

// Sidebar Locations Link
const sidebarElement = document.getElementById('sidebar');
const locationsLinkElement = document.querySelector('.locations-link');

function locationSidebar(sidebar){
  sidebar.innerHTML = `
  <div id="sidebar" class ="sx">
    <a href="#" class="locations-link locations-blue">LOCATIONS</a>
  </div>
  `
}

locationsLinkElement.addEventListener('click', () => locationSidebar(sidebarElement));