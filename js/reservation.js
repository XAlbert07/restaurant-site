/* ===============================
   RESERVATION 
================================ */

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document.getElementById("reservation-header")
        .classList.remove("opacity-0", "translate-y-8");

      document.getElementById("reservation-form")
        .classList.remove("opacity-0", "translate-y-12");

      document.getElementById("reservation-contact")
        .classList.remove("opacity-0");

      observer.disconnect();
    }
  },
  { threshold: 0.1 }
);

observer.observe(document.getElementById("reservation-observer"));

/* ===============================
   FORM SUBMIT
================================ */

document
  .getElementById("reservation-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.target).entries()
    );

    console.log("Reservation submitted:", data);

    alert("Réservation envoyée avec succès !");
    e.target.reset();
  });
