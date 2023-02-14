const counterValue = document.querySelector('span#value');
counterValue.textContent = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener('click', () => {
  let counterDec = Number(counterValue.textContent);
  counterDec -= 1;
  return (counterValue.textContent = counterDec);
});

incrementButton.addEventListener('click', () => {
  let counterDec = Number(counterValue.textContent);
  counterDec += 1;
  return (counterValue.textContent = counterDec);
});
