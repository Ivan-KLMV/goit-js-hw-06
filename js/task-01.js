const listItemCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', listItemCategories.length);

const itemCategories = document.querySelectorAll('.item');

const listCategories = [...itemCategories].map((item) => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelectorAll('li').length);
});

// Другий варіант рішення

// const listCategories = document.querySelector('#categories');
// const categorieItem = listCategories.querySelectorAll('.item');
// console.log(`Number of categories: ${listCategories.children.length}`);

// categorieItem.forEach((el) => {
//   console.log(`Category: ${el.querySelector('h2').textContent}`);
//   console.log(`Elements: ${el.querySelectorAll('li').length}`);
// });
