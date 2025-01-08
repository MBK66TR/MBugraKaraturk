// Header and Footer loading functions
async function loadHeader() {
    const headerElement = document.querySelector('#header-placeholder');
    try {
        const response = await fetch('/components/header.html');
        const html = await response.text();
        headerElement.innerHTML = html;
        initializeHeaderScripts();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

async function loadFooter() {
    const footerElement = document.querySelector('#footer-placeholder');
    try {
        const response = await fetch('/components/footer.html');
        const html = await response.text();
        footerElement.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize header scripts
function initializeHeaderScripts() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Highlight active page
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
}); 