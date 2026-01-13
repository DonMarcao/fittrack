/**
 * Notifications Module
 * Handles toast notifications for user feedback
 */

const Notifications = {
    // Container for toasts
    container: null,

    /**
     * Initialize notification system
     */
    init() {
        // Create container if it doesn't exist
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    },

    /**
     * Show a toast notification
     * @param {string} message - Message to display
     * @param {string} type - Type: 'success', 'error', 'warning', 'info'
     * @param {number} duration - Duration in ms (default: 3000)
     */
    show(message, type = 'info', duration = 3000) {
        this.init();

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        // Create icon
        const icon = document.createElement('div');
        icon.className = 'toast-icon';

        // Create content
        const content = document.createElement('div');
        content.className = 'toast-content';

        const messageText = document.createElement('p');
        messageText.className = 'toast-message';
        messageText.textContent = message;

        content.appendChild(messageText);

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'toast-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => this.remove(toast);

        // Assemble toast
        toast.appendChild(icon);
        toast.appendChild(content);
        toast.appendChild(closeBtn);

        // Add to container
        this.container.appendChild(toast);

        // Auto-remove after duration
        setTimeout(() => {
            this.remove(toast);
        }, duration);
    },

    /**
     * Show success notification
     * @param {string} message - Message to display
     */
    success(message) {
        this.show(message, 'success', 3000);
    },

    /**
     * Show error notification
     * @param {string} message - Message to display
     */
    error(message) {
        this.show(message, 'error', 4000);
    },

    /**
     * Show warning notification
     * @param {string} message - Message to display
     */
    warning(message) {
        this.show(message, 'warning', 3500);
    },

    /**
     * Show info notification
     * @param {string} message - Message to display
     */
    info(message) {
        this.show(message, 'info', 3000);
    },

    /**
     * Remove a toast notification
     * @param {HTMLElement} toast - Toast element to remove
     */
    remove(toast) {
        if (!toast) return;

        // Add removing animation
        toast.classList.add('removing');

        // Remove after animation
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    },

    /**
     * Clear all notifications
     */
    clearAll() {
        if (this.container) {
            const toasts = this.container.querySelectorAll('.toast');
            toasts.forEach(toast => this.remove(toast));
        }
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    Notifications.init();
});

// Make available globally
window.Notifications = Notifications;