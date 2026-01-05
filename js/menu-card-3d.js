export function attach3DEffect(card) {
  const inner = card.querySelector(".glass-card");
  const glow = card.querySelector(".card-glow");
  const shadow = card.querySelector(".card-shadow");

  let isHover = false;

  card.addEventListener("mouseenter", () => {
    isHover = true;
  });

  card.addEventListener("mouseleave", () => {
    isHover = false;
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    glow.style.opacity = "0";
    shadow.style.opacity = "0.5";
  });

  card.addEventListener("mousemove", (e) => {
    if (!isHover) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    const rotateX = yPct * -10;
    const rotateY = xPct * 10;

    inner.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    glow.style.opacity = "1";
    glow.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(193,149,56,0.18),
        transparent 50%
      )
    `;

    shadow.style.opacity = "1";
  });
}
