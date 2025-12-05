/* ===========================
   Rainbow Snake Setup
=========================== */
const rainbowContainer = document.getElementById("rainbow-snake");
const rainbowDots = [];
let hue = 0;

for (let i = 0; i < 20; i++) {
  const dot = document.createElement("div");
  dot.className = "rainbow-dot";
  dot.style.setProperty("--size", 18 - i * 2 + "px"); // bigger dots
  rainbowContainer.appendChild(dot);
  rainbowDots.push({ el: dot, x: innerWidth / 2, y: innerHeight / 2 });
}

/* ===========================
   Neon Snake Setup
=========================== */
const neonContainer = document.getElementById("neon-snake");
const neonDots = [];

for (let i = 0; i < 20; i++) {
  const dot = document.createElement("div");
  dot.className = "neon-dot";
  dot.style.setProperty("--size", 18 - i * 2 + "px");
  neonContainer.appendChild(dot);
  neonDots.push({ el: dot, x: innerWidth / 2, y: innerHeight / 2 });
}

/* ===========================
   Mouse Position
=========================== */
let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* ===========================
   Animations
=========================== */
function animateRainbow() {
  let prevX = mouseX;
  let prevY = mouseY;

  hue = (hue + 4) % 360;

  rainbowDots.forEach((dot, i) => {
    dot.x += (prevX - dot.x) * 0.2;
    dot.y += (prevY - dot.y) * 0.2;

    dot.el.style.left = dot.x + "px";
    dot.el.style.top = dot.y + "px";
    dot.el.style.background = `hsl(${(hue + i * 12) % 360}, 100%, 50%)`;

    prevX = dot.x;
    prevY = dot.y;
  });

  requestAnimationFrame(animateRainbow);
}

function animateNeon() {
  let prevX = mouseX;
  let prevY = mouseY;

  neonDots.forEach((dot) => {
    dot.x += (prevX - dot.x) * 0.2;
    dot.y += (prevY - dot.y) * 0.2;

    dot.el.style.left = dot.x + "px";
    dot.el.style.top = dot.y + "px";

    prevX = dot.x;
    prevY = dot.y;
  });

  requestAnimationFrame(animateNeon);
}

animateRainbow();
animateNeon();

/* ===========================
   TOGGLE (Icon Switcher)
=========================== */
function updateCursor(mode) {
  document.body.style.cursor = "none";

  // Update icon highlight
  document.querySelectorAll(".cursor-icons .icon").forEach((icon) => {
    icon.classList.remove("active");
    if (icon.dataset.cursor === mode) {
      icon.classList.add("active");
    }
  });

  if (mode === "rainbow") {
    rainbowContainer.style.display = "block";
    neonContainer.style.display = "none";
  }

  if (mode === "neon") {
    rainbowContainer.style.display = "none";
    neonContainer.style.display = "block";
  }
}

document.querySelectorAll(".cursor-icons .icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    updateCursor(icon.dataset.cursor);
  });
});

// Start with rainbow by default
updateCursor("rainbow");

// ==========================

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  document.body.style.cursor = "auto";
  document.getElementById("rainbow-snake").style.display = "none";
  document.getElementById("neon-snake").style.display = "none";
}

// =====================

// Detect mobile device
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

if (isMobile) {
  const container = document.getElementById("tap-effects");

  document.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];

    const circle = document.createElement("div");
    circle.className = "tap-circle";

    circle.style.left = touch.clientX + "px";
    circle.style.top = touch.clientY + "px";

    container.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
}

