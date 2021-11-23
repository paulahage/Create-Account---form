let submit = document.querySelector('.ok');

submit.addEventListener("click", cleanBtn);

function cleanBtn() {

  let username = document.getElementById('name');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let check = document.getElementById("terms_conditions");
   
  if (username.value !== "" && email.value !== "" && password.value !== "" && check.checked !== false ) {
    username.value = "";
    email.value = "";
    password.value = "";
    check.checked = false

  }    
  
}

