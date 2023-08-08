
const form = document.querySelector('form');
const inputUsername = document.getElementById('inputUsername');

form.addEventListener('submit', function (event) {
    if (!inputUsername.value) {
        inputUsername.classList.add('is-invalid');
        event.preventDefault();
    }
});

inputUsername.addEventListener('input', function () {
    if (inputUsername.value) {
        inputUsername.classList.remove('is-invalid');
        inputUsername.classList.add('is-valid');
    } else {
        inputUsername.classList.remove('is-valid');
    }
});