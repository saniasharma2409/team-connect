let form=document.querySelector("form");
let url=document.querySelector("#url");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let designation = document.querySelector("#designation");
let about = document.querySelector("#about");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    let profile = {
        url:url.value,
        name:username.value,
        email:email.value,
        designation:designation.value,
        about:about.value
    };
    profiles.push(profile);
    localStorage.setItem("profiles",JSON.stringify(profiles));
    window.location.href="employees.html";
});  