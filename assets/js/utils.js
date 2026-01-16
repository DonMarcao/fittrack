/**
 * Utility Functions Module
 * Helper functions used across the application
 */

const Utils = {
    /**
     * Generate unique ID based on timestamp
     * @returns {string} Unique ID
     */
    generateId() {
        return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Format date to readable string
     * @param {string} dateString - ISO date string
     * @returns {string} Formatted date (e.g., "Jan 15, 2026")
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    },

    /**
     * Format date for input[type="date"]
     * @param {string} dateString - ISO date string
     * @returns {string} Formatted date (YYYY-MM-DD)
     */
    formatDateForInput(dateString) {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    },

    /**
     * Get today's date in YYYY-MM-DD format
     * @returns {string} Today's date
     */
    getTodayDate() {
        return new Date().toISOString().split('T')[0];
    },

    /**
     * Check if value is a valid number
     * @param {any} value - Value to check
     * @returns {boolean} True if valid number
     */
    isValidNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },

    /**
     * Check if value is required (not empty)
     * @param {any} value - Value to check
     * @returns {boolean} True if not empty
     */
    isRequired(value) {
        return value !== null && value !== undefined && value !== '';
    },

    /**
     * Sort workouts by date (descending - newest first)
     * @param {Array} workouts - Workouts array
     * @returns {Array} Sorted workouts
     */
    sortByDateDesc(workouts) {
        return [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    /**
     * Sort workouts by date (ascending - oldest first)
     * @param {Array} workouts - Workouts array
     * @returns {Array} Sorted workouts
     */
    sortByDateAsc(workouts) {
        return [...workouts].sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    /**
     * Filter workouts by exercise name
     * @param {Array} workouts - Workouts array
     * @param {string} searchTerm - Search term
     * @returns {Array} Filtered workouts
     */
    filterByExercise(workouts, searchTerm) {
        if (!searchTerm) return workouts;
        const term = searchTerm.toLowerCase();
        return workouts.filter(w => 
            w.exercise.toLowerCase().includes(term)
        );
    },

    /**
     * Filter workouts by date range
     * @param {Array} workouts - Workouts array
     * @param {string} range - Range type (week, month, year, all)
     * @returns {Array} Filtered workouts
     */
    filterByDateRange(workouts, range) {
        if (range === 'all') return workouts;

        const now = new Date();
        now.setHours(23, 59, 59, 999);

        let startDate;
        
        switch (range) {
            case 'week':
                startDate = new Date(now);
                startDate.setDate(startDate.getDate() - 7);
                break;
            case 'month':
                startDate = new Date(now);
                startDate.setDate(startDate.getDate() - 30);
                break;
            case 'year':
                startDate = new Date(now);
                startDate.setFullYear(startDate.getFullYear() - 1);
                break;
            default:
                return workouts;
        }

        return workouts.filter(w => new Date(w.date) >= startDate);
    },

    /**
     * Get unique exercises from workouts
     * @param {Array} workouts - Workouts array
     * @returns {Array} Unique exercise names
     */
    getUniqueExercises(workouts) {
        const exercises = workouts.map(w => w.exercise);
        return [...new Set(exercises)].sort();
    },

    /**
     * Calculate total volume (sets × reps × weight)
     * @param {Object} workout - Workout object
     * @returns {number} Total volume in kg
     */
    calculateVolume(workout) {
        const sets = parseInt(workout.sets) || 0;
        const reps = parseInt(workout.reps) || 0;
        const weight = parseFloat(workout.weight) || 0;
        return sets * reps * weight;
    },

    /**
     * Throttle function - limit execution rate
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in ms
     * @returns {Function} Throttled function
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Memoize function results for performance
     * @param {Function} func - Function to memoize
     * @returns {Function} Memoized function
     */
    memoize(func) {
        const cache = new Map();
        return function(...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        };
    },

    /**
     * Sanitize HTML to prevent XSS
     * @param {string} str - String to sanitize
     * @returns {string} Sanitized string
     */
    sanitizeHTML(str) {
        if (!str) return '';
        
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

    /**
     * Debounce function - delay execution until after wait time
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },

    /**
     * Check if localStorage is available
     * @returns {boolean} True if localStorage is available
     */
    isLocalStorageAvailable() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            console.error('localStorage is not available:', error);
            return false;
        }
    },

    /**
     * Get localStorage size in MB
     * @returns {number} Size in MB
     */
    getLocalStorageSize() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length + key.length;
            }
        }
        return (total / 1024 / 1024).toFixed(2);
    }
};

// Make available globally
window.Utils = Utils;