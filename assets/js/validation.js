/**
 * Validation Module
 * Handles form validation and error display
 */

const Validation = {
    /**
     * Validate workout data
     * @param {Object} workout - Workout object
     * @returns {Object} Validation result {isValid: boolean, errors: {}}
     */
    validateWorkout(workout) {
        const errors = {};

        // Exercise name
        if (!workout.exercise || workout.exercise.trim().length === 0) {
            errors.exercise = 'Exercise name is required';
        } else if (workout.exercise.trim().length < 2) {
            errors.exercise = 'Exercise name must be at least 2 characters';
        } else if (workout.exercise.trim().length > 50) {
            errors.exercise = 'Exercise name must be less than 50 characters';
        } else if (!/^[a-zA-Z0-9\s\-']+$/.test(workout.exercise)) {
            errors.exercise = 'Exercise name can only contain letters, numbers, spaces, hyphens and apostrophes';
        }

        // Date
        if (!workout.date) {
            errors.date = 'Date is required';
        } else {
            const workoutDate = new Date(workout.date);
            const today = new Date();
            today.setHours(23, 59, 59, 999);
            
            if (isNaN(workoutDate.getTime())) {
                errors.date = 'Invalid date format';
            } else if (workoutDate > today) {
                errors.date = 'Date cannot be in the future';
            } else {
                // Check if date is too old (more than 10 years ago)
                const tenYearsAgo = new Date();
                tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
                
                if (workoutDate < tenYearsAgo) {
                    errors.date = 'Date seems too old. Please check.';
                }
            }
        }

        // Sets
        const sets = parseInt(workout.sets);
        if (!workout.sets || workout.sets === '') {
            errors.sets = 'Sets is required';
        } else if (isNaN(sets)) {
            errors.sets = 'Sets must be a number';
        } else if (sets < 1) {
            errors.sets = 'Sets must be at least 1';
        } else if (sets > 20) {
            errors.sets = 'Sets must be 20 or less';
        } else if (!Number.isInteger(sets)) {
            errors.sets = 'Sets must be a whole number';
        }

        // Reps
        const reps = parseInt(workout.reps);
        if (!workout.reps || workout.reps === '') {
            errors.reps = 'Reps is required';
        } else if (isNaN(reps)) {
            errors.reps = 'Reps must be a number';
        } else if (reps < 1) {
            errors.reps = 'Reps must be at least 1';
        } else if (reps > 100) {
            errors.reps = 'Reps must be 100 or less';
        } else if (!Number.isInteger(reps)) {
            errors.reps = 'Reps must be a whole number';
        }

        // Weight
        const weight = parseFloat(workout.weight);
        if (!workout.weight || workout.weight === '') {
            errors.weight = 'Weight is required';
        } else if (isNaN(weight)) {
            errors.weight = 'Weight must be a number';
        } else if (weight < 0.5) {
            errors.weight = 'Weight must be at least 0.5kg';
        } else if (weight > 500) {
            errors.weight = 'Weight must be 500kg or less';
        } else if (weight % 0.5 !== 0) {
            errors.weight = 'Weight must be in 0.5kg increments';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Validate BMI data
     * @param {Object} data - BMI data {weight, height}
     * @returns {Object} Validation result
     */
    validateBMI(data) {
        const errors = {};

        // Weight
        const weight = parseFloat(data.weight);
        if (!data.weight || data.weight === '') {
            errors.weight = 'Weight is required';
        } else if (isNaN(weight)) {
            errors.weight = 'Weight must be a number';
        } else if (weight < 20) {
            errors.weight = 'Weight must be at least 20kg';
        } else if (weight > 300) {
            errors.weight = 'Weight must be 300kg or less';
        }

        // Height
        const height = parseFloat(data.height);
        if (!data.height || data.height === '') {
            errors.height = 'Height is required';
        } else if (isNaN(height)) {
            errors.height = 'Height must be a number';
        } else if (height < 50) {
            errors.height = 'Height must be at least 50cm';
        } else if (height > 250) {
            errors.height = 'Height must be 250cm or less';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Validate 1RM data
     * @param {Object} data - 1RM data {weight, reps}
     * @returns {Object} Validation result
     */
    validate1RM(data) {
        const errors = {};

        // Weight
        const weight = parseFloat(data.weight);
        if (!data.weight || data.weight === '') {
            errors.weight = 'Weight is required';
        } else if (isNaN(weight)) {
            errors.weight = 'Weight must be a number';
        } else if (weight < 1) {
            errors.weight = 'Weight must be at least 1kg';
        } else if (weight > 500) {
            errors.weight = 'Weight must be 500kg or less';
        }

        // Reps
        const reps = parseInt(data.reps);
        if (!data.reps || data.reps === '') {
            errors.reps = 'Reps is required';
        } else if (isNaN(reps)) {
            errors.reps = 'Reps must be a number';
        } else if (reps < 1) {
            errors.reps = 'Reps must be at least 1';
        } else if (reps > 10) {
            errors.reps = 'Reps must be 10 or less (for accurate 1RM estimation)';
        } else if (!Number.isInteger(reps)) {
            errors.reps = 'Reps must be a whole number';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Show validation errors in form
     * @param {string} formId - Form ID
     * @param {Object} errors - Errors object
     */
    showErrors(formId, errors) {
        // Clear previous errors first
        this.clearFormErrors(formId);

        Object.keys(errors).forEach(field => {
            const input = document.querySelector(`#${formId} [name="${field}"]`);
            
            if (input) {
                // Add error class to input
                input.classList.add('error');
                
                // Create error message element
                const errorMsg = document.createElement('span');
                errorMsg.className = 'error-message';
                errorMsg.textContent = errors[field];
                
                // Insert after input
                input.parentNode.insertBefore(errorMsg, input.nextSibling);
                
                // Add shake animation
                input.style.animation = 'shake 0.3s';
                setTimeout(() => {
                    input.style.animation = '';
                }, 300);
            }
        });

        // Show toast notification
        if (window.Notifications) {
            const firstError = Object.values(errors)[0];
            Notifications.error(firstError);
        }
    },

    /**
     * Clear validation errors from specific form
     * @param {string} formId - Form ID
     */
    clearFormErrors(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        // Remove error classes
        form.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
        });

        // Remove error messages
        form.querySelectorAll('.error-message').forEach(el => {
            el.remove();
        });
    },

    /**
     * Clear all validation errors
     */
    clearAllErrors() {
        // Remove all error classes
        document.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
        });

        // Remove all error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.remove();
        });
    }
};

// Make available globally
window.Validation = Validation;