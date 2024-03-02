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
