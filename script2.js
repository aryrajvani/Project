// JavaScript file: functions.js

// Navigation bar links handling
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href');
        if (targetPage) {
            window.location.href = targetPage;
        }
    });
});

// Login button functionality
document.querySelector('.user-actions a[href="#login"]').addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Product button click handling
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
        // Add logic to update cart count or data
    });
});

// Footer links handling
document.querySelectorAll('.footer a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Navigating to ${event.target.textContent}`);
        // Logic for footer link navigation
    });
});

// Login page functionality (if on login page)
if (window.location.pathname.includes('login.html')) {
    document.querySelector('#login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Login successful!');
            window.location.href = 'index.html';
        }
    });
}
