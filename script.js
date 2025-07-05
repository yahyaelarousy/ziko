
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.98)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    }
});

// Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form Handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
        submitBtn.style.background = 'var(--gradient-secondary)';
        
        setTimeout(() => {
            alert('Merci ' + name + ' ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'var(--gradient-primary)';
        }, 1000);
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});

// Button Loading Effect
document.querySelectorAll('.btn-primary, .btn-secondary, .submit-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('submit-btn')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill Category Hover Effect
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project Card Interaction
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic Background Animation
function createFloatingElement() {
    const element = document.createElement('div');
    element.className = 'float-icon';
    element.style.left = Math.random() * 100 + '%';
    element.style.animationDuration = (Math.random() * 10 + 15) + 's';
    element.style.opacity = Math.random() * 0.1 + 0.05;
    
    const icons = ['fas fa-chart-line', 'fas fa-database', 'fas fa-brain', 'fas fa-cog'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    element.innerHTML = `<i class="${randomIcon}"></i>`;
    
    document.querySelector('.floating-elements').appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 20000);
}

// Create floating elements periodically
setInterval(createFloatingElement, 5000);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add initial fade-in to hero
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('fade-in');
    }, 300);
    
    // Stagger section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
        }, index * 200);
    });
});