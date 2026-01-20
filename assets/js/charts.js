/* jslint browser: true, devel: true */
// Note: JSLint warnings acknowledged regarding ES6 syntax and quote styles.
/**
 * Charts Module
 * Handles progress visualization with Chart.js
 */

const Charts = {
    // Chart instances
    volumeChart: null,
    weightChart: null,
    setsRepsChart: null,
    exerciseChart: null,

    // Current filters
    filters: {
        exercise: '',
        timeRange: 'month'
    },

    /**
     * Initialize charts page
     */
    init() {
        console.log('Charts page initialized');
        this.setupEventListeners();
        this.populateExerciseSelect();
        this.render();
        
        // Handle window resize
        this.resizeTimeout = null;
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                console.log('Window resized, re-rendering charts');
                this.render();
            }, 300);
        });
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Exercise filter
        const exerciseSelect = document.getElementById('exercise-select');
        if (exerciseSelect) {
            exerciseSelect.addEventListener('change', (e) => {
                this.filters.exercise = e.target.value;
                this.render();
            });
        }

        // Time range filter
        const timeRange = document.getElementById('time-range');
        if (timeRange) {
            timeRange.addEventListener('change', (e) => {
                this.filters.timeRange = e.target.value;
                this.render();
            });
        }
    },

    /**
     * Populate exercise dropdown
     */
    populateExerciseSelect() {
        const select = document.getElementById('exercise-select');
        if (!select) return;

        const workouts = Workout.getAllWorkouts();
        const exercises = Utils.getUniqueExercises(workouts);

        // Clear existing options (keep first "Select Exercise")
        select.innerHTML = '<option value="">All Exercises</option>';

        // Add exercise options
        exercises.forEach(exercise => {
            const option = document.createElement('option');
            option.value = exercise;
            option.textContent = exercise;
            select.appendChild(option);
        });
    },

    /**
     * Render all charts
     */
    render() {
        // Show loading
        if (window.App) {
            App.showLoading();
        }

        let workouts = Workout.getAllWorkouts();

        // Check if we have data
        if (workouts.length === 0) {
            this.showEmptyState();
            if (window.App) {
                App.hideLoading();
            }
            return;
        }

        this.hideEmptyState();

        // Apply filters
        if (this.filters.timeRange !== 'all') {
            workouts = Utils.filterByDateRange(workouts, this.filters.timeRange);
        }
        if (this.filters.exercise) {
            workouts = Utils.filterByExercise(workouts, this.filters.exercise);
        }

        // Sort by date (oldest first for charts)
        workouts = Utils.sortByDateDesc(workouts).reverse();

        // Render each chart
        this.renderVolumeChart(workouts);
        this.renderWeightChart(workouts);
        this.renderSetsRepsChart(workouts);
        this.renderExerciseChart(workouts);

        // Hide loading after charts render
        setTimeout(() => {
            if (window.App) {
                App.hideLoading();
            }
        }, 300);
    },

    /**
     * Show empty state
     */
    showEmptyState() {
        const emptyState = document.getElementById('charts-empty-state');
        const chartsGrid = document.querySelector('.charts-grid');
        
        if (emptyState) emptyState.classList.add('show');
        if (chartsGrid) chartsGrid.style.display = 'none';
    },

    /**
     * Hide empty state
     */
    hideEmptyState() {
        const emptyState = document.getElementById('charts-empty-state');
        const chartsGrid = document.querySelector('.charts-grid');
        
        if (emptyState) emptyState.classList.remove('show');
        if (chartsGrid) chartsGrid.style.display = 'grid';
    },

    /**
     * Render volume over time chart
     */
    renderVolumeChart(workouts) {
        const ctx = document.getElementById('volume-chart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.volumeChart) {
            this.volumeChart.destroy();
        }

        // Prepare data
        const labels = workouts.map(w => Utils.formatDate(w.date));
        const data = workouts.map(w => Utils.calculateVolume(w));

        // Check if mobile
        const isMobile = window.innerWidth < 768;

        this.volumeChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Volume (kg)',
                    data: data,
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: isMobile ? 2 : 3,
                    pointHoverRadius: isMobile ? 4 : 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: !isMobile
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            maxRotation: isMobile ? 45 : 0,
                            minRotation: isMobile ? 45 : 0,
                            font: {
                                size: isMobile ? 10 : 12
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: isMobile ? 10 : 12
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    },

    /**
     * Render weight progress chart
     */
    renderWeightChart(workouts) {
        const ctx = document.getElementById('weight-chart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.weightChart) {
            this.weightChart.destroy();
        }

        // Prepare data
        const labels = workouts.map(w => Utils.formatDate(w.date));
        const data = workouts.map(w => parseFloat(w.weight));

        this.weightChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Weight (kg)',
                    data: data,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    },

    /**
     * Render sets & reps chart
     */
    renderSetsRepsChart(workouts) {
        const ctx = document.getElementById('sets-reps-chart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.setsRepsChart) {
            this.setsRepsChart.destroy();
        }

        // Prepare data
        const labels = workouts.map(w => Utils.formatDate(w.date));
        const setsData = workouts.map(w => parseInt(w.sets));
        const repsData = workouts.map(w => parseInt(w.reps));

        this.setsRepsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Sets',
                        data: setsData,
                        backgroundColor: '#f59e0b',
                    },
                    {
                        label: 'Reps',
                        data: repsData,
                        backgroundColor: '#8b5cf6',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },

    /**
     * Render exercise breakdown chart
     */
    renderExerciseChart(workouts) {
        const ctx = document.getElementById('exercise-chart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.exerciseChart) {
            this.exerciseChart.destroy();
        }

        // Count workouts per exercise
        const exerciseCounts = {};
        workouts.forEach(w => {
            exerciseCounts[w.exercise] = (exerciseCounts[w.exercise] || 0) + 1;
        });

        const labels = Object.keys(exerciseCounts);
        const data = Object.values(exerciseCounts);

        // Colors for pie chart
        const colors = [
            '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899',
            '#14b8a6', '#f97316', '#6366f1', '#84cc16', '#06b6d4'
        ];

        this.exerciseChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, labels.length),
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
};

// Initialize charts page if on charts page
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.App && App.currentPage === 'charts') {
            Charts.init();
        }
    }, 100);
});

// Make available globally
window.Charts = Charts;