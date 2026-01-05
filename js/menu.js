import { attach3DEffect } from "./menu-card-3d.js";

/* ===============================
   DATA
================================ */

const categories = [
  { id: "all", name: "Tous" },
  { id: "entrees", name: "Entrées" },
  { id: "plats", name: "Plats" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = [
  {
    image: "../assets/dishes/dish-seafood.jpg",
    title: "Langoustine Royale",
    description:
      "Langoustine de Bretagne, émulsion de combava, caviar osciètre, voile de pomme verte",
    price: "68€",
    category: "entrees",
    categoryLabel: "Entrée",
  },
  {
    image: "../assets/dishes/dish-vegetables.jpg",
    title: "Jardin de Légumes",
    description:
      "Légumes du potager, condiments aux herbes fraîches, fleurs comestibles",
    price: "52€",
    category: "entrees",
    categoryLabel: "Entrée",
  },
  {
    image: "../assets/dishes/dish-meat.jpg",
    title: "Filet de Bœuf Wagyu",
    description:
      "Wagyu A5 maturé 45 jours, sauce périgueux, purée truffée",
    price: "145€",
    category: "plats",
    categoryLabel: "Plat",
  },
  {
    image: "../assets/dishes/dish-seafood.jpg",
    title: "Homard Bleu",
    description:
      "Homard de Chausey, beurre blanc aux agrumes",
    price: "125€",
    category: "plats",
    categoryLabel: "Plat",
  },
  {
    image: "../assets/dishes/dish-dessert.jpg",
    title: "Sphère Chocolat",
    description:
      "Chocolat grand cru Valrhona, cœur praliné noisette",
    price: "32€",
    category: "desserts",
    categoryLabel: "Dessert",
  },
  {
    image: "../assets/dishes/dish-vegetables.jpg",
    title: "Fraîcheur Exotique",
    description:
      "Sorbet passion, mangue fraîche, crémeux coco",
    price: "28€",
    category: "desserts",
    categoryLabel: "Dessert",
  },
];

/* ===============================
   STATE
================================ */

let activeCategory = "all";

const grid = document.getElementById("menu-grid");
const filters = document.getElementById("menu-filters");

/* ===============================
   FILTERS
================================ */

function renderFilters() {
  filters.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.className =
      "px-6 py-2 font-light tracking-widest uppercase text-sm transition-all duration-300 border";

    if (cat.id === activeCategory) {
      btn.classList.add(
        "bg-primary",
        "text-primary-foreground",
        "border-primary"
      );
    } else {
      btn.classList.add(
        "border-primary/30",
        "text-foreground/70",
        "hover:border-primary",
        "hover:text-primary"
      );
    }

    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      renderFilters();
      renderMenu();
    });

    filters.appendChild(btn);
  });
}

/* ===============================
   MENU RENDER (MenuCard3D)
================================ */

function renderMenu() {
  grid.innerHTML = "";

  const items =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  items.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className =
      "menu-card-wrapper opacity-0 translate-y-8 transition-all duration-500";

    wrapper.innerHTML = `
      <div class="menu-card-3d relative group cursor-pointer perspective-1000">
        <div class="glass-card overflow-hidden transition-all duration-300">

          <div class="relative h-56 md:h-64 overflow-hidden">
            <img src="${item.image}" class="w-full h-full object-cover transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent"></div>

            <div class="absolute top-4 left-4 translate-z-40">
              <span class="px-3 py-1 bg-primary/90 text-primary-foreground text-xs tracking-widest uppercase">
                ${item.categoryLabel}
              </span>
            </div>

            <div class="absolute bottom-4 right-4 translate-z-60">
              <span class="font-serif text-2xl text-primary">${item.price}</span>
            </div>
          </div>

          <div class="p-6 translate-z-30">
            <h3 class="font-serif text-xl mb-2">${item.title}</h3>
            <p class="text-foreground/60 text-sm">${item.description}</p>
          </div>

          <div class="card-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"></div>
        </div>

        <div class="card-shadow absolute inset-0 -z-10 bg-primary/5 blur-xl transition-all duration-300"></div>
      </div>
    `;

    grid.appendChild(wrapper);

    const card = wrapper.querySelector(".menu-card-3d");
    attach3DEffect(card);

    setTimeout(() => {
      wrapper.classList.remove("opacity-0", "translate-y-8");
    }, index * 100 + 200);
  });
}

/* ===============================
   INIT
================================ */

renderFilters();
renderMenu();
