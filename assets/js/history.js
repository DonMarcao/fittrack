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
    showAddWorkoutModal() {
        // Reuse Dashboard modal
        if (window.Dashboard && Dashboard.showAddWorkoutModal) {
            Dashboard.showAddWorkoutModal();
        } else {
            Notifications.info('Dashboard module not loaded');
        }
    },

    /**
     * Edit workout
     * @param {string} id - Workout ID
     */
    editWorkout(id) {
        // Reuse Dashboard edit modal
        if (window.Dashboard && Dashboard.editWorkout) {
            Dashboard.ed