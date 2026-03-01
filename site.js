const page = document.body.dataset.page;

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.dataset.page === page) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
