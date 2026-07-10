const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !expanded);

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
document.addEventListener("click", (event) => {

    const clickedInsideNav = event.target.closest("nav");

    if (!clickedInsideNav && navMenu.classList.contains("active")) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});