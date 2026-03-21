// Loader //
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 500); 
});

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

// Typing Effect //
const texts = ["English Language Learning", "Foundation Phase Teaching", "Learning Interface Development"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typing').textContent = letter;

  if(letter.length === currentText.length){
    setTimeout(()=>{
      index = 0;
      count++;
      type();
    }, 1500);
  } else {
    setTimeout(type, 150);
  }
})();

// Contact form //
const form = document.querySelector("#contact form");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  const response = await fetch("https://formspree.io/f/yamkela-lusithi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Temporarily unavailable, please send me an email using this address 'lusithi.dev@gmail.com'!");
  }
});
