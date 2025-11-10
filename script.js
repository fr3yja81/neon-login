const loginForm = document.getElementById("loginform");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function showAlert(message) {

    const existingAlert = loginForm.querySelector(".alert");
    if (existingAlert) existingAlert.remove();

    let alertDiv = document.createElement("div");
    alertDiv.textContent = message;
    alertDiv.classList.add("alert");
    alertDiv.setAttribute("aria-live", "polite");

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
        showAlert("Login successful!");

        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        showAlert("Username or password is incorrect");
    }
});
