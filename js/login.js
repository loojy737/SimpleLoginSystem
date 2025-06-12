users = []

let allUsers = localStorage.getItem("users");

let userPass = document.getElementById("password-input");
let userEmail = document.getElementById("email-input");
let loginBtn = document.getElementById("login-btn");

let loginerror = document.getElementById("login-error");



if(allUsers !== null) 
    users = JSON.parse(allUsers);


loginBtn.addEventListener('click', function() {


    let user = GetUser(userEmail.value);

    if(user == null || user.password != userPass.value) {
        ShowUserNotFoundError();
        return;
    }
    RemoveErrorNotFound();
    // must redirect to home page
    localStorage.setItem("currenltyLoggedInUser", user.username);
    window.location.href = "../html/index.html";

});

function ShowUserNotFoundError() {
    userPass.classList.add('is-invalid');
    userEmail.classList.add('is-invalid');
    loginerror.innerText = "Incorrect username or password";
    loginerror.classList.add('text-danger', 'text-center');
    
}

function RemoveErrorNotFound() {
    userPass.classList.remove('is-invalid');
    userEmail.classList.remove('is-invalid');
    loginerror.innerText = "";
    loginerror.classList.remove('text-danger', 'text-center');
}

function GetUser(email) {

    for(let i = 0;i < users.length;i++) {
        if(users[i].email === email) 
            return users[i];
    }
    return null;
}
