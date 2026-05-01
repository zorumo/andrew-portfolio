/* Smooth Scroll helper */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Mobile Menu */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

/* Dark/Light Mode Toggle */
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}

/* Accordion (Collapsible Skills) */
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = content.style.maxHeight;

  document
    .querySelectorAll(".accordion-content")
    .forEach((c) => (c.style.maxHeight = null));

  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

/* Typing Animation */
const typingPhrases = [
  "Mechanical Engineering Student",
  "Researcher",
  "Designer",
  "Problem Solver",
  "Builder of Cool Things",
];

let typingIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const typed = document.getElementById("typed");
  const current = typingPhrases[typingIndex];

  if (!deleting) {
    typed.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typed.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      typingIndex = (typingIndex + 1) % typingPhrases.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* Project Carousel */
let carouselIndex = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");

  carouselIndex += direction;

  if (carouselIndex < 0) carouselIndex = items.length - 1;
  if (carouselIndex >= items.length) carouselIndex = 0;

  carousel.style.transform = `translateX(-${carouselIndex * 320}px)`;
}

/* Project Modal Viewer */
const projects = [
  {
    title: "Engineering Project 1",
    description:
      "Detailed description of Engineering Project 1. Explain goals, tools, and outcomes.",
    link: "#",
  },
  {
    title: "Design Project 2",
    description:
      "Detailed description of Design Project 2. Highlight design process and impact.",
    link: "#",
  },
  {
    title: "Research Project 3",
    description:
      "Detailed description of Research Project 3. Summarize methods and findings.",
    link: "#",
  },
];

function openModal(index) {
  const modal = document.getElementById("projectModal");
  document.getElementById("modalTitle").textContent = projects[index].title;
  document.getElementById("modalDescription").textContent =
    projects[index].description;
  document.getElementById("modalLink").href = projects[index].link;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* Smooth Scroll Fade-In Animation */
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

fadeSections.forEach((section) => observer.observe(section));

/* Smooth scroll for all navbar links */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    document.getElementById("navLinks").classList.remove("open");
  });
});
