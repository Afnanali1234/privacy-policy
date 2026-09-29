document.addEventListener('DOMContentLoaded', () => {
  // Back to Top Button Logic
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Table of Contents Active State Logic
  const sections = document.querySelectorAll('.document-content section');
  const navLinks = document.querySelectorAll('.toc-list a');

  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to corresponding link
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.toc-list a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
