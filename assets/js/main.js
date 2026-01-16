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
        
        // Check browser compatibility
        this.checkBrowserCompatibility();
        
        this.detectPage();
        this.loadTheme();
        this.setupEventListeners();
        this.displayCurrentDate();
    },

    /**
     * Check browser compatibility
     */
    checkBrowserCompatibility() {
        // Check for required features
        const requiredFeatures = {
            'localStorage': typeof(Storage) !== 'undefined',
            'JSON': typeof JSON !== 'undefined',
            'Promise': typeof Promise !== 'undefined'
        };

        const missingFeatures = Object.keys(requiredFeatures).filter(
            feature => !requiredFeatures[feature]
        );

        if (missingFeatures.length > 0) {
            console.warn('Browser missing features:', missingFeatures);
        }

        // Log browser info
        console.log('Browser:', navigator.userAgent);
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

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // ESC - Close modals
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
            
            // Ctrl/Cmd + K - Quick add workout
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (this.currentPage === 'dashboard' || this.currentPage === 'history') {
                    const addBtn = document.getElementById('add-workout-btn') || 
                                   document.querySelector('.btn-primary');
                    if (addBtn && addBtn.textContent.includes('Add')) {
                        addBtn.click();
                    }
                }
            }
            
            // Ctrl/Cmd + E - Export CSV
            if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
                e.preventDefault();
                if (this.currentPage === 'dashboard' || this.currentPage === 'history') {
                    const exportBtn = document.getElementById('export-btn');
                    if (exportBtn) {
                        exportBtn.click();
                    }
                }
            }
            
            // Ctrl/Cmd + / - Show shortcuts help
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.showKeyboardShortcuts();
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
    },

    /**
     * Show keyboard shortcuts help modal
     */
    showKeyboardShortcuts() {
        // Check if modal already exists
        if (document.getElementById('shortcuts-modal')) {
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'shortcuts-modal';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2 class="modal-title">⌨️ Keyboard Shortcuts</h2>
                    <button class="modal-close" data-action="close">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--background-hover); border-radius: 4px;">
                            <span><strong>Ctrl/Cmd + K</strong></span>
                            <span>Quick add workout</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--background-hover); border-radius: 4px;">
                            <span><strong>Ctrl/Cmd + E</strong></span>
                            <span>Export CSV</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--background-hover); border-radius: 4px;">
                            <span><strong>Ctrl/Cmd + /</strong></span>
                            <span>Show shortcuts</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--background-hover); border-radius: 4px;">
                            <span><strong>ESC</strong></span>
                            <span>Close modal</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: var(--background-hover); border-radius: 4px;">
                            <span><strong>Enter</strong></span>
                            <span>Submit form (in modal)</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" data-action="close">Got it!</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.classList.add('modal-open');

        // Setup close buttons
        const closeButtons = modal.querySelectorAll('[data-action="close"]');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('closing');
                document.body.classList.remove('modal-open');
                setTimeout(() => modal.remove(), 300);
            });
        });

        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('closing');
                document.body.classList.remove('modal-open');
                setTimeout(() => modal.remove(), 300);
            }
        });
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Make App available globally
window.App = App;