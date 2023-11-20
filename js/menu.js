const menuToggle = document.querySelector(".menu-toggle");
const menuSidebar = document.querySelector(".menu-sidebar");

menuToggle.addEventListener("click", function () {
    if (menuSidebar.style.width === "0px") {
        menuSidebar.style.width = "250px";
    } else {
        menuSidebar.style.width = "0px";
    }
});

//Mostras las imagenes de la galeria
function IMGaMostrar(image) {
    const DivAmpliado = document.getElementById("DivAmpliado");
    const ImagenAmpliadaSrc = document.getElementById("ImagenAmpliadaSrc");

    ImagenAmpliadaSrc.src = image.src;
    DivAmpliado.style.display = "flex";
}
function CerrarDiv() {
    const DivAmpliado = document.getElementById("DivAmpliado");
    DivAmpliado.style.display = "none";
}

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});
