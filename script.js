const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//const regExp1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const regExp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;


form.addEventListener("submit", event => {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 3, 15);
  checkEmail(email);
  passwordMatch(password, password2);
  checkPassword(password, password2);
 
});

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, "Ce champs est requis");
    } else {
      showSuccess(input);
    }
  });
};
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Ce champ doit comporter au minimum ${min} caractères !`);
  } else if (input.value.length > max) {
    showError(input, `Ce champ doit contenir au moins ${max}!`);
  } else {
    showSuccess(input);
  }
};
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = " form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = " form-control success";
};
const checkEmail = input => {
  const regExp1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regExp1.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "L'email n'est pas valide !");
  }
};
const passwordMatch = (input1, input2) =>{
  //const regExp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
  if (input1.value !== input2.value ){

// SI la valeur de l'input 1 est différente de la valeur de l'input 2 alors:

    showError(input2, " Le mot de passe ne correspond pas");
  
  //}else if(input.value !== (regExp2.test(input.value))){
    //showError(input, "Mot de passe non conforme")
  }
   else {
    
// SINON :
    showSuccess(input);
  }
};


//Possibililité fonctionnelle que sur un mot de passe1 :-(
  
const checkPassword = (input ) => {
  const re2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
if (re2.test (input.value))  {
      showSuccess (input,"Mot de passe conforme")
}
else {
    showError(input, "Mot de passe non conforme")
}  
}