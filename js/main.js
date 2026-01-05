/* ===============================
             ABOUT
================================ */

const aboutObserverTarget = document.getElementById("about-observer");
const aboutImage = document.getElementById("about-image");
const aboutContent = document.getElementById("about-content");

if (aboutObserverTarget) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        
        aboutImage.classList.remove("opacity-0", "-translate-x-12");
        aboutImage.classList.add("opacity-100", "translate-x-0");

        
        aboutContent.classList.remove("opacity-0", "translate-x-12");
        aboutContent.classList.add("opacity-100", "translate-x-0");

        observer.disconnect(); 
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(aboutObserverTarget);
}



/* ===============================
       MENU DATA 
================================ */

const categories = [
  { id: "all", name: "Tous" },
  { id: "entrees", name: "Entrées" },
  { id: "plats", name: "Plats" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = [
  {
    image: "assets/dish-seafood.jpg",
    title: "Langoustine Royale",
    description:
      "Langoustine de Bretagne, émulsion de combava, caviar osciètre, voile de pomme verte",
    price: "68€",
    category: "entrees",
    categoryLabel: "Entrée",
  },
  {
    image: "assets/dish-vegetables.jpg",
    title: "Jardin de Légumes",
    description:
      "Légumes du potager, condiments aux herbes fraîches, fleurs comestibles, huile d'olive grand cru",
    price: "52€",
    category: "entrees",
    categoryLabel: "Entrée",
  },
  {
    image: "assets/dish-meat.jpg",
    title: "Filet de Bœuf Wagyu",
    description:
      "Wagyu A5 maturé 45 jours, sauce périgueux, purée truffée, jus corsé",
    price: "145€",
    category: "plats",
    categoryLabel: "Plat",
  },
  {
    image: "assets/dish-seafood.jpg",
    title: "Homard Bleu",
    description:
      "Homard de Chausey, beurre blanc aux agrumes, légumes de saison glacés",
    price: "125€",
    category: "plats",
    categoryLabel: "Plat",
  },
  {
    image: "assets/dish-dessert.jpg",
    title: "Sphère Chocolat",
    description:
      "Chocolat grand cru Valrhona, cœur praliné noisette, éclats de feuille d'or",
    price: "32€",
    category: "desserts",
    categoryLabel: "Dessert",
  },
  {
    image: "assets/dish-vegetables.jpg",
    title: "Fraîcheur Exotique",
    description:
      "Sorbet passion, mangue fraîche, crémeux coco, tuile croustillante",
    price: "28€",
    category: "desserts",
    categoryLabel: "Dessert",
  },
];




const menuObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document.getElementById("menu-header")?.classList.remove("opacity-0", "translate-y-8");
      document.getElementById("menu-filters")?.classList.remove("opacity-0", "translate-y-8");
      document.getElementById("menu-cta")?.classList.remove("opacity-0");
      menuObserver.disconnect();
    }
  },
  { threshold: 0.2 }
);

menuObserver.observe(document.getElementById("menu-section"));
