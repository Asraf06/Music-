// Function to handle login
function login() {
    const username = document.getElementById("inputValue1").value;
    const password = document.getElementById("inputValue2").value;

    // Simple authentication check (you can set a fixed username and password for demonstration)
    if (username === "admin" && password === "12345") {
        // Save the login data to localStorage
        localStorage.setItem("loggedInUser", username);
        
        // Redirect to the home page
        window.location.href = "music.html";
    } else {
        document.getElementById("output").textContent = "Invalid username or password.";
    }
}

// Function to check if a user is already logged in
function checkLogin() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        // Redirect to the home page if already logged in
        window.location.href = "music.html";
    }
}

// Function to toggle the visibility of the password
function togglePassword() {
    const passwordInput = document.getElementById("inputValue2");
    const showPassword = document.getElementById("showPassword");

    if (showPassword.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Check if user is already logged in on page load
checkLogin();
