const fontSizeControlEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

fontSizeControlEl.value = fontSizeControlEl.min;

fontSizeControlEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;

  console.log(event.currentTarget.value);
}
