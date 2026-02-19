// Updated: 2026-02-18
// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle — targets .nav-right
const toggle = document.querySelector(".nav-toggle");
const navRight = document.querySelector(".nav-right");

if (toggle && navRight) {
  toggle.addEventListener("click", function () {
    navRight.classList.toggle("is-open");
    const isOpen = navRight.classList.contains("is-open");
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navRight.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navRight.classList.remove("is-open");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}
