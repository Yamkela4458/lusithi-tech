// Typing Effect
const text = "Digital Learning | Instructional Design | eLearning Development";
const typingEl = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (!typingEl) return;

  typingEl.textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    requestAnimationFrame(typeEffect);
  }
}
typeEffect();


// Fade-in Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// Header Scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow");
  } else {
    header.classList.remove("bg-white", "shadow");
  }
});


// Contact Form
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});