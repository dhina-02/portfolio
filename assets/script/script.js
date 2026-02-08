/* ===============================
   NAVBAR ACTIVE + SCROLL EFFECT
================================ */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".nav-container");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    const link = item.querySelector("a");
    if (link.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
}

function toggleNavbarBg() {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
}

window.addEventListener("scroll", () => {
  updateActiveNav();
  toggleNavbarBg();
});

/* ===============================
   SMOOTH SCROLL
================================ */

navItems.forEach((item) => {
  const link = item.querySelector("a");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

/* ===============================
   SCROLL REVEAL (IntersectionObserver)
================================ */

const revealElements = document.querySelectorAll(
  ".about-card, .skill-set, .project-box, .contact-form, .contact-image",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ===============================
   PROJECT CLICK (READY FOR LINKS)
================================ */

// Example: add data-link="https://github.com/..." to project-box
document.querySelectorAll(".project-box").forEach((card) => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});

/* ===============================
   CONTACT FORM VALIDATION
================================ */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "#ef4444";
      } else {
        input.style.borderColor = "#38bdf8";
      }
    });

    if (valid) {
      contactForm.reset();
      alert("✅ Message sent successfully!");
    }
  });
}

/* ===============================
   SCROLL TO TOP BUTTON
================================ */

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.className = "scroll-top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
