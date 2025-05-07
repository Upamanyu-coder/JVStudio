const lines = [
  "Initializing system...",
  "Connecting to JV Studio...",
  "Loading modules...",
  "Fetching resources...",
  "System ready. Launching UI..."
];



let currentLine = 0;
let charIndex = 0;
const typingArea = document.getElementById("typing-area");
const loader = document.getElementById("code-loader");

function typeLine() {
  if (currentLine >= lines.length) {
    setTimeout(() => {
      loader.style.transition = "opacity 0.5s";
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 500);
    }, 800);
    return;
  }

  let currentText = lines[currentLine];
  typingArea.textContent += currentText[charIndex++] || "";

  if (charIndex < currentText.length) {
    setTimeout(typeLine, 30);
  } else {
    typingArea.textContent += "\n";
    charIndex = 0;
    currentLine++;
    setTimeout(typeLine, 400);
  }
}

window.addEventListener("DOMContentLoaded", typeLine);

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 760) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Planet parallax effect
document.addEventListener('mousemove', (e) => {
    const planet1 = document.querySelector('.planet1');
    const planet2 = document.querySelector('.planet2');
    
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    planet1.style.transform = `translate(${mouseX * 50 - 25}px, ${mouseY * 50 - 25}px)`;
    planet2.style.transform = `translate(${-mouseX * 40 + 20}px, ${-mouseY * 40 + 20}px)`;
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'var(--space)';
        navLinks.style.padding = '1rem';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#mobile-menu-btn') && !e.target.closest('.nav-links')) {
        navLinks.style.display = '';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const rocketBtn = document.getElementById("rocketBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    rocketBtn.style.display = "block";
  } else {
    rocketBtn.style.display = "none";
  }
};

rocketBtn.addEventListener("click", () => {
  rocketBtn.classList.add("launch");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Reset the rocket after 2 seconds
  setTimeout(() => {
    rocketBtn.classList.remove("launch");
  }, 2000);
});



// Request Quote functionality
function openModal() {
  document.getElementById("quoteModal").style.display = "block";
}

function closeModal() {
  document.getElementById("quoteModal").style.display = "none";
}

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const countryCode = document.getElementById("countryCode").value;
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Quote Request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${countryCode} ${phone}\n\n` +
    `Message:\n${message}`
  );

  const mailtoLink = `mailto:jvyapars@gmail.com?cc=yubrajdhakal0707@gmail.com&subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  closeModal();
});