let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
let count=document.querySelector(".count");
count.textContent=profiles.length;

let recents = profiles.slice(-4);
let countr=document.querySelector(".countr");
countr.textContent=recents.length;

let employeeList= document.querySelector(".employee-list");
recents.forEach(function(dets){

let employee=document.createElement("div");
employee.classList.add("employee");

let img=document.createElement("img");

let h4=document.createElement("h4");

let p=document.createElement("p");

let div=document.createElement("div");
p.textContent=dets.designation;
h4.textContent=dets.name;
img.setAttribute("src",dets.url);

employee.appendChild(img);
div.appendChild(h4);
div.appendChild(p);

employee.appendChild(div);
employeeList.appendChild(employee);
});

profiles.forEach(function(dets){

    let tbody=document.querySelector(".tbody");

    let tr=document.createElement("tr");
    tr.classList.add("tr");
    let column1=document.createElement("td");
    column1.classList.add("column1");
    let column2=document.createElement("td");
    column2.classList.add("column2");
    let column3=document.createElement("td");
    column3.classList.add("column3");

    tr.appendChild(column1);
    tr.appendChild(column2);
    tr.appendChild(column3);

    tbody.appendChild(tr);

    column1.textContent=dets.name;
    column2.textContent=dets.designation;
    column3.textContent=dets.email;
})