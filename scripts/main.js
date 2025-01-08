// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Project buttons functionality
    setupProjectButtons();
});

// Setup project buttons and links
function setupProjectButtons() {
    // Demo buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        if (button.textContent === 'Play Demo') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const gameTitle = button.closest('.project-card').querySelector('h3').textContent;
                // Replace with your actual demo URLs
                const demoUrls = {
                    'Game Title 1': 'https://demo-url-for-game1.com',
                    'Game Title 2': 'https://demo-url-for-game2.com'
                };
                
                if (demoUrls[gameTitle]) {
                    window.open(demoUrls[gameTitle], '_blank');
                }
            });
        }
    });

    // Platform buttons (Steam, Itch.io)
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent === 'Steam' || button.textContent === 'Itch.io') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const gameTitle = button.closest('.project-card').querySelector('h3').textContent;
                // Replace with your actual platform URLs
                const platformUrls = {
                    'Game Title 1': 'https://store.steampowered.com/your-game1',
                    'Game Title 2': 'https://your-username.itch.io/your-game2'
                };
                
                if (platformUrls[gameTitle]) {
                    window.open(platformUrls[gameTitle], '_blank');
                }
            });
        }
    });

    // Contact button in hero section
    const contactButton = document.querySelector('a[href="#contact"]');
    contactButton?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact.html';
    });

    // Projects button in hero section
    const projectsButton = document.querySelector('a[href="projects.html"]');
    projectsButton?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'projects.html';
    });
} 