/**
 * Storage Module
 * Handles all localStorage operations for workout data
 */

const Storage = {
    // Keys for localStorage
    WORKOUTS_KEY: 'fittrack_workouts',
    THEME_KEY: 'fittrack_theme',

    /**
     * Get all workouts from localStorage
     * @returns {Array} Array of workout objects
     */
    getWorkouts() {
        try {
            const data = localStorage.getItem(this.WORKOUTS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading workouts:', error);
            return [];
        }
    },

    /**
     * Save workouts to localStorage
     * @param {Array} workouts - Array of workout objects
     * @returns {boolean} Success status
     */
    saveWorkouts(workouts) {
        try {
            localStorage.setItem(this.WORKOUTS_KEY, JSON.stringify(workouts));
            return true;
        } catch (error) {
            console.error('Error saving workouts:', error);
            return false;
        }
    },

    /**
     * Add a new workout
     * @param {Object} workout - Workout object
     * @returns {boolean} Success status
     */
    addWorkout(workout) {
        const workouts = this.getWorkouts();
        workouts.push(workout);
        return this.saveWorkouts(workouts);
    },

    /**
     * Update an existing workout
     * @param {string} id - Workout ID
     * @param {Object} updatedWorkout - Updated workout object
     * @returns {boolean} Success status
     */
    updateWorkout(id, updatedWorkout) {
        const workouts = this.getWorkouts();
        const index = workouts.findIndex(w => w.id === id);
        
        if (index !== -1) {
            workouts[index] = { ...workouts[index], ...updatedWorkout };
            return this.saveWorkouts(workouts);
        }
        
        return false;
    },

    /**
     * Delete a workout
     * @param {string} id - Workout ID
     * @returns {boolean} Success status
     */
    deleteWorkout(id) {
        const workouts = this.getWorkouts();
        const filtered = workouts.filter(w => w.id !== id);
        return this.saveWorkouts(filtered);
    },

    /**
     * Clear all workouts
     * @returns {boolean} Success status
     */
    clearAllWorkouts() {
        try {
            localStorage.removeItem(this.WORKOUTS_KEY);
            return true;
        } catch (error) {
            console.error('Error clearing workouts:', error);
            return false;
        }
    },

    /**
     * Get workout by ID
     * @param {string} id - Workout ID
     * @returns {Object|null} Workout object or null
     */
    getWorkoutById(id) {
        const workouts = this.getWorkouts();
        return workouts.find(w => w.id === id) || null;
    },

    /**
     * Get theme preference
     * @returns {string} 'light' or 'dark'
     */
    getTheme() {
        return localStorage.getItem(this.THEME_KEY) || 'light';
    },

    /**
     * Save theme preference
     * @param {string} theme - 'light' or 'dark'
     */
    saveTheme(theme) {
        localStorage.setItem(this.THEME_KEY, theme);
    }
};

// Make available globally
window.FitTrackStorage = Storage;