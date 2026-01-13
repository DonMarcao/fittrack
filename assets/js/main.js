/**
 * Main Application
 * Initializes the app and handles core functionality
 */

const App = {
    // Current page
    currentPage: '',

    /**
     * Initialize the application
     */
    init() {
        this.detectPage();
        this.loadTheme();
        this.setupEventListeners();
        this.displayCurrentDate();
        
        console.log('FitTrack initialized');
    },

    /**
     * Detect which page we're on
     */
    detectPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        if (page === 'index.html' || page === '') {
            this.currentPage = 'dashboard';
        } else if (page === 'history.html') {
            this.currentPage = 'history';
        } else if (page === 'charts.html') {
            this.currentPage = 'charts';
        } else if (page === 'calculators.html') {
            this.currentPage = 'calculators';
        }
        
        console.log('Current page:', this.currentPage);
    },

    /**
     * Load and apply theme
     */
    loadTheme() {
        const theme = FitTrackStorage.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
    },

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Theme toggle (if button exists)
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Handle escape key for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    },

    /**
     * Toggle theme
     */
    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        FitTrackStorage.saveTheme(newTheme);
        
        console.log('Theme changed to:', newTheme);
    },

    /**
     * Display current date in date inputs
     */
    displayCurrentDate() {
        const dateInputs = document.querySelectorAll('input[type="date"]');
        const today = Utils.getTodayDate();
        
        dateInputs.forEach(input => {
            if (!input.value) {
                input.value = today;
            }
        });
    },

    /**
     * Close all open modals
     */
    closeAllModals() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.classList.add('closing');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    },

    /**
     * Show loading state
     * @param {HTMLElement} element - Element to show loading on
     */
    showLoading(element) {
        if (element) {
            element.classList.add('loading');
            element.disabled = true;
        }
    },

    /**
     * Hide loading state
     * @param {HTMLElement} element - Element to hide loading on
     */
    hideLoading(element) {
        if (element) {
            element.classList.remove('loading');
            element.disabled = false;
        }
    },

    /**
     * Get all workouts
     * @returns {Array} Workouts
     */
    getWorkouts() {
        return e.getWorkouts();
    },

    /**
     * Refresh the current page display
     */
    refresh() {
        switch (this.currentPage) {
            case 'dashboard':
                if (window.Dashboard && Dashboard.render) {
                    Dashboard.render();
                }
                break;
            case 'history':
                if (window.WorkoutHistory && WorkoutHistory.render) {
                    WorkoutHistory.render();
                }
                break;
            case 'charts':
                if (window.Charts && Charts.render) {
                    Charts.render();
                }
                break;
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Make App available globally
window.App = App;