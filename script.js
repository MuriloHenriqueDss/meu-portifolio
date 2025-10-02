// =========================
// Scroll suave para navbar
// =========================
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// =========================
// Fade-in ao rolar a página
// =========================
const faders = document.querySelectorAll(".fade-in, .sobre-text, .stack-item, .project-card");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// =========================
// Tooltip de skills ao hover
// =========================
const stackItems = document.querySelectorAll(".stack-item");

stackItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.1)";
    item.style.transition = "0.3s ease";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)";
  });
});

// =========================
// Background de estrelas animadas
// =========================
const body = document.querySelector("body");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.opacity = Math.random();
  star.style.animationDuration = `${Math.random() * 5 + 5}s`;
  body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 10000);
}

setInterval(createStar, 200);



document.body.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--clientX', e.clientX + 'px');
  document.body.style.setProperty('--clientY', e.clientY + 'px');
});

