/* ===============================
   FOOTER ANIMATION
================================ */

const footerObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document
        .querySelectorAll(".footer-item")
        .forEach((el) => {
          el.classList.remove("opacity-0", "translate-y-4");
        });

      document
        .getElementById("footer-bottom")
        .classList.remove("opacity-0");

      footerObserver.disconnect();
    }
  },
  { threshold: 0.1 }
);

footerObserver.observe(
  document.getElementById("footer-observer")
);
