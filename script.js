const button = document.querySelector('.email-form');
const email = document.querySelector('#email');
const p = document.createElement('p');
button.appendChild(p);

button.addEventListener('submit', e => {
  e.preventDefault();
  validEmail();
});

function validEmail() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const test = regex.test(email.value);
  let inputValue = button.childNodes[1].value;
  const isValidEmail = inputValue === '' || !test;

  if (isValidEmail) {
    p.classList.add('error-message');
    p.classList.remove('success-message');
    p.innerText = 'Oops! Please check your email';
    button.childNodes[1].value = '';
  } else {
    p.classList.add('success-message');
    p.classList.remove('error-message');
    p.innerText = 'Email Sent';
    button.childNodes[1].value = '';
  }
}
