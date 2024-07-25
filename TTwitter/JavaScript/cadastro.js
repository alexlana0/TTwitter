function showHide(inputId) {
    var passwordInput = document.getElementById(inputId);
    var icon = document.getElementById("togglePassword");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.style.backgroundImage = "url('../img/hide.svg')";
    } else {
        passwordInput.type = "password";
        icon.style.backgroundImage = "url('../img/show.svg')";
    }
}

document.getElementById("togglePassword").addEventListener("click", function() {
    showHide('password');
});

document.getElementById("togglePasswordConfirmation").addEventListener("click", function() {
    showHide('password_confirmation');
});