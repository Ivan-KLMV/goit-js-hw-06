const listItemCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', listItemCategories.length);

const itemCategories = document.querySelectorAll('.item');

const listCategories = [...itemCategories].map((item) => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelectorAll('li').length);
});
