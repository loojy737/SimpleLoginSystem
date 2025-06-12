users = []

let allUsers = localStorage.getItem("users");
if(allUsers !== null) 
    users = JSON.parse(allUsers);

let signUpBtn = document.getElementById('signup-btn');
let userNameInput = document.getElementById('username-input');
let passwordInput = document.getElementById('password-input');
let emailInput = document.getElementById('email-input');


let userNameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let emailError = document.getElementById('email-error');

signUpBtn.addEventListener('click', function() {

    let validEmail = ValidateEmail();
    let validPass = ValidatePassword();
    let validUser = ValidateUserName();
    
    if(!validEmail || !validPass || !validUser) 
        return;
    AddUser();
});


function AddUser() {
    user = {
        email: emailInput.value,
        username: userNameInput.value,
        password: passwordInput.value
    }
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    emailInput.value = "";
    userNameInput.value = "";
    passwordInput.value = "";
}


function ValidatePassword() {
    pass = passwordInput.value;
    if(pass.length >= 8) {

        passwordInput.classList.remove('is-invalid');
         passwordError.classList.remove('text-danger', 'text-center')
         passwordError.innerText = "";

        return true;

    }

    passwordInput.classList.add('is-invalid');
    passwordError.innerText = "Password Must be atleast 8 chars";
    passwordError.classList.add('text-danger', 'text-center')
    

    return false;

}

function ValidateEmail() {
    email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.length == 0 || !emailRegex.test(email)) {
      
        emailInput.classList.add('is-invalid');
        emailError.innerText = "Email format is not correct";
        emailError.classList.add('text-danger', 'text-center');
    
        return false;
    }

    if(IsFoundBefore(email)) {
       
        emailInput.classList.add('is-invalid');
        emailError.classList.add('text-danger', 'text-center');
        emailError.innerText = "Email is registred before";

        return false;
    }

  
    emailInput.classList.remove('is-invalid');
    emailError.classList.remove('text-danger', 'text-center');
    
    emailError.innerText = "";

    return true;


}

function ValidateUserName() {
    username = userNameInput.value;

    if(username.length >= 5) {
       
        userNameInput.classList.remove('is-invalid');
         userNameError.innerText = "";
         userNameError.classList.remove('text-danger', 'text-center');

        return true;
    }
  
    userNameInput.classList.add('is-invalid');

    userNameError.innerText = "Username Must be atleast 5 chars";
     userNameError.classList.add('text-danger', 'text-center');
    
    

    return false;

}


function IsFoundBefore(email) {

    for(let i = 0;i < users.length;i++) {
        if(users[i].email === email) {
            console.log(email);
            console.log(users[i].email);
            return true;
        }
    }
    return false;
}