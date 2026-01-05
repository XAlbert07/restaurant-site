const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

// ===============================
// SCROLL EFFECT 
// ===============================
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ===============================
// MOBILE MENU TOGGLE
// ===============================
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

// ===============================
// CLOSE MOBILE MENU ON LINK CLICK
// ===============================
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ===============================
// CLICK OUTSIDE TO CLOSE
// ===============================
document.addEventListener("click", (e) => {
  if (
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("hidden");
  }
});
