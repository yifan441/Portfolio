// Scrolling effect
document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('.js-scroll-link');

  scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = scrollLink.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});

// Heart icon "liking" effect
let isFilled = false;
const heart = document.querySelector('.heart-icon');
heart.addEventListener('click', handleHeart);

function handleHeart() {
  if (isFilled) {
    heart.src = 'assets/icons/heart-empty.svg';
  } else {
    heart.src = 'assets/icons/heart-filled.svg';
  }
  isFilled = !isFilled;
}
