const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("terms_conditions");
const form = document.querySelector(".needs-validation");
const submit = document.querySelector(".ok");


(function () {
  form.addEventListener(
    "submit",
    function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }

      form.classList.add("was-validated");

      
    },
    false
  );
})();
