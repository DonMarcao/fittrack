/**
 * Utils Module
 * Helper functions used across the application
 */

const Utils = {
    /**
     * Generate unique ID
     * @returns {string} Unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    /**
     * Format date to readable string
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date (e.g., "Jan 12, 2026")
     */
    formatDate(date) {
        const d = new Date(date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return d.toLocaleDateString('en-US', options);
    },

    /**
     * Format date to input value (YYYY-MM-DD)
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date for input
     */
    formatDateForInput(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    /**
     * Get today's date as YYYY-MM-DD
     * @returns {string} Today's date
     */
    getTodayDate() {
        return this.formatDateForInput(new Date());
    },

    /**
     * Validate number (positive)
     * @param {number|string} value - Value to validate
     * @returns {boolean} Is valid
     */
    isValidNumber(value) {
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
    },

    /**
     * Validate required field
     * @param {string} value - Value to validate
     * @returns {boolean} Is valid
     */
    isRequired(value) {
        return value !== null && value !== undefined && value.toString().trim() !== '';
    },

    /**
     * Sort workouts by date (newest first)
     * @param {Array} workouts - Array of workouts
     * @returns {Array} Sorted workouts
     */
    sortByDateDesc(workouts) {
        return [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    /**
     * Sort workouts by date (oldest first)
     * @param {Array} workouts - Array of workouts
     * @returns {Array} Sorted workouts
     */
    sortByDateAsc(workouts) {
        return [...workouts].sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    /**
     * Filter workouts by exercise name
     * @param {Array} workouts - Array of workouts
     * @param {string} query - Search query
     * @returns {Array} Filtered workouts
     */
    filterByExercise(workouts, query) {
        if (!query) return workouts;
        
        const lowerQuery = query.toLowerCase();
        return workouts.filter(w => 
            w.exercise.toLowerCase().includes(lowerQuery)
        );
    },

    /**
     * Filter workouts by date range
     * @param {Array} workouts - Array of workouts
     * @param {string} range - 'week', 'month', 'year', or 'all'
     * @returns {Array} Filtered workouts
     */
    filterByDateRange(workouts, range) {
        if (range === 'all') return workouts;
        
        const now = new Date();
        const cutoffDate = new Date();
        
        switch (range) {
            case 'week':
                cutoffDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                cutoffDate.setDate(now.getDate() - 30);
                break;
            case 'year':
                cutoffDate.setFullYear(now.getFullYear() - 1);
                break;
            default:
                return workouts;
        }
        
        return workouts.filter(w => new Date(w.date) >= cutoffDate);
    },

    /**
     * Get unique exercises from workouts
     * @param {Array} workouts - Array of workouts
     * @returns {Array} Unique exercise names
     */
    getUniqueExercises(workouts) {
        const exercises = workouts.map(w => w.exercise);
        return [...new Set(exercises)].sort();
    },

    /**
     * Calculate total volume (sets × reps × weight)
     * @param {Object} workout - Workout object
     * @returns {number} Total volume
     */
    calculateVolume(workout) {
        return workout.sets * workout.reps * workout.weight;
    },

    /**
     * Sanitize HTML to prevent XSS
     * @param {string} text - Text to sanitize
     * @returns {string} Sanitized text
     */
    sanitizeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    /**
     * Debounce function
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Make available globally
window.Utils = Utils;