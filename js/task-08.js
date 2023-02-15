const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const loginFormEl = event.currentTarget.elements;
  const submitData = {};

  if (loginFormEl.email.value === '' || loginFormEl.password.value === '') {
    return alert('Увага! Всі поля повинні бути заповнені!');
  }

  submitData.email = loginFormEl.email.value;
  submitData.password = loginFormEl.password.value;

  console.log(submitData);

  return event.currentTarget.reset();
}
