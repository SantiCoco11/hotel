function showAlert() { alert('! Hola, Bienvenido al Hotel Bella Montaña');}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")})

    // JavaScript para controlar el slider
const slider = document.querySelector('.slider');
const menuSlider = document.querySelectorAll('.menu-slider a');

function showSlide(slideIndex) {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    menuSlider.forEach((menuItem, index) => {
        if (index === slideIndex) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    });
}

// Mostrar el primer slide al cargar la página
showSlide(0);
