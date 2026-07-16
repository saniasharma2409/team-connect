let container=document.querySelector(".container");
let signin=document.querySelector("#signin");
let signup=document.querySelector("#signup");
signin.addEventListener("click",function(){
    container.classList.add("active");
});
signup.addEventListener("click",function(){
    container.classList.remove("active");
});

let username=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let signupform=document.querySelector(".signup-form");
let signinEmailError=document.querySelector("#signin-email-error");
let signinPassError=document.querySelector("#signin-pass-error");
let signupEmailError=document.querySelector("#signup-email-error");
let signupPassError=document.querySelector("#signup-pass-error");
signupform.addEventListener("submit",function(dets){
dets.preventDefault();
signupEmailError.textContent = "";
signupPassError.textContent = "";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let eans=emailRegex.test(email.value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let pans=passwordRegex.test(password.value);
    if(!eans){
        signupEmailError.textContent="*check your email";
    }
    if(!pans){
        signupPassError.textContent="*Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character.";
    }

if(eans && pans){

let users = JSON.parse(localStorage.getItem("users")) || [];

let userExist=users.some(function(dets){
    return dets.email===email.value;
});

if(userExist){
    signupEmailError.textContent="*Account already exists with this email";
}
else{
let user={
    username:username.value,
    email:email.value,
    password:password.value
};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));
window.location.href="add.html";
}
}
});


let loginEmail=document.querySelector("#loginEmail");
let loginPassword=document.querySelector("#loginPassword");
let signinform=document.querySelector(".signin-form");
signinform.addEventListener("submit",function(dets){
dets.preventDefault();
signinEmailError.textContent = "";
signinPassError.textContent = "";
let users = JSON.parse(localStorage.getItem("users")) || [];
let thatUser=users.find(function(dets){
    return dets.email===loginEmail.value;
});
  
if (!thatUser) {
        signinEmailError.textContent="*Email not registered!";
    }
else{
if(thatUser.password===loginPassword.value){
window.location.href="dashboard.html";
}
else{
    signinPassError.textContent="*incorrect password";
}
}
});