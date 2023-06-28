function showAlert() { alert('! Hola, Bienvenido al Hotel Bella Montaña');}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")})