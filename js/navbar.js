const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let isOpen = false;


function updateNavbarState() {
  if (window.scrollY > 50 || isOpen) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}


window.addEventListener("scroll", updateNavbarState);

// ===============================
// MOBILE MENU TOGGLE
// ===============================
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }

  updateNavbarState();
});


document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    isOpen = false;
    mobileMenu.classList.add("hidden");
    updateNavbarState();
  });
});


document.addEventListener("click", (e) => {
  if (
    isOpen &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    isOpen = false;
    mobileMenu.classList.add("hidden");
    updateNavbarState();
  }
});
