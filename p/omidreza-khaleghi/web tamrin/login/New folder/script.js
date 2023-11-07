document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("signup-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your actual login logic
        if (username === "example" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
