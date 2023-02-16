const inputValidationtEl = document.querySelector('#validation-input');
const dataLength = inputValidationtEl.dataset.length;

inputValidationtEl.addEventListener('blur', validator);

function validator(event) {
  event.currentTarget.value.length === Number(dataLength)
    ? inputValidationtEl.setAttribute('class', 'valid')
    : inputValidationtEl.setAttribute('class', 'invalid');
}
