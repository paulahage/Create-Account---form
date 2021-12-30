const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("terms_conditions");
const form = document.querySelector(".needs-validation");
const submit = document.querySelector(".ok");

password.addEventListener("keydown", validatePassword);
password.addEventListener("blur", validatePassword);
form.addEventListener("submit", validateForm);

function validatePassword() {
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])\S{8,}$/;

  if (!regExp.test(password.value)) {
    password.classList.add("is-invalid");
    password.setCustomValidity("OK");

    return false;
  } else {
    password.classList.remove("is-invalid");
    password.setCustomValidity("");
    return true;
  }
}

function validateForm(e) {
  const checkFormValidity = form.checkValidity();
  const checkPasswordValidity = validatePassword();

  if (!checkFormValidity || !checkPasswordValidity) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add("was-validated");
}
