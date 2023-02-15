function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonToChangeColor = document.querySelector('button.change-color');
buttonToChangeColor.addEventListener('click', onBackgroundColorChange);
const currentColorHex = document.querySelector('span.color');

function onBackgroundColorChange() {
  currentColorHex.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
