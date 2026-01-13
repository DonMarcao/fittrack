/**
 * Validation Module
 * Handles form validation and error display
 */

const Validation = {
    /**
     * Validate workout form
     * @param {Object} data - Form data to validate
     * @returns {Object} { isValid: boolean, errors: {} }
     */
    validateWorkout(data) {
        const errors = {};

        // Validate exercise name
        if (!Utils.isRequired(data.exercise)) {
            errors.exercise = 'Exercise name is required';
        } else if (data.exercise.length < 2) {
            errors.exercise = 'Exercise name must be at least 2 characters';
        } else if (data.exercise.length > 50) {
            errors.exercise = 'Exercise name must be less than 50 characters';
        }

        // Validate date
        if (!Utils.isRequired(data.date)) {
            errors.date = 'Date is required';
        } else {
            const workoutDate = new Date(data.date);
            const today = new Date();
            today.setHours(23, 59, 59, 999); // End of today
            
            if (workoutDate > today) {
                errors.date = 'Date cannot be in the future';
            }
        }

        // Validate sets
        if (!Utils.isRequired(data.sets)) {
            errors.sets = 'Sets is required';
        } else if (!Utils.isValidNumber(data.sets)) {
            errors.sets = 'Sets must be a positive number';
        } else if (data.sets < 1 || data.sets > 20) {
            errors.sets = 'Sets must be between 1 and 20';
        }

        // Validate reps
        if (!Utils.isRequired(data.reps)) {
            errors.reps = 'Reps is required';
        } else if (!Utils.isValidNumber(data.reps)) {
            errors.reps = 'Reps must be a positive number';
        } else if (data.reps < 1 || data.reps > 100) {
            errors.reps = 'Reps must be between 1 and 100';
        }

        // Validate weight
        if (!Utils.isRequired(data.weight)) {
            errors.weight = 'Weight is required';
        } else if (!Utils.isValidNumber(data.weight)) {
            errors.weight = 'Weight must be a positive number';
        } else if (data.weight < 0.5 || data.weight > 500) {
            errors.weight = 'Weight must be between 0.5 and 500 kg';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Validate BMI calculator inputs
     * @param {Object} data - BMI data
     * @returns {Object} { isValid: boolean, errors: {} }
     */
    validateBMI(data) {
        const errors = {};

        // Validate weight
        if (!Utils.isRequired(data.weight)) {
            errors.weight = 'Weight is required';
        } else if (!Utils.isValidNumber(data.weight)) {
            errors.weight = 'Weight must be a positive number';
        } else if (data.weight < 20 || data.weight > 300) {
            errors.weight = 'Weight must be between 20 and 300 kg';
        }

        // Validate height
        if (!Utils.isRequired(data.height)) {
            errors.height = 'Height is required';
        } else if (!Utils.isValidNumber(data.height)) {
            errors.height = 'Height must be a positive number';
        } else if (data.height < 50 || data.height > 250) {
            errors.height = 'Height must be between 50 and 250 cm';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Validate 1RM calculator inputs
     * @param {Object} data - 1RM data
     * @returns {Object} { isValid: boolean, errors: {} }
     */
    validate1RM(data) {
        const errors = {};

        // Validate weight
        if (!Utils.isRequired(data.weight)) {
            errors.weight = 'Weight is required';
        } else if (!Utils.isValidNumber(data.weight)) {
            errors.weight = 'Weight must be a positive number';
        } else if (data.weight < 1 || data.weight > 500) {
            errors.weight = 'Weight must be between 1 and 500 kg';
        }

        // Validate reps
        if (!Utils.isRequired(data.reps)) {
            errors.reps = 'Reps is required';
        } else if (!Utils.isValidNumber(data.reps)) {
            errors.reps = 'Reps must be a positive number';
        } else if (data.reps < 1 || data.reps > 10) {
            errors.reps = 'Reps must be between 1 and 10 for accurate 1RM calculation';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Show error message on form field
     * @param {string} fieldName - Name of the field
     * @param {string} message - Error message
     */
    showError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"], #${fieldName}`);
        
        if (!field) return;

        // Add error class to field
        field.classList.add('error');

        // Remove any existing error message
        this.clearError(fieldName);

        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.id = `${fieldName}-error`;
        errorDiv.textContent = message;

        // Insert error message after field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    },

    /**
     * Clear error message from field
     * @param {string} fieldName - Name of the field
     */
    clearError(fieldName) {
        const field = document.querySelector(`[name="${fieldName}"], #${fieldName}`);
        
        if (field) {
            field.classList.remove('error');
        }

        const errorMsg = document.getElementById(`${fieldName}-error`);
        if (errorMsg) {
            errorMsg.remove();
        }
    },

    /**
     * Clear all errors from form
     * @param {HTMLFormElement} form - Form element
     */
    clearAllErrors(form) {
        if (!form) return;

        // Remove error classes
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));

        // Remove error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
    },

    /**
     * Show all validation errors on form
     * @param {Object} errors - Errors object
     */
    showErrors(errors) {
        Object.keys(errors).forEach(fieldName => {
            this.showError(fieldName, errors[fieldName]);
        });
    }
};

// Make available globally
window.Validation = Validation;