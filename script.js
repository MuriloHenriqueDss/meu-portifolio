const links = document.querySelectorAll('header nav a');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
}

const heroText = document.querySelector('.hero-text h2');
const text = "Desenvolvedor Front-End apaixonado por criar experiências digitais incríveis.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.addEventListener('load', () => {
  heroText.innerHTML = ""; // Limpa o texto
  typeWriter();
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight;
  
  sections.forEach(section => {
    if (scrollPos > section.offsetTop + 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
