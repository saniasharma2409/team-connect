let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
let cards = document.querySelector(".cards");
let search = document.querySelector("#search");

let filterIcon = document.querySelector("#filterIcon");
let filterDropdown = document.querySelector("#filterDropdown");

// Show / Hide Filter Dropdown
filterIcon.addEventListener("click", function () {
    filterDropdown.classList.toggle("show");
});

// Select checkboxes AFTER the page has loaded
let checkboxes = document.querySelectorAll(".designationFilter");

function displayCards(data) {

    cards.innerHTML = "";

    data.forEach(function(dets){

        let card = document.createElement("div");
        card.classList.add("carde");

        let profile = document.createElement("div");
        profile.classList.add("profile");

        let img = document.createElement("img");

        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let h6 = document.createElement("h6");
        let p = document.createElement("p");

        overlay.appendChild(h2);
        overlay.appendChild(h4);
        overlay.appendChild(h6);
        overlay.appendChild(p);

        profile.appendChild(img);
        card.appendChild(profile);
        card.appendChild(overlay);
        cards.appendChild(card);

        img.src = dets.url;
        h2.textContent = dets.name;
        h4.textContent = dets.designation;
        h6.textContent = dets.email;
        p.textContent = dets.about;

    });

}

function applyFilters(){

    let searchValue = search.value.toLowerCase();

    let selected = [];

    checkboxes.forEach(function(cb){

        if(cb.checked){
            selected.push(cb.value);
        }

    });

    let filtered = profiles.filter(function(user){

        let nameMatch = user.name.toLowerCase().includes(searchValue);

        let designationMatch =
            selected.length === 0 ||
            selected.includes(user.designation);

        return nameMatch && designationMatch;

    });

    displayCards(filtered);

}

// Show all cards
displayCards(profiles);

// Search
search.addEventListener("input", applyFilters);

// Checkbox Filter
checkboxes.forEach(function(box){

    box.addEventListener("change", applyFilters);

});