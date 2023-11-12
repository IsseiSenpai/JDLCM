const menuToggle = document.querySelector(".menu-toggle");
const menuSidebar = document.querySelector(".menu-sidebar");

menuToggle.addEventListener("click", function () {
    if (menuSidebar.style.width === "0px") {
        menuSidebar.style.width = "250px";
    } else {
        menuSidebar.style.width = "0px";
    }
});

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

