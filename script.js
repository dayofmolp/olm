// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Form Submission
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
});
