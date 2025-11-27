// ===========================
// GLOBAL SCROLLREVEAL SETTINGS
// ===========================
const sr = ScrollReveal({
  distance: "50px",
  duration: 1000,
  delay: 0,
  reset: false,
  opacity: 0,
  easing: "ease-out",
});

// ===========================
// HERO SECTION ANIMATIONS
// ===========================
sr.reveal(".image-card", { origin: "left" });
sr.reveal(".text-content", { origin: "right" });
sr.reveal(".welcome-line", { origin: "top" });

// ===========================
// PROJECTS SECTION
// ===========================
sr.reveal(".projects h2, .projects p", {
  origin: "top",
});
sr.reveal(".project-card", {
  origin: "bottom",
});
sr.reveal(".project-image", {
  origin: "left",
});
sr.reveal(".project-info", {
  origin: "right",
});
sr.reveal(".tect-stack span", {
  origin: "bottom",
});
sr.reveal(".project-card .buttons a", {
  origin: "bottom",
  distance: "20px",
});

// ===========================
// TIMELINE SECTION
// ===========================
sr.reveal(".timeline-section .title", { origin: "top" });
sr.reveal(".timeline-section .subtitle", { origin: "bottom" });
sr.reveal(".timeline-item.left", {
  origin: "left",
  distance: "60px",
});
sr.reveal(".timeline-item.right", {
  origin: "right",
  distance: "60px",
});
sr.reveal(".cta", { origin: "bottom" });
