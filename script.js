const inputs = document.querySelectorAll('input');
const errorElement = document.querySelectorAll('[data-text="error"]');

const submitButton = document.querySelector('[data-button="submit"]');

function validate(e) {
  e.preventDefault();

  inputs.forEach((input, e) => {
    if (input.value === '') {
      input.classList.add('input-error');
      createErrorText(input);
    }
  });
}

function createErrorText(input) {
  const errorTextElement = document.createElement('p');
  errorTextElement.classList.add('error');
  const text = document.createTextNode(`${input.placeholder} cannot be empty`);
  errorTextElement.appendChild(text);

  const inputGroup = document.querySelector(
    `[data-text="${input.placeholder}"]`
  );

  inputGroup.appendChild(errorTextElement);
}

inputs.forEach((input, e) => {
  input.addEventListener('click', function () {
    if (input.classList.contains('input-error')) {
      input.classList.remove('input-error');
    }
  });
});

submitButton.addEventListener('click', validate);
