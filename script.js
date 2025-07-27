const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const successMsg = document.getElementById('successMsg');
const preview = document.getElementById('preview');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    [usernameError, emailError, passwordError, confirmPasswordError].forEach(el => el.textContent = '');
    [username, email, password, confirmPassword].forEach(input => input.classList.remove('error'));

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        username.classList.add('error');
        valid = false;
    }
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('error');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Email is invalid';
        email.classList.add('error');
        valid = false;
    }
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        password.classList.add('error');
        valid = false;
    }

});