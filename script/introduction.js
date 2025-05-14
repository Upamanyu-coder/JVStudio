const lines = [
    "Initializing system...",
    "Connecting to JV Studio...",
    "Connecting to JV Studio // Profile...",
    "Connecting to JV Studio // Profile // Introductions...",
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
    if (window.scrollY > 128 ) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  

  // Request Quote functionality
  function openModal() {
    document.getElementById("quoteModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("quoteModal").style.display = "none";
  }




  
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
  

  document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
      const movement = (index + 1) * 15; // Speed variation
      const x = (e.clientX - window.innerWidth / 2) / movement;
      const y = (e.clientY - window.innerHeight / 2) / movement;
      bubble.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  

  // Working Principles
    // Animation trigger on scroll
    document.addEventListener('DOMContentLoaded', function() {
      const processCards = document.querySelectorAll('.process-card');
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.1 });
      
      processCards.forEach(card => {
          observer.observe(card);
      });
      
      // Add hover effect to images
      const stepImages = document.querySelectorAll('.step-image');
      stepImages.forEach(image => {
          image.addEventListener('mouseenter', function() {
              this.querySelector('img').style.transform = 'scale(1.1)';
              this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          });
          
          image.addEventListener('mouseleave', function() {
              this.querySelector('img').style.transform = 'scale(1)';
              this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
          });
      });
  });


  // contact page ko automated gmail system check
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Prepare email parameters
    const emailParams = {
      to_email: 'info@jvstudio.com.np',
      cc_email: 'ceo@jvstudio.com.np',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || 'No subject selected',
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send('service_nv44eoj', 'template_8h6u5nw', emailParams)
      .then(function(response) {
        alert('Message sent successfully!');
        document.querySelector('.contact-form').reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
  });