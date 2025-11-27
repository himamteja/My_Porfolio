// ==============================
// 🧭 Portfolio Main Script
// Author: Peyyala Himamteja
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Portfolio JS Loaded Successfully");

  // ======== VARIABLES ========
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  const goToTopButton = document.querySelector(".gototop button a");
  const contactForm = document.querySelector("form");
  const header = document.querySelector("header");

  // ======== 1️⃣ ACTIVE NAV HIGHLIGHT ON SCROLL ========
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });

    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 15px rgba(240, 10, 10, 0.84)";
      header.style.background = "rgba(236, 17, 17, 0.8)";
    } else {
      header.style.boxShadow = "none";
      header.style.background = "rgba(235, 21, 21, 0.92)";
    }
  });

  // ======== 2️⃣ SMOOTH SCROLL FOR NAVIGATION ========
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ======== 3️⃣ GO TO TOP BUTTON ========
  goToTopButton?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ======== 4️⃣ CONTACT FORM VALIDATION ========
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before submitting!");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("📧 Please enter a valid email address.");
        return;
      }

      alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  // ======== 5️⃣ FADE-IN ON SCROLL (for browsers without CSS Scroll Animations) ========
  const fadeElems = document.querySelectorAll(
    ".project-card, .skill-card, .contact-info, .timeline-item"
  );

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition = "all 0.8s ease-out";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElems.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    appearOnScroll.observe(el);
  });
});

// ======= LOGO + TYPING PRELOADER SCRIPT =======
window.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  const preloader = document.getElementById("preloader");

  const text = "Welcome to My Portfolio...";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 300);
    }
  }

  type();
});

const buttons = document.querySelectorAll(".cert-btn");
const cards = document.querySelectorAll(".certificate-card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".cert-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;

    cards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
