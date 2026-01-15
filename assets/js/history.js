/**
 * History Module
 * Handles workout history page functionality
 */

const WorkoutHistory = {
    // Current filters
    filters: {
        search: '',
        dateRange: 'all'
    },

    /**
     * Initialize history page
     */
    init() {
        console.log('History page initialized');
        this.setupEventListeners();
        this.render();
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Add workout button
        const addBtn = document.getElementById('add-workout-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.showAddWorkoutModal());
        }

        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', Utils.debounce((e) => {
                this.filters.search = e.target.value;
                this.render();
            }, 300));
        }

        // Date filter
        const dateFilter = document.getElementById('date-filter');
        if (dateFilter) {
            dateFilter.addEventListener('change', (e) => {
                this.filters.dateRange = e.target.value;
                this.render();
            });
        }

        // Clear filters
        const clearBtn = document.getElementById('clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }
    },

    /**
     * Clear all filters
     */
    clearFilters() {
        this.filters = {
            search: '',
            dateRange: 'all'
        };

        // Reset inputs
        const searchInput = document.getElementById('search-input');
        const dateFilter = document.getElementById('date-filter');
        
        if (searchInput) searchInput.value = '';
        if (dateFilter) dateFilter.value = 'all';

        this.render();
    },

    /**
     * Render history page
     */
    render() {
        this.displayStats();
        this.displayWorkouts();
    },

    /**
     * Display statistics
     */
    displayStats() {
        let workouts = Workout.getAllWorkouts();

        // Apply filters for stats
        if (this.filters.search) {
            workouts = Utils.filterByExercise(workouts, this.filters.search);
        }
        if (this.filters.dateRange !== 'all') {
            workouts = Utils.filterByDateRange(workouts, this.filters.dateRange);
        }

        // Total count
        const totalCount = document.getElementById('total-count');
        if (totalCount) {
            totalCount.textContent = workouts.length;
        }

        // Total volume
        const totalVolume = document.getElementById('total-volume');
        if (totalVolume) {
            const volume = workouts.reduce((sum, w) => sum + Utils.calculateVolume(w), 0);
            totalVolume.textContent = `${volume}kg`;
        }

        // Unique exercises
        const uniqueExercises = document.getElementById('unique-exercises');
        if (uniqueExercises) {
            const exercises = Utils.getUniqueExercises(workouts);
            uniqueExercises.textContent = exercises.length;
        }
    },

    /**
     * Display workouts list
     */
    displayWorkouts() {
        const container = document.getElementById('workout-list');
        if (!container) return;

        let workouts = Workout.getAllWorkouts();

        // Apply filters
        if (this.filters.search) {
            workouts = Utils.filterByExercise(workouts, this.filters.search);
        }
        if (this.filters.dateRange !== 'all') {
            workouts = Utils.filterByDateRange(workouts, this.filters.dateRange);
        }

        // Sort by date (newest first)
        workouts = Utils.sortByDateDesc(workouts);

        // Clear container
        container.innerHTML = '';

        if (workouts.length === 0) {
            // Show empty state
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <p>No workouts found${this.filters.search || this.filters.dateRange !== 'all' ? ' with current filters' : ''}.</p>
                <button class="btn-primary">Add Your First Workout</button>
            `;
            container.appendChild(emptyState);

            // Add event listener
            const btn = emptyState.querySelector('.btn-primary');
            btn.addEventListener('click', () => this.showAddWorkoutModal());

            return;
        }

        // Display all workouts
        workouts.forEach(workout => {
            const card = this.createWorkoutCard(workout);
            container.appendChild(card);
        });
    },

    /**
     * Create workout card
     * @param {Object} workout - Workout object
     * @returns {HTMLElement} Card element
     */
    createWorkoutCard(workout) {
        const card = document.createElement('div');
        card.className = 'workout-card';
        
        const volume = Utils.calculateVolume(workout);
        
        card.innerHTML = `
            <div class="workout-info">
                <h4>${Utils.sanitizeHTML(workout.exercise)}</h4>
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
        deleteBtn.addEventListener('click', () => this.deleteWorkout(workout.id));

        return card;
    },

    /**
     * Show add workout modal
     */
    /**
     * Show add workout modal
     */
    showAddWorkoutModal() {
        // Create modal using same code as Dashboard
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'add-workout-modal';

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
                            <input type="text" id="add-exercise" name="exercise" placeholder="e.g., Bench Press" required>
                        </div>
                        <div class="form-group">
                            <label for="add-date">Date *</label>
                            <input type="date" id="add-date" name="date" required>
                        </div>
                        <div class="form-group">
                            <label for="add-sets">Sets *</label>
                            <input type="number" id="add-sets" name="sets" placeholder="3" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="add-reps">Reps *</label>
                            <input type="number" id="add-reps" name="reps" placeholder="10" min="1" max="100" required>
                        </div>
                        <div class="form-group">
                            <label for="add-weight">Weight (kg) *</label>
                            <input type="number" id="add-weight" name="weight" placeholder="80" min="0.5" max="500" step="0.5" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-action="close">Cancel</button>
                    <button type="submit" class="btn-primary" data-action="save">Add Workout</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.classList.add('modal-open');

        const dateInput = overlay.querySelector('#add-date');
        dateInput.value = Utils.getTodayDate();

        const form = overlay.querySelector('#add-workout-form');
        const closeButtons = overlay.querySelectorAll('[data-action="close"]');
        const saveButton = overlay.querySelector('[data-action="save"]');

        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.closeModal('add-workout-modal'));
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal('add-workout-modal');
            }
        });

        saveButton.addEventListener('click', () => {
            const success = Workout.addWorkout(form);
            if (success) {
                this.closeModal('add-workout-modal');
                this.render(); // ← AUTO REFRESH
            }
        });

        form.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                saveButton.click();
            }
        });

        setTimeout(() => {
            overlay.querySelector('#add-exercise').focus();
        }, 100);
    },

    /**
     * Show edit workout modal
     */
    showEditWorkoutModal(workout) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'edit-workout-modal';

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

        document.body.appendChild(overlay);
        document.body.classList.add('modal-open');

        const form = overlay.querySelector('#edit-workout-form');
        const closeButtons = overlay.querySelectorAll('[data-action="close"]');
        const saveButton = overlay.querySelector('[data-action="save"]');

        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.closeModal('edit-workout-modal'));
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal('edit-workout-modal');
            }
        });

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
                this.render(); // ← AUTO REFRESH
            }
        });

        setTimeout(() => {
            overlay.querySelector('#edit-exercise').focus();
        }, 100);
    },

    /**
     * Close modal
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
    },

    /**
     * Edit workout
     * @param {string} id - Workout ID
     */
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
     * Delete workout
     * @param {string} id - Workout ID
     */
    deleteWorkout(id) {
        const success = Workout.deleteWithConfirmation(id);
        if (success) {
            this.render(); // ← AUTO REFRESH
        }
    }
};

// Initialize history page if on history page
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.App && App.currentPage === 'history') {
            WorkoutHistory.init();
        }
    }, 100);
});

// Make available globally
window.WorkoutHistory = WorkoutHistory;