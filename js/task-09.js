function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonToChangeColor = document.querySelector('button.change-color');
const currentColorEl = document.querySelector('span.color');
// const hexColor = getRandomHexColor();

buttonToChangeColor.addEventListener('click', onBackgroundColorChange);

function onBackgroundColorChange() {
  currentColorEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = currentColorEl.textContent;
}
