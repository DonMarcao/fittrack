/**
 * Workout Module
 * Handles workout CRUD operations
 */

const Workout = {
    /**
     * Add new workout
     * @param {HTMLFormElement} form - Form element
     * @returns {boolean} Success status
     */
    addWorkout(form) {
        // Get form data
        const formData = new FormData(form);
        const data = {
            exercise: formData.get('exercise'),
            date: formData.get('date'),
            sets: formData.get('sets'),
            reps: formData.get('reps'),
            weight: formData.get('weight')
        };

        // Validate
        const validation = Validation.validateWorkout(data);
        
        if (!validation.isValid) {
            Validation.showErrors(validation.errors);
            Notifications.error('Please fix the errors before submitting');
            return false;
        }

        // Create workout object
        const workout = {
            id: Utils.generateId(),
            exercise: data.exercise.trim(),
            date: data.date,
            sets: parseInt(data.sets),
            reps: parseInt(data.reps),
            weight: parseFloat(data.weight),
            createdAt: new Date().toISOString()
        };

        // Save to storage
        const success = FitTrackStorage.addWorkout(workout);

        if (success) {
            Notifications.success('Workout added successfully!');
            form.reset();
            Validation.clearAllErrors(form);
            
            // Refresh display
            App.refresh();
            
            return true;
        } else {
            Notifications.error('Failed to save workout. Please try again.');
            return false;
        }
    },

    /**
     * Get all workouts
     * @returns {Array} Workouts array
     */
    getAllWorkouts() {
        return FitTrackStorage.getWorkouts();
    },

    /**
     * Get workout by ID
     * @param {string} id - Workout ID
     * @returns {Object|null} Workout object
     */
    getWorkoutById(id) {
        return FitTrackStorage.getWorkoutById(id);
    },

    /**
     * Update workout
     * @param {string} id - Workout ID
     * @param {Object} data - Updated workout data
     * @returns {boolean} Success status
     */
    updateWorkout(id, data) {
        // Validate
        const validation = Validation.validateWorkout(data);
        
        if (!validation.isValid) {
            Validation.showErrors(validation.errors);
            Notifications.error('Please fix the errors before updating');
            return false;
        }

        // Update
        const updatedWorkout = {
            exercise: data.exercise.trim(),
            date: data.date,
            sets: parseInt(data.sets),
            reps: parseInt(data.reps),
            weight: parseFloat(data.weight),
            updatedAt: new Date().toISOString()
        };

        const success = FitTrackStorage.updateWorkout(id, updatedWorkout);

        if (success) {
            Notifications.success('Workout updated successfully!');
            App.refresh();
            return true;
        } else {
            Notifications.error('Failed to update workout');
            return false;
        }
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
            App.refresh();
            return true;
        } else {
            Notifications.error('Failed to delete workout');
            return false;
        }
    },

    /**
     * Delete workout with confirmation
     * @param {string} id - Workout ID
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
     */
    clearAllWorkouts() {
        const workouts = this.getAllWorkouts();
        
        if (workouts.length === 0) {
            Notifications.info('No workouts to clear');
            return;
        }

        const confirmed = confirm(
            `Are you sure you want to delete ALL ${workouts.length} workouts?\n\n` +
            `This action cannot be undone!`
        );

        if (confirmed) {
            const success = FitTrackStorage.clearAllWorkouts();
            
            if (success) {
                Notifications.success('All workouts cleared');
                App.refresh();
            } else {
                Notifications.error('Failed to clear workouts');
            }
        }
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

        // Create CSV content
        let csv = 'Date,Exercise,Sets,Reps,Weight (kg),Volume\n';
        
        workouts.forEach(w => {
            const volume = Utils.calculateVolume(w);
            csv += `${w.date},"${w.exercise}",${w.sets},${w.reps},${w.weight},${volume}\n`;
        });

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `fittrack-workouts-${Utils.formatDateForInput(new Date())}.csv`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        Notifications.success('Workouts exported successfully!');
    }
};

// Make available globally
window.Workout = Workout;