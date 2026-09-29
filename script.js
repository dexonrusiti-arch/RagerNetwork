document.addEventListener("DOMContentLoaded", () => {
  const ctaBtn = document.getElementById("cta-btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      alert("Welcome to Rager Network! Let's go!");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copy-ip-btn");
  const popup = document.getElementById("copy-popup");

  if (copyBtn && popup) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("Play.RagerNetwork.com").then(() => {
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.remove("show");
        }, 2000);
      });
    });
  }
});

// NEWS CAROUSEL
const newsItems = document.querySelectorAll('.news-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function showNews(index) {
  newsItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// ručno menjanje
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    showNews(currentIndex);
    resetAutoSlide();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNews(currentIndex);
    resetAutoSlide();
  });
}

// automatsko menjanje
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNews(currentIndex);
  }, 5000); // menja se na svakih 5 sekundi
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// inicijalno
showNews(currentIndex);
startAutoSlide();
// Scroll animacije
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
tsParticles.load("particles-js", {
  particles: {
    number: { value: 150 },
    color: { value: "#f1f1ee" },
    shape: { type: "square" },
    opacity: { value: 0.5 },
    size: { value: 4 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
