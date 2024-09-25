const burgir = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headerNav.classList.toggle("open");
})