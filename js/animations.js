/* =============================================
   SCROLL REVEAL — Intersection Observer
   ============================================= */

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* =============================================
   TYPING EFFECT
   ============================================= */

function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const roles = [
    'Data Analyst',
    'Data Scientist',
    'iOS Developer',
    'Python Developer',
    'SQL Expert',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 120;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      delay = 60;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      delay = 110;
    }

    if (!isDeleting && charIndex === current.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  // Start after a short delay
  setTimeout(type, 800);
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 16);
}

/* =============================================
   SKILL BAR ANIMATION
   ============================================= */

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.dataset.width;
          bar.style.width = width + '%';
          setTimeout(() => bar.classList.add('animated'), 1100);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* =============================================
   INIT ALL
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initTypingEffect();
  initCounters();
  initSkillBars();
});
