/**
 * Hamburger Menu Module
 * Handles mobile navigation toggle
 */

const HamburgerMenu = {
    /**
     * Initialize hamburger menu
     */
    init() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) {
            console.warn('Hamburger menu elements not found');
            return;
        }

        // Toggle menu on hamburger click
        hamburger.addEventListener('click', () => {
            this.toggle(hamburger, navLinks);
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.close(hamburger, navLinks);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                this.close(hamburger, navLinks);
            }
        });

        // Close menu on window resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 767 && navLinks.classList.contains('active')) {
                this.close(hamburger, navLinks);
            }
        });
    },

    /**
     * Toggle menu open/close
     */
    toggle(hamburger, navLinks) {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    },

    /**
     * Close menu
     */
    close(hamburger, navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    HamburgerMenu.init();
});

// Make available globally
window.HamburgerMenu = HamburgerMenu;