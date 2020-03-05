const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener("submit",(event) => {

    event.preventDefault()
    console.log(username.value)
    if(username.value === ''){
       showError(username, 'Ce champs est requis')
    }
    else{
        showSuccess(username)
    }
    if(email.value === ''){
        showError(email, 'Ce champs est requis')
     }
     else if(!checkEmail(email.value)){
        showError(email, "L'email n'est pas valide")
     }
     else{
         showSuccess(email)
     }
     if(password.value === ''){
        showError(password, 'Ce champs est requis')
     }
     else{
         showSuccess(password)
     }
     if(password2.value === ''){
        showError(password2, 'Ce champs est requis')
     }
     else{
         showSuccess(password2)
     }
})

const showError = (input, message)=>{
    const formControl = input.parentElement
    formControl.className ="form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className ="form-control success"
   
}

const checkEmail = (email) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}