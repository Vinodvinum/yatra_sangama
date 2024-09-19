// Function to handle user registration
function handleRegistration() {
    const name = document.getElementById('registerName');
    const email = document.getElementById('registerEmail');
    const password = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    // Check if the elements exist
    if (!name || !email || !password || !confirmPassword) {
        console.error('One or more form elements are missing');
        return;
    }

    const registrationData = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };

    if (registrationData.password !== registrationData.confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.msg === 'User registered successfully') {
            window.location.href = 'login.html'; // Redirect to login page on successful registration
        } else {
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while registering.');
    });
}

// Function to handle user login
function handleLogin() {
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    // Check if the elements exist
    if (!email || !password) {
        console.error('One or more form elements are missing');
        return;
    }

    const loginData = {
        email: email.value,
        password: password.value
    };

    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store the token (e.g., in localStorage) and redirect
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html'; // Redirect to home page on successful login
        } else {
            alert('Invalid email or password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    });
}

// Add event listeners if needed
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handleRegistration();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handleLogin();
        });
    }
});