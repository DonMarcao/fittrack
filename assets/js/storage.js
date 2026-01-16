/**
 * Storage Module
 * Handles localStorage operations for FitTrack data
 */

const FitTrackStorage = {
    // Storage keys
    WORKOUTS_KEY: 'fittrack_workouts',
    THEME_KEY: 'fittrack_theme',
    VERSION_KEY: 'fittrack_version',
    
    // Current version
    VERSION: '1.0.0',

    /**
     * Initialize storage (check version, migrate if needed)
     */
    init() {
        try {
            const currentVersion = localStorage.getItem(this.VERSION_KEY);
            
            if (!currentVersion) {
                // First time user
                localStorage.setItem(this.VERSION_KEY, this.VERSION);
                console.log('FitTrack storage initialized');
            } else if (currentVersion !== this.VERSION) {
                // Version mismatch - could add migration logic here
                console.log('Storage version:', currentVersion, '-> Updating to:', this.VERSION);
                localStorage.setItem(this.VERSION_KEY, this.VERSION);
            }
            
            return true;
        } catch (error) {
            console.error('Storage initialization failed:', error);
            return false;
        }
    },

    /**
     * Get all workouts from localStorage
     * @returns {Array} Workouts array
     */
    getWorkouts() {
        try {
            const data = localStorage.getItem(this.WORKOUTS_KEY);
            
            if (!data) {
                return [];
            }

            const workouts = JSON.parse(data);
            
            // Validate data structure
            if (!Array.isArray(workouts)) {
                console.error('Invalid workouts data structure, resetting...');
                this.saveWorkouts([]);
                return [];
            }

            // Validate each workout has required fields
            const validWorkouts = workouts.filter(w => {
                return w && 
                       typeof w === 'object' && 
                       w.id && 
                       w.exercise && 
                       w.date && 
                       w.sets && 
                       w.reps && 
                       w.weight;
            });

            // If some workouts were invalid, save cleaned data
            if (validWorkouts.length !== workouts.length) {
                console.warn(`Removed ${workouts.length - validWorkouts.length} invalid workouts`);
                this.saveWorkouts(validWorkouts);
            }

            return validWorkouts;

        } catch (error) {
            console.error('Error reading workouts from localStorage:', error);
            
            // Attempt to recover by resetting storage
            if (error.name === 'SyntaxError') {
                console.warn('Corrupted workout data detected, resetting storage...');
                this.saveWorkouts([]);
            }
            
            // Show notification
            if (window.Notifications) {
                Notifications.error('Failed to load workouts. Storage may be corrupted.');
            }
            
            return [];
        }
    },

    /**
     * Save workouts to localStorage
     * @param {Array} workouts - Workouts array
     * @returns {boolean} Success status
     */
    saveWorkouts(workouts) {
        try {
            // Validate input
            if (!Array.isArray(workouts)) {
                console.error('saveWorkouts: Invalid input - not an array');
                return false;
            }

            const json = JSON.stringify(workouts);
            
            // Check size before saving
            const sizeInMB = (json.length / 1024 / 1024).toFixed(2);
            if (sizeInMB > 4) {
                console.warn(`Large data size: ${sizeInMB}MB - approaching localStorage limit`);
            }

            localStorage.setItem(this.WORKOUTS_KEY, json);
            return true;

        } catch (error) {
            console.error('Error saving workouts to localStorage:', error);
            
            // Check if quota exceeded
            if (error.name === 'QuotaExceededError') {
                if (window.Notifications) {
                    Notifications.error('Storage quota exceeded! Please export your data and delete old workouts.');
                }
            } else {
                if (window.Notifications) {
                    Notifications.error('Failed to save workout to storage');
                }
            }
            
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
     * Add new workout
     * @param {Object} workout - Workout object
     * @returns {boolean} Success status
     */
    addWorkout(workout) {
        try {
            // Validate workout
            if (!workout || typeof workout !== 'object') {
                console.error('Invalid workout object');
                return false;
            }

            const workouts = this.getWorkouts();
            
            // Check for duplicate ID
            if (workout.id && workouts.some(w => w.id === workout.id)) {
                console.error('Workout with this ID already exists');
                return false;
            }

            workouts.push(workout);
            return this.saveWorkouts(workouts);

        } catch (error) {
            console.error('Error adding workout:', error);
            return false;
        }
    },

    /**
     * Update existing workout
     * @param {string} id - Workout ID
     * @param {Object} data - Updated workout data
     * @returns {boolean} Success status
     */
    updateWorkout(id, data) {
        try {
            const workouts = this.getWorkouts();
            const index = workouts.findIndex(w => w.id === id);

            if (index === -1) {
                console.error('Workout not found:', id);
                return false;
            }

            // Preserve ID and timestamps
            workouts[index] = {
                ...workouts[index],
                ...data,
                id: id, // Ensure ID doesn't change
                updatedAt: new Date().toISOString()
            };

            return this.saveWorkouts(workouts);

        } catch (error) {
            console.error('Error updating workout:', error);
            return false;
        }
    },

    /**
     * Delete workout
     * @param {string} id - Workout ID
     * @returns {boolean} Success status
     */
    deleteWorkout(id) {
        try {
            const workouts = this.getWorkouts();
            const filtered = workouts.filter(w => w.id !== id);

            if (filtered.length === workouts.length) {
                console.error('Workout not found:', id);
                return false;
            }

            return this.saveWorkouts(filtered);

        } catch (error) {
            console.error('Error deleting workout:', error);
            return false;
        }
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
     * Get theme preference
     * @returns {string} Theme ('light' or 'dark')
     */
    getTheme() {
        try {
            return localStorage.getItem(this.THEME_KEY) || 'light';
        } catch (error) {
            console.error('Error reading theme:', error);
            return 'light';
        }
    },

    /**
     * Save theme preference
     * @param {string} theme - Theme ('light' or 'dark')
     * @returns {boolean} Success status
     */
    saveTheme(theme) {
        try {
            if (theme !== 'light' && theme !== 'dark') {
                console.error('Invalid theme:', theme);
                return false;
            }

            localStorage.setItem(this.THEME_KEY, theme);
            return true;
        } catch (error) {
            console.error('Error saving theme:', error);
            return false;
        }
    },

    /**
     * Get storage size info
     * @returns {Object} Storage info {used, total, percentage}
     */
    getStorageInfo() {
        try {
            let total = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    total += (localStorage[key].length + key.length) * 2; // UTF-16
                }
            }

            const usedMB = (total / 1024 / 1024).toFixed(2);
            const totalMB = 5; // Most browsers allow ~5MB
            const percentage = ((total / (totalMB * 1024 * 1024)) * 100).toFixed(1);

            return {
                used: usedMB,
                total: totalMB,
                percentage: percentage
            };

        } catch (error) {
            console.error('Error getting storage info:', error);
            return { used: 0, total: 5, percentage: 0 };
        }
    },

    /**
     * Export all data
     * @returns {Object} All stored data
     */
    exportAllData() {
        return {
            version: this.VERSION,
            workouts: this.getWorkouts(),
            theme: this.getTheme(),
            exportDate: new Date().toISOString()
        };
    },

    /**
     * Import all data
     * @param {Object} data - Data to import
     * @returns {boolean} Success status
     */
    importAllData(data) {
        try {
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid import data');
            }

            if (data.workouts && Array.isArray(data.workouts)) {
                this.saveWorkouts(data.workouts);
            }

            if (data.theme) {
                this.saveTheme(data.theme);
            }

            return true;

        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }
};

// Initialize storage on load
FitTrackStorage.init();

// Make available globally
window.FitTrackStorage = FitTrackStorage;