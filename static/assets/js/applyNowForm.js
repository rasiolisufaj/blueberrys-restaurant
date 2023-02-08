const teamSection = document.getElementById('teamSection');
const applyNowFormSection = document.getElementById('applyNowForm');
const applyNowButton = document.getElementById('applyBtn');
const closeFormIcon = document.getElementById('closeFormIcon');

applyNowButton.addEventListener('click', e => {
  e.preventDefault();
  teamSection.classList.toggle('hidden');
  applyNowFormSection.style.display = 'flex';
})

closeFormIcon.addEventListener('click', e => {
  e.preventDefault();
  teamSection.classList.toggle('hidden');
  applyNowFormSection.style.display = 'none';
})

applyNowFormSection.addEventListener('click', e => {
  if(e.target.id === 'applyNowForm'){
    teamSection.classList.toggle('hidden');
    applyNowFormSection.style.display = 'none';
  }
})