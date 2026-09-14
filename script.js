const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.feature-card, .platform-steps article, .charging-copy, .system-copy, .intro-copy').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
