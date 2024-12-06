// Frustrer avec des pop-ups
window.onload = function () {
  alert("Bienvenue dans la pire expérience utilisateur possible !");
};

// La case à cocher se décoche toute seule
const termsCheckbox = document.getElementById("terms");
termsCheckbox.addEventListener("click", () => {
  setTimeout(() => {
    termsCheckbox.checked = false;
  }, 500);
});

// Soumission de formulaire toujours rejetée
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Erreur : ce formulaire est inutile !");
});

// Lien "Accueil" suit la souris
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.position = "absolute";
    link.style.top = Math.random() * window.innerHeight + "px";
    link.style.left = Math.random() * window.innerWidth + "px";
  });
});
setInterval(() => {
  const scale = Math.random() * 2 + 0.5; // Zoom entre 0.5x et 2.5x
  document.body.style.transform = `scale(${scale})`;
}, 2000);
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 50;
  const y = (e.clientY / window.innerHeight) * 50;
  document.body.style.transform = `translate(-${x}px, -${y}px)`;
});
