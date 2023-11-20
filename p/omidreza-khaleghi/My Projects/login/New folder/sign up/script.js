document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your information has been registered");
    });
});
