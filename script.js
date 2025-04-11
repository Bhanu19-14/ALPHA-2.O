
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
// Toggle mobile navbar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('storyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const thankYou = document.getElementById('thankYouMessage');
  thankYou.textContent = "🌟 Thank you for sharing your story!";
  thankYou.style.color = "#4CAF50";
  this.reset();
});
