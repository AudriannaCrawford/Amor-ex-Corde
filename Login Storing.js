// Sample username and password
const sampleUsername = "perfumeUser";
const samplePassword = "password123";  // Password must be at least 8 characters

let loginAttempts = 0;

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === sampleUsername && password === samplePassword) {
        window.location.href = "products.html";  // Redirect to products page on success
    } else {
        loginAttempts++;
        document.getElementById('error-message').textContent = "Invalid username or password.";

        // Redirect to error page after 3 failed attempts
        if (loginAttempts >= 3) {
            window.location.href = "error.html";
        }
    }
}
