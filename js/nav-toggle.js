// Opens and closes the navigation menu on small screens.
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navMenu.style.display = isOpen ? "" : "flex";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});
