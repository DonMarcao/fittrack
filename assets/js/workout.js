/**
 * Workout Module
 * Handles workout CRUD operations
 */

const Workout = {
    /**
     * Get all workouts from storage
     * @returns {Array} Workouts array
     */
    getAllWorkouts() {
        return FitTrackStorage.getWorkouts();
    },

    /**
     * Get workout by ID
     * @param {string} id - Workout ID
     * @returns {Object|null} Workout object or null
     */
    getWorkoutById(id) {
        return FitTrackStorage.getWorkoutById(id);
    },

    /**
     * Add new workout
     * @param {HTMLFormElement} form - Form element
     * @returns {boolean} Success status
     */
    addWorkout(form) {
        // Show loading
        form.classList.add('loading');
        
        const formData = new FormData(form);
        
        const workout = {
            exercise: formData.get('exercise'),
            date: formData.get('date'),
            sets: formData.get('sets'),
            reps: formData.get('reps'),
            weight: formData.get('weight')
        };

        // Clear previous errors
        Validation.clearAllErrors();

        // Validate
        const validation = Validation.validateWorkout(workout);
        
        if (!validation.isValid) {
            Validation.showErrors(form.id, validation.errors);
            form.classList.remove('loading');
            return false;
        }

        // Add metadata
        workout.id = Utils.generateId();
        workout.createdAt = new Date().toISOString();

        // Save to storage
        const success = FitTrackStorage.addWorkout(workout);

        // Hide loading
        form.classList.remove('loading');

        if (success) {
            Notifications.success('Workout added successfully!');
            form.reset();
            
            // Trigger refresh
            if (window.App) {
                App.refresh();
            }
        } else {
            Notifications.error('Failed to add workout');
        }

        return success;
    },

    /**
     * Update existing workout
     * @param {string} id - Workout ID
     * @param {Object} data - Updated workout data
     * @returns {boolean} Success status
     */
    updateWorkout(id, data) {
        // Validate
        const validation = Validation.validateWorkout(data);
        
        if (!validation.isValid) {
            // Show errors
            Object.keys(validation.errors).forEach(field => {
                Notifications.error(validation.errors[field]);
            });
            return false;
        }

        // Add updated timestamp
        data.updatedAt = new Date().toISOString();

        // Update in storage
        const success = FitTrackStorage.updateWorkout(id, data);

        if (success) {
            Notifications.success('Workout updated successfully!');
            
            // Trigger refresh
            if (window.App) {
                App.refresh();
            }
        } else {
            Notifications.error('Failed to update workout');
        }

        return success;
    },

    /**
     * Delete workout
     * @param {string} id - Workout ID
     * @returns {boolean} Success status
     */
    deleteWorkout(id) {
        const success = FitTrackStorage.deleteWorkout(id);

        if (success) {
            Notifications.success('Workout deleted successfully!');
            
            // Trigger refresh
            if (window.App) {
                App.refresh();
            }
        } else {
            Notifications.error('Failed to delete workout');
        }

        return success;
    },

    /**
     * Delete workout with confirmation
     * @param {string} id - Workout ID
     * @returns {boolean} Success status
     */
    deleteWithConfirmation(id) {
        const workout = this.getWorkoutById(id);
        
        if (!workout) {
            Notifications.error('Workout not found');
            return false;
        }

        const message = `Delete "${workout.exercise}" from ${Utils.formatDate(workout.date)}?\n\nThis action cannot be undone.`;
        
        if (confirm(message)) {
            const success = this.deleteWorkout(id);
            if (success && window.App) {
                App.refresh();
            }
            return success;
        }
        
        return false;
    },

    /**
     * Clear all workouts with confirmation
     * @returns {boolean} Success status
     */
    clearAllWorkouts() {
        const workouts = this.getAllWorkouts();
        
        if (workouts.length === 0) {
            Notifications.info('No workouts to delete');
            return false;
        }

        const message = `Delete ALL ${workouts.length} workouts?\n\nThis action cannot be undone!`;
        
        if (confirm(message)) {
            const success = FitTrackStorage.clearAllWorkouts();

            if (success) {
                Notifications.success('All workouts deleted');
                
                // Trigger refresh
                if (window.App) {
                    App.refresh();
                }
            } else {
                Notifications.error('Failed to clear workouts');
            }

            return success;
        }

        return false;
    },

    /**
     * Export workouts to CSV
     */
    exportToCSV() {
        const workouts = this.getAllWorkouts();

        if (workouts.length === 0) {
            Notifications.warning('No workouts to export');
            return;
        }

        // Sort by date
        const sorted = Utils.sortByDateDesc(workouts);

        // Create CSV content
        let csv = 'Date,Exercise,Sets,Reps,Weight (kg),Volume\n';

        sorted.forEach(workout => {
            const volume = Utils.calculateVolume(workout);
            csv += `${workout.date},${workout.exercise},${workout.sets},${workout.reps},${workout.weight},${volume}\n`;
        });

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `fittrack-workouts-${Utils.getTodayDate()}.csv`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        Notifications.success(`Exported ${workouts.length} workouts to CSV`);
    }
};

// Make available globally
window.Workout = Workout;