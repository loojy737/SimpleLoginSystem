
let userNameSpan = document.getElementById('username');
let logoutBtn = document.getElementById('logout-btn');

document.addEventListener('DOMContentLoaded', function() {
     let username = localStorage.getItem("currenltyLoggedInUser");
     userNameSpan.innerText = username;
});


logoutBtn.addEventListener('click', function() {
    localStorage.setItem("currenltyLoggedInUser", "");
     window.location.href = "../html/login.html";

});