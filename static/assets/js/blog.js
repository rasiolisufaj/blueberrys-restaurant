const post1Benefits = document.getElementById('post1-benefits');
const post1Ingredients = document.getElementById('post1-ingredients');
const post1Tutorial = document.getElementById('post1-tutorial');
const post1BenefitsElement = document.getElementById('post1Benefits');
const post1IngredientsElement = document.getElementById('post1Ingredients');
const post1TutorialElement = document.getElementById('post1Tutorial');

const post2Benefits = document.getElementById('post2-benefits');
const post2Ingredients = document.getElementById('post2-ingredients');
const post2Tutorial = document.getElementById('post2-tutorial');
const post2BenefitsElement = document.getElementById('post2Benefits');
const post2IngredientsElement = document.getElementById('post2Ingredients');
const post2TutorialElement = document.getElementById('post2Tutorial');

const post3Benefits = document.getElementById('post3-benefits');
const post3Ingredients = document.getElementById('post3-ingredients');
const post3Tutorial = document.getElementById('post3-tutorial');
const post3BenefitsElement = document.getElementById('post3Benefits');
const post3IngredientsElement = document.getElementById('post3Ingredients');
const post3TutorialElement = document.getElementById('post3Tutorial');

post1Benefits.addEventListener('click', e => {
  e.preventDefault();
  post1BenefitsElement.classList.remove('hidden');
  if(!post1IngredientsElement.classList.contains('hidden')){
    post1IngredientsElement.classList.add('hidden');
  } else if(!post1TutorialElement.classList.contains('hidden')){
    post1TutorialElement.classList.add('hidden');
  }
});

post1Ingredients.addEventListener('click', e => {
  e.preventDefault();
  post1IngredientsElement.classList.remove('hidden');
  if(!post1BenefitsElement.classList.contains('hidden')){
    post1BenefitsElement.classList.add('hidden');
  } else if(!post1TutorialElement.classList.contains('hidden')){
    post1TutorialElement.classList.add('hidden');
  }
});

post1Tutorial.addEventListener('click', e => {
  e.preventDefault();
  post1TutorialElement.classList.remove('hidden');
  if(!post1BenefitsElement.classList.contains('hidden')){
    post1BenefitsElement.classList.add('hidden');
  } else if(!post1IngredientsElement.classList.contains('hidden')){
    post1IngredientsElement.classList.add('hidden');
  }
});

post2Benefits.addEventListener('click', e => {
  e.preventDefault();
  post2BenefitsElement.classList.remove('hidden');
  if(!post2IngredientsElement.classList.contains('hidden')){
    post2IngredientsElement.classList.add('hidden');
  } else if(!post2TutorialElement.classList.contains('hidden')){
    post2TutorialElement.classList.add('hidden');
  }
});

post2Ingredients.addEventListener('click', e => {
  e.preventDefault();
  post2IngredientsElement.classList.remove('hidden');
  if(!post2BenefitsElement.classList.contains('hidden')){
    post2BenefitsElement.classList.add('hidden');
  } else if(!post2TutorialElement.classList.contains('hidden')){
    post2TutorialElement.classList.add('hidden');
  }
});

post2Tutorial.addEventListener('click', e => {
  e.preventDefault();
  post2TutorialElement.classList.remove('hidden');
  if(!post2BenefitsElement.classList.contains('hidden')){
    post2BenefitsElement.classList.add('hidden');
  } else if(!post2IngredientsElement.classList.contains('hidden')){
    post2IngredientsElement.classList.add('hidden');
  }
});

post3Benefits.addEventListener('click', e => {
  e.preventDefault();
  post3BenefitsElement.classList.remove('hidden');
  if(!post3IngredientsElement.classList.contains('hidden')){
    post3IngredientsElement.classList.add('hidden');
  } else if(!post3TutorialElement.classList.contains('hidden')){
    post3TutorialElement.classList.add('hidden');
  }
});

post3Ingredients.addEventListener('click', e => {
  e.preventDefault();
  post3IngredientsElement.classList.remove('hidden');
  if(!post3BenefitsElement.classList.contains('hidden')){
    post3BenefitsElement.classList.add('hidden');
  } else if(!post3TutorialElement.classList.contains('hidden')){
    post3TutorialElement.classList.add('hidden');
  }
});

post3Tutorial.addEventListener('click', e => {
  e.preventDefault();
  post3TutorialElement.classList.remove('hidden');
  if(!post3BenefitsElement.classList.contains('hidden')){
    post3BenefitsElement.classList.add('hidden');
  } else if(!post3IngredientsElement.classList.contains('hidden')){
    post3IngredientsElement.classList.add('hidden');
  }
});