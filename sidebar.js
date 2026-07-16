let dashboard=document.querySelector("#dashboard");
let add=document.querySelector("#ad");
let employees=document.querySelector("#employees");
let departments=document.querySelector("#departments");
let settings=document.querySelector("#settings");
let logout=document.querySelector(".logout");
dashboard.addEventListener("click",function(dets){
    window.location.href="dashboard.html";
});
employees.addEventListener("click",function(dets){
    window.location.href="employees.html";
});
settings.addEventListener("click",function(dets){
    window.location.href="settings.html";
});
logout.addEventListener("click",function(dets){
    window.location.href="login.html";
});

const page = window.location.pathname.split("/").pop();

if (page === "dashboard.html") {
    dashboard.classList.add("active");
} else if (page === "employees.html") {
    employees.classList.add("active");
} else if (page === "settings.html") {
    settings.classList.add("active");
}