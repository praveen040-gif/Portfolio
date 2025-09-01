document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-target="carousel"]');
  const cards = document.querySelectorAll('[data-target="card"]');
  const prevBtn = document.querySelector('[data-action="slideLeft"]');
  const nextBtn = document.querySelector('[data-action="slideRight"]');

  if (!carousel || !cards.length) return;

  let currentIndex = 0;
  const totalProjects = cards.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalProjects - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalProjects - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  updateCarousel();
});
