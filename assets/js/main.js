/**
 * Main Application Module
 * Handles global app initialization and utilities
 */

const App = {
    currentPage: '',

    /**
     * Initialize application
     */
    init() {
        console.log('FitTrack initialized');
        
        this.detectPage();
        this.loadTheme();
        this.setupEventListeners();
        this.displayCurrentDate();
    },

    /**
     * Detect current page
     */
    detectPage() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);

        if (filename === '' || filename === 'index.html') {
            this.currentPage = 'dashboard';
        } else if (filename === 'history.html') {
            this.currentPage = 'history';
        } else if (filename === 'charts.html') {
            this.currentPage = 'charts';
        } else if (filename === 'calculators.html') {
            this.currentPage = 'calculators';
        }

        console.log('Current page:', this.currentPage);
    },

    /**
     * Load saved theme
     */
    loadTheme() {
        const savedTheme = FitTrackStorage.getTheme();
        const theme = savedTheme || 'light';
        
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update toggle button if exists
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    },

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Close modals on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    },

    /**
     * Toggle theme (light/dark)
     */
    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        FitTrackStorage.saveTheme(newTheme);
        
        // Update toggle button text
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
        }
        
        console.log('Theme changed to:', newTheme);
    },

    /**
     * Display current date in forms
     */
    displayCurrentDate() {
        const dateInputs = document.querySelectorAll('input[type="date"]');
        const today = Utils.getTodayDate();
        
        dateInputs.forEach(input => {
            if (!input.value) {
                input.value = today;
                input.max = today; // Prevent future dates
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
            document.body.classList.remove('modal-open');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    },

    /**
     * Show loading indicator
     */
    showLoading() {
        let loader = document.getElementById('global-loader');
        
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'global-loader';
            loader.className = 'global-loader';
            loader.innerHTML = `
                <div class="loader-spinner"></div>
                <p>Loading...</p>
            `;
            document.body.appendChild(loader);
        }
        
        loader.classList.add('show');
    },

    /**
     * Hide loading indicator
     */
    hideLoading() {
        const loader = document.getElementById('global-loader');
        if (loader) {
            loader.classList.remove('show');
        }
    },

    /**
     * Get all workouts (shortcut)
     */
    getWorkouts() {
        return Workout.getAllWorkouts();
    },

    /**
     * Refresh current page
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