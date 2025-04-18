  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;

  darkModeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('darkMode', html.classList.contains('dark'));
  });

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          const yOffset = -60; // Adjust this value based on your header height
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({top: y, behavior: 'smooth'});

          // Close mobile menu if open
          if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
          }
      });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
  });

  // Form submission (replace with your own logic)
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (Replace this with your own logic)');
      form.reset();
  });