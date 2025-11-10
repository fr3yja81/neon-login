const loginForm = document.getElementById("loginform");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function showAlert(message) {
    let alertDiv = document.createElement("div");
    alertDiv.textContent = message;

    alertDiv.classList.add("alert");

    loginForm.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === "admin" && password === "1234") {
        showAlert("¡Login successful!");
    } else {
        showAlert("Username or password is incorrect")
    }
});