// Navbar Toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
});

// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-play slideshow
setInterval(nextSlide, 5000);
