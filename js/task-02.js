const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createElement = (content) => {
  return content.map((option) => {
    const ingredientEl = document.createElement('li');

    ingredientEl.textContent = option;
    ingredientEl.classList.add('item');

    return ingredientEl;
  });
};

const listIngredients = createElement(ingredients);
document.querySelector('#ingredients').append(...listIngredients);
