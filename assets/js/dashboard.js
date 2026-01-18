/**
 * Dashboard Module
 * Handles dashboard page functionality
 */

const Dashboard = {
    /**
     * Initialize dashboard
     */
    init() {
        console.log('Dashboard initialized');
        this.render();
        this.setupEventListeners();
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Add workout buttons - more specific selector
        const addButtons = document.querySelectorAll('.btn-primary, button.btn-primary');
        addButtons.forEach(btn => {
            const text = btn.textContent.trim();
            if (text.includes('Add') || text.includes('+') || text.includes('Workout')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showAddWorkoutModal();
                });
                console.log('Added click listener to:', text);
            }
        });

        // Export button
        const exportBtn = document.getElementById('export-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => Workout.exportToCSV());
        }

        // Backup button
        const backupBtn = document.getElementById('backup-btn');
        if (backupBtn) {
            backupBtn.addEventListener('click', () => Workout.backupData());
        }

        // Import button
        const importBtn = document.getElementById('import-btn');
        if (importBtn) {
            importBtn.addEventListener('click', () => Workout.importData());
        }

        // ============================================
        // NEW: Clear All Data button
        // ============================================
        const clearAllBtn = document.getElementById('clear-all-btn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => this.handleClearAll());
        }
    },

    /**
     * Render dashboard
     */
    render() {
        this.renderStart = performance.now();
        this.displayStats();
        this.displayRecentWorkouts();
    },

    /**
     * Display workout statistics
     */
    displayStats() {
        const workouts = Workout.getAllWorkouts();
        
        // Total workouts
        const totalElement = document.querySelector('.stats-grid .stat-card:nth-child(1) .stat-value');
        if (totalElement) {
            totalElement.textContent = workouts.length;
        }

        // This week
        const thisWeekWorkouts = Utils.filterByDateRange(workouts, 'week');
        const weekElement = document.querySelector('.stats-grid .stat-card:nth-child(2) .stat-value');
        if (weekElement) {
            weekElement.textContent = thisWeekWorkouts.length;
        }

        // Last workout date
        const lastElement = document.querySelector('.stats-grid .stat-card:nth-child(3) .stat-value');
        if (lastElement) {
            if (workouts.length > 0) {
                const sorted = Utils.sortByDateDesc(workouts);
                lastElement.textContent = Utils.formatDate(sorted[0].date);
            } else {
                lastElement.textContent = '--';
            }
        }

        // Current streak
        const streakElement = document.querySelector('.stats-grid .stat-card:nth-child(4) .stat-value');
        if (streakElement) {
            const streak = this.calculateStreak(workouts);
            streakElement.textContent = streak;
        }

        // Performance stats (dev info)
        if (console.log) {
            console.log('📊 Performance Stats:', {
                'Total Workouts': workouts.length,
                'localStorage Size': Utils.getLocalStorageSize() + ' MB',
                'Render Time': (performance.now() - (this.renderStart || 0)).toFixed(2) + 'ms'
            });
        }
    },

    /**
     * Calculate current workout streak
     * @param {Array} workouts - Workouts array
     * @returns {number} Streak count
     */
    calculateStreak(workouts) {
        if (workouts.length === 0) return 0;

        const sorted = Utils.sortByDateDesc(workouts);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let streak = 0;
        let currentDate = new Date(today);

        for (let i = 0; i < sorted.length; i++) {
            const workoutDate = new Date(sorted[i].date);
            workoutDate.setHours(0, 0, 0, 0);

            const diffDays = Math.floor((currentDate - workoutDate) / (1000 * 60 * 60 * 24));

            if (diffDays === 0 || diffDays === 1) {
                if (diffDays === 1) {
                    streak++;
                    currentDate = new Date(workoutDate);
                } else if (i === 0) {
                    streak++;
                }
            } else {
                break;
            }
        }

        return streak;
    },

    /**
     * Display recent workouts
     */
    displayRecentWorkouts() {
        console.log('=== displayRecentWorkouts CALLED ===');
        
        const container = document.querySelector('.recent-workouts');
        console.log('Container found:', container);
        
        if (!container) {
            console.error('Container .recent-workouts not found!');
            return;
        }

        const workouts = Workout.getAllWorkouts();
        console.log('Total workouts:', workouts.length);
        
        const sorted = Utils.sortByDateDesc(workouts);
        const recent = sorted.slice(0, 5); // Last 5 workouts
        console.log('Recent workouts to display:', recent.length);

        // Find or create workout list
        let listContainer = container.querySelector('.workout-list');
        if (!listContainer) {
            console.log('Creating new .workout-list container');
            listContainer = document.createElement('div');
            listContainer.className = 'workout-list';
            
            // Remove empty state if exists
            const emptyState = container.querySelector('.empty-state');
            if (emptyState) {
                console.log('Removing empty state');
                emptyState.remove();
            }
            
            container.appendChild(listContainer);
        }

        // Clear existing content
        listContainer.innerHTML = '';
        console.log('Cleared list container');

        if (recent.length === 0) {
            console.log('No workouts, showing empty state');
            // Show empty state
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <p>No workouts yet. Start tracking your progress!</p>
                <button class="btn-primary">Add Your First Workout</button>
            `;
            listContainer.appendChild(emptyState);
            
            // Add event listener to button
            const btn = emptyState.querySelector('.btn-primary');
            btn.addEventListener('click', () => this.showAddWorkoutModal());
            
            return;
        }

        // Display recent workouts
        console.log('Creating workout cards...');
        recent.forEach((workout, index) => {
            console.log(`Creating card ${index + 1} for:`, workout.exercise);
            const card = this.createWorkoutCard(workout);
            console.log('Card created:', card);
            listContainer.appendChild(card);
        });
        
        console.log('Total cards added:', recent.length);
        console.log('List container children:', listContainer.children.length);
    },

    /**
     * Create workout card element
     * @param {Object} workout - Workout object
     * @returns {HTMLElement} Workout card
     */
    createWorkoutCard(workout) {
        const card = document.createElement('div');
        card.className = 'workout-card';
        
        const volume = Utils.calculateVolume(workout);
        
        card.innerHTML = `
            <div class="workout-info">
                <h3>${Utils.sanitizeHTML(workout.exercise)}</h3>
                <p>${Utils.formatDate(workout.date)} • ${workout.sets}×${workout.reps} @ ${workout.weight}kg • ${volume}kg total</p>
            </div>
            <div class="workout-actions">
                <button class="btn-icon" data-action="edit" data-id="${workout.id}" title="Edit">
                    ✏️
                </button>
                <button class="btn-icon" data-action="delete" data-id="${workout.id}" title="Delete">
                    🗑️
                </button>
            </div>
        `;

        // Add event listeners
        const editBtn = card.querySelector('[data-action="edit"]');
        const deleteBtn = card.querySelector('[data-action="delete"]');

        editBtn.addEventListener('click', () => this.editWorkout(workout.id));
        deleteBtn.addEventListener('click', () => Workout.deleteWithConfirmation(workout.id));

        return card;
    },

    /**
     * Show add workout modal
     */
    showAddWorkoutModal() {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'add-workout-modal';

        // Create modal
        overlay.innerHTML = `
            <div class="modal form-modal">
                <div class="modal-header">
                    <h2 class="modal-title">Add Workout</h2>
                    <button class="modal-close" data-action="close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="add-workout-form">
                        <div class="form-group">
                            <label for="add-exercise">Exercise Name *</label>
                            <input type="text" id="add-exercise" name="exercise" 
                                   placeholder="e.g., Bench Press, Squat, Deadlift" 
                                   autocomplete="off" required>
                            <small style="color: var(--text-muted); font-size: 0.75rem;">2-50 characters</small>
                        </div>

                        <div class="form-group">
                            <label for="add-date">Date *</label>
                            <input type="date" id="add-date" name="date" required>
                            <small style="color: var(--text-muted); font-size: 0.75rem;">Cannot be in the future</small>
                        </div>

                        <div class="form-group">
                            <label for="add-sets">Sets *</label>
                            <input type="number" id="add-sets" name="sets" 
                                   placeholder="3" min="1" max="20" required>
                            <small style="color: var(--text-muted); font-size: 0.75rem;">1-20 sets</small>
                        </div>

                        <div class="form-group">
                            <label for="add-reps">Reps *</label>
                            <input type="number" id="add-reps" name="reps" 
                                   placeholder="10" min="1" max="100" required>
                            <small style="color: var(--text-muted); font-size: 0.75rem;">1-100 reps</small>
                        </div>

                        <div class="form-group">
                            <label for="add-weight">Weight (kg) *</label>
                            <input type="number" id="add-weight" name="weight" 
                                   placeholder="80" min="0.5" max="500" step="0.5" required>
                            <small style="color: var(--text-muted); font-size: 0.75rem;">0.5-500 kg</small>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-action="close">Cancel</button>
                    <button type="submit" class="btn-primary" data-action="save">Add Workout</button>
                </div>
            </div>
        `;

        // Add to body
        document.body.appendChild(overlay);
        document.body.classList.add('modal-open');

        // Set today's date
        const dateInput = overlay.querySelector('#add-date');
        dateInput.value = Utils.getTodayDate();
        dateInput.max = Utils.getTodayDate(); // Prevent future dates

        // Setup event listeners
        const form = overlay.querySelector('#add-workout-form');
        const closeButtons = overlay.querySelectorAll('[data-action="close"]');
        const saveButton = overlay.querySelector('[data-action="save"]');

        // Real-time validation feedback
        const exerciseInput = overlay.querySelector('#add-exercise');
        exerciseInput.addEventListener('input', (e) => {
            if (e.target.value.length > 0 && e.target.value.length < 2) {
                e.target.style.borderColor = '#f59e0b';
            } else if (e.target.value.length >= 2) {
                e.target.style.borderColor = '#22c55e';
            } else {
                e.target.style.borderColor = '';
            }
        });

        // Close modal
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.closeModal('add-workout-modal'));
        });

        // Click outside to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal('add-workout-modal');
            }
        });

        // Save workout
        saveButton.addEventListener('click', () => {
            const success = Workout.addWorkout(form);
            
            if (success) {
                this.closeModal('add-workout-modal');
            }
        });

        // Enter key to save
        form.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                saveButton.click();
            }
        });

        // Focus first input
        setTimeout(() => {
            overlay.querySelector('#add-exercise').focus();
        }, 100);
    },

    /**
     * Edit workout
     * @param {string} id - Workout ID
     */
    editWorkout(id) {
        const workout = Workout.getWorkoutById(id);
        
        if (!workout) {
            Notifications.error('Workout not found');
            return;
        }

        this.showEditWorkoutModal(workout);
    },

    /**
     * Show edit workout modal
     * @param {Object} workout - Workout to edit
     */
    showEditWorkoutModal(workout) {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'edit-workout-modal';

        // Create modal
        overlay.innerHTML = `
            <div class="modal form-modal">
                <div class="modal-header">
                    <h2 class="modal-title">Edit Workout</h2>
                    <button class="modal-close" data-action="close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="edit-workout-form">
                        <input type="hidden" name="id" value="${workout.id}">
                        
                        <div class="form-group">
                            <label for="edit-exercise">Exercise Name *</label>
                            <input type="text" id="edit-exercise" name="exercise" value="${Utils.sanitizeHTML(workout.exercise)}" required>
                        </div>

                        <div class="form-group">
                            <label for="edit-date">Date *</label>
                            <input type="date" id="edit-date" name="date" value="${workout.date}" required>
                        </div>

                        <div class="form-group">
                            <label for="edit-sets">Sets *</label>
                            <input type="number" id="edit-sets" name="sets" value="${workout.sets}" min="1" max="20" required>
                        </div>

                        <div class="form-group">
                            <label for="edit-reps">Reps *</label>
                            <input type="number" id="edit-reps" name="reps" value="${workout.reps}" min="1" max="100" required>
                        </div>

                        <div class="form-group">
                            <label for="edit-weight">Weight (kg) *</label>
                            <input type="number" id="edit-weight" name="weight" value="${workout.weight}" min="0.5" max="500" step="0.5" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-action="close">Cancel</button>
                    <button type="submit" class="btn-primary" data-action="save">Save Changes</button>
                </div>
            </div>
        `;

        // Add to body
        document.body.appendChild(overlay);
        document.body.classList.add('modal-open');

        // Setup event listeners
        const form = overlay.querySelector('#edit-workout-form');
        const closeButtons = overlay.querySelectorAll('[data-action="close"]');
        const saveButton = overlay.querySelector('[data-action="save"]');

        // Close modal
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.closeModal('edit-workout-modal'));
        });

        // Click outside to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal('edit-workout-modal');
            }
        });

        // Save changes
        saveButton.addEventListener('click', () => {
            const formData = new FormData(form);
            const id = formData.get('id');
            const data = {
                exercise: formData.get('exercise'),
                date: formData.get('date'),
                sets: formData.get('sets'),
                reps: formData.get('reps'),
                weight: formData.get('weight')
            };

            const success = Workout.updateWorkout(id, data);
            
            if (success) {
                this.closeModal('edit-workout-modal');
            }
        });

        // Enter key to save
        form.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveButton.click();
            }
        });

        // Focus first input
        setTimeout(() => {
            overlay.querySelector('#edit-exercise').focus();
        }, 100);
    },

    // ============================================
    // NEW METHOD: Handle Clear All Data
    // ============================================
    /**
     * Handle Clear All Data action
     * Triple confirmation for safety
     */
    handleClearAll() {
        // First confirmation - Warning
        const firstConfirm = confirm(
            '⚠️ WARNING: Clear All Data\n\n' +
            'This will permanently delete:\n' +
            '• All workout entries\n' +
            '• All progress data\n' +
            '• All statistics\n\n' +
            'This action CANNOT be undone!\n\n' +
            'Are you sure you want to continue?'
        );
        
        if (!firstConfirm) {
            Notifications.show('Clear All cancelled', 'info');
            return;
        }
        
        // Second confirmation - Final warning
        const secondConfirm = confirm(
            '🚨 FINAL WARNING\n\n' +
            'You are about to delete ALL your workout data.\n' +
            'This action is PERMANENT and IRREVERSIBLE.\n\n' +
            'Click OK to proceed with deletion.'
        );
        
        if (!secondConfirm) {
            Notifications.show('Clear All cancelled - your data is safe', 'info');
            return;
        }
        
        // Third confirmation - Text input
        const confirmText = prompt(
            'Type "DELETE ALL" (exactly as shown, all caps) to confirm permanent deletion:'
        );
        
        if (confirmText !== 'DELETE ALL') {
            Notifications.show('Clear All cancelled - incorrect confirmation text', 'info');
            return;
        }
        
        // User confirmed 3 times - proceed with deletion
        try {
            // Get count before deletion for logging
            const workoutCount = Workout.getAllWorkouts().length;
            
            // Clear localStorage via Storage module
            FitTrackStorage.clearAllWorkouts();
            
            // Re-render dashboard (will show empty state)
            this.render();
            
            // Show success notification
            Notifications.show(
                `Successfully deleted ${workoutCount} workout(s). Starting fresh!`, 
                'success'
            );
            
            console.log(`✅ Cleared ${workoutCount} workouts from storage`);
            
        } catch (error) {
            console.error('❌ Error clearing all data:', error);
            Notifications.show('Failed to clear data: ' + error.message, 'error');
        }
    },

    /**
     * Close modal by ID
     * @param {string} modalId - Modal ID
     */
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.classList.add('closing');
            document.body.classList.remove('modal-open');
            
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }
};

// Initialize dashboard if on dashboard page
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure App is initialized
    setTimeout(() => {
        if (window.App && App.currentPage === 'dashboard') {
            Dashboard.init();
        }
    }, 100);
});

// Make available globally
window.Dashboard = Dashboard;