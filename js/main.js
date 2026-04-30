// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
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

// Observe all cards and sections (skip catalog page to avoid conflicts with dynamic products)
if (!window.location.pathname.includes('catalog.html')) {
    document.querySelectorAll('.card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Form validation (for contacts page)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Reset errors
        document.querySelectorAll('.form-error').forEach(el => el.remove());
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
            el.style.borderColor = 'rgba(201, 169, 98, 0.3)';
        });
        
        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Будь ласка, введіть ваше ім\'я');
            isValid = false;
        }
        
        // Validate phone
        if (!phone.value.trim()) {
            showError(phone, 'Будь ласка, введіть ваш телефон');
            isValid = false;
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(phone.value)) {
            showError(phone, 'Будь ласка, введіть коректний номер телефону');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Будь ласка, введіть ваш email');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showError(email, 'Будь ласка, введіть коректний email');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Будь ласка, введіть повідомлення');
            isValid = false;
        }
        
        if (isValid) {
            // Show success modal
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.classList.add('active');
                contactForm.reset();
            }
        }
    });
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = document.createElement('span');
    error.className = 'form-error';
    error.textContent = message;
    error.style.color = '#ff6b6b';
    error.style.fontSize = '12px';
    error.style.marginTop = '4px';
    error.style.display = 'block';
    formGroup.appendChild(error);
    input.style.borderColor = '#ff6b6b';
}

// Modal close
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalBtn = document.querySelector('.modal-btn');

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (modalBtn) {
    modalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Filter functionality (for catalog page)
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Product gallery (for product page)
const galleryThumbs = document.querySelectorAll('.gallery-thumb');
const mainImage = document.querySelector('.main-image');

if (galleryThumbs.length > 0 && mainImage) {
    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            galleryThumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = thumb.dataset.image;
        });
    });
}
