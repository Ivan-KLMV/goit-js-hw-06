function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const createButtonEl = document.querySelector('[data-create]');
// const inputEl = document.querySelector('input[type="number"]');
// let inputValue = 0;
// inputEl.addEventListener('input', (event) => {
//   console.log(event.currentTarget.value);
//   return (inputValue = event.currentTarget.values);
// });
// // createButtonEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const newDivEl = document.createElement('div');
  const divElArray = [];
  let sizeOfElement = 30;
  newDivEl.style.width = `${sizeOfElement}px`;
  newDivEl.style.height = `${sizeOfElement}px`;
  newDivEl.style.backgroundColor = getRandomHexColor();

  for (let i = 0; i < amount; i += 1) {
    divElArray.push(newDivEl);
  }
  console.log(divElArray);

  return document.querySelector('#boxes').append(...divElArray);
}
createBoxes(10);
