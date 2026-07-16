let body = document.body;

// Detect system theme
function setMode() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
    }
}

// Apply theme when page loads
if (localStorage.getItem("theme")) {
    body.classList.remove("dark", "light");
    body.classList.add(localStorage.getItem("theme"));
} else {
    setMode();
}

// Toggle Button (only on Settings page)
let btn = document.querySelector("#theme-btn");

if (btn) {
    btn.addEventListener("click", function () {

        if (body.classList.contains("dark")) {

            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light");

        } else {

            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");

        }

    });
}

// Follow system preference only if user hasn't selected a theme
window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", function () {

    if (!localStorage.getItem("theme")) {
        setMode();
    }

});