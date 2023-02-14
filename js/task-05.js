const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', changeName);

function changeName(event) {
  nameOutputEl.textContent = 'Anonymous';

  if (event.currentTarget.value.length > 0) {
    nameOutputEl.textContent = event.currentTarget.value;
  }
}
