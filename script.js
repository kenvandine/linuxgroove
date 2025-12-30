// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.intro-card, .app-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add rainbow trail effect to cursor (optional fun feature)
const colors = ['#FF1B8D', '#A855F7', '#3B82F6', '#06B6D4', '#14B8A6', '#10B981', '#F59E0B'];
let colorIndex = 0;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${colors[colorIndex]};
            pointer-events: none;
            left: ${e.clientX - 5}px;
            top: ${e.clientY - 5}px;
            opacity: 0.6;
            z-index: 9999;
            animation: trailFade 0.8s ease-out forwards;
        `;
        document.body.appendChild(trail);

        colorIndex = (colorIndex + 1) % colors.length;

        setTimeout(() => trail.remove(), 800);
    }
});

// Add CSS for cursor trail animation
const style = document.createElement('style');
style.textContent = `
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for paint splatters
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const splatters = document.querySelectorAll('.paint-splatter');

    splatters.forEach((splatter, index) => {
        const speed = 0.5 + (index * 0.2);
        splatter.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add particle effect on hero section (optional)
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero || window.innerWidth <= 768) return;

    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        animation: particleFloat ${5 + Math.random() * 10}s ease-in-out infinite;
        pointer-events: none;
    `;

    hero.appendChild(particle);

    setTimeout(() => particle.remove(), 15000);
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(1);
        }
        50% {
            opacity: 0.8;
            transform: translateY(-100px) scale(1.5);
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Initialize some particles on load
for (let i = 0; i < 10; i++) {
    setTimeout(createParticle, i * 200);
}

console.log('%c✨ Welcome to linuxgroove! ✨', 'color: #FF1B8D; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with passion for the open source community 🐧', 'color: #06B6D4; font-size: 14px;');
