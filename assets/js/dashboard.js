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
        // Add workout buttons
        const addButtons = document.querySelectorAll('.btn-primary');
        addButtons.forEach(btn => {
            if (btn.textContent.includes('Add') || btn.textContent.includes('+')) {
                btn.addEventListener('click', () => this.showAddWorkoutModal());
            }
        });
    },

    /**
     * Render dashboard
     */
    render() {
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
        const container = document.querySelector('.recent-workouts');
        if (!container) return;

        const workouts = Workout.getAllWorkouts();
        const sorted = Utils.sortByDateDesc(workouts);
        const recent = sorted.slice(0, 5); // Last 5 workouts

        // Find or create workout list
        let listContainer = container.querySelector('.workout-list');
        if (!listContainer) {
            listContainer = document.createElement('div');
            listContainer.className = 'workout-list';
            
            // Remove empty state if exists
            const emptyState = container.querySelector('.empty-state');
            if (emptyState) {
                emptyState.remove();
            }
            
            container.appendChild(listContainer);
        }

        // Clear existing content
        listContainer.innerHTML = '';

        if (recent.length === 0) {
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
        recent.forEach(workout => {
            const card = this.createWorkoutCard(workout);
            listContainer.appendChild(card);
        });
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