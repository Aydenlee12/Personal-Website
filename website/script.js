// script.js

// ===== Dynamic load of About Me section =====
fetch('about.html')
  .then(response => response.text())
  .then(html => {
    const placeholder = document.getElementById('about-placeholder');
    if (placeholder) {
      placeholder.innerHTML = html;

      // ===== Scroll-in / Scroll-out animation for About Me image + description =====
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate in
            entry.target.classList.remove('opacity-0', 'translate-x-[-50px]', 'translate-x-[50px]');
          } else {
            // Animate out when leaving viewport
            entry.target.classList.add('opacity-0');
            if (entry.target.id === 'profile-image') {
              entry.target.classList.add('translate-x-[-50px]');
              entry.target.classList.remove('translate-x-[50px]');
            } else if (entry.target.id === 'profile-text') {
              entry.target.classList.add('translate-x-[50px]');
              entry.target.classList.remove('translate-x-[-50px]');
            }
          }
        });
      }, { threshold: 0.5 });

      const elements = [
        document.getElementById('profile-image'),
        document.getElementById('profile-text')
      ].filter(el => el !== null);

      elements.forEach(el => observer.observe(el));
    }
  })
  .catch(err => console.error('Error loading About Me section:', err));

  // ===== Dynamic load of Projects section =====
fetch('projects.html')
  .then(response => response.text())
  .then(html => {
    const placeholder = document.getElementById('projects');
    if (placeholder) {
      placeholder.innerHTML = html;

      // Optional: Add scroll animations for each project card
      const projectCards = placeholder.querySelectorAll('.project-card');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('transition', 'duration-700', 'ease-out');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-12');
          }
        });
      }, { threshold: 0.3 });

      projectCards.forEach(card => observer.observe(card));
    }
  })
  .catch(err => console.error('Error loading Projects section:', err));

  // ===== Dynamic load of Contact section =====
fetch('contact.html')
  .then(response => response.text())
  .then(html => {
    const placeholder = document.getElementById('contact');
    if (placeholder) {
      placeholder.innerHTML = html;

      // Optional: Add fade-in animation for each contact info box
      const contactCards = placeholder.querySelectorAll('.contact-card');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('transition', 'duration-700', 'ease-out');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-8');
          }
        });
      }, { threshold: 0.2 });

      contactCards.forEach(card => observer.observe(card));
    }
  })
  .catch(err => console.error('Error loading Contact section:', err));


// ===== Navbar scroll color change =====
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  if (!navbar || !heroSection) return;

  if (window.scrollY > heroSection.offsetHeight - 50) {
    navbar.classList.add('bg-black');
    navbar.querySelectorAll('a').forEach(a => a.classList.replace('text-black','text-white'));
    const div = navbar.querySelector('div');
    if (div) div.classList.replace('border-black','border-white');
  } else {
    navbar.classList.remove('bg-black');
    navbar.querySelectorAll('a').forEach(a => a.classList.replace('text-white','text-black'));
    const div = navbar.querySelector('div');
    if (div) div.classList.replace('border-white','border-black');
  }
});
