document.getElementById("register-form").addEventListener("submit", function (event) {

    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
        alert("Os campos de e-mail não correspondem. Por favor, verifique.");
        event.preventDefault();
    }
});
