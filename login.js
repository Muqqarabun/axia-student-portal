document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    // Reset previous message
    errorMsg.textContent = "";

    if (email === "") {
        errorMsg.textContent = "Email is required";
        return;
    }

    if (password === "") {
        errorMsg.textContent = "Password is required";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters long";
        return;
    }

    // Redirect to dashboard (student-portal)
    window.location.href = "student-portal.html";
});