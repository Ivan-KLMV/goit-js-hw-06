function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');
let inputValue = 0;

inputEl.addEventListener('input', (event) => {
  // console.log(event.currentTarget.value);
  return (inputValue = event.currentTarget.value);
});

createButtonEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  destroyBoxes();

  amount = inputValue;
  // console.log(amount);
  const divElArray = [];
  let sizeOfElement = 20;

  for (let i = 0; i < amount; i += 1) {
    sizeOfElement += 10;
    const newDivEl = document.createElement('div');

    newDivEl.style.width = `${sizeOfElement}px`;
    newDivEl.style.height = `${sizeOfElement}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();
    divElArray.push(newDivEl);
  }

  // console.log(divElArray);
  return document.querySelector('#boxes').append(...divElArray);
}

destroyButtonEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}
