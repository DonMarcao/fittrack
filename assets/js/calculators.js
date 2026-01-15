/**
 * Calculators Module
 * Handles BMI and 1RM calculators
 */

const Calculators = {
    /**
     * Initialize calculators page
     */
    init() {
        console.log('Calculators page initialized');
        this.setupEventListeners();
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // BMI Calculator
        const bmiForm = document.getElementById('bmi-form');
        if (bmiForm) {
            bmiForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateBMI();
            });
        }

        // 1RM Calculator
        const ormForm = document.getElementById('orm-form');
        if (ormForm) {
            ormForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculate1RM();
            });
        }
    },

    /**
     * Calculate BMI
     */
    calculateBMI() {
        // Get form data
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value);

        // Clear previous errors
        Validation.clearAllErrors();

        // Validate
        const validation = Validation.validateBMI({ weight, height });
        
        if (!validation.isValid) {
            Validation.showErrors('bmi-form', validation.errors);
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        // Determine category
        let category = '';
        let categoryColor = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            categoryColor = '#3b82f6'; // blue
        } else if (bmi < 25) {
            category = 'Normal weight';
            categoryColor = '#22c55e'; // green
        } else if (bmi < 30) {
            category = 'Overweight';
            categoryColor = '#f59e0b'; // orange
        } else {
            category = 'Obese';
            categoryColor = '#ef4444'; // red
        }

        // Display result
        this.displayBMIResult(bmi, category, categoryColor);
    },

    /**
     * Display BMI result
     */
    displayBMIResult(bmi, category, color) {
        let resultDiv = document.getElementById('bmi-result');
        
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'bmi-result';
            resultDiv.className = 'result';
            document.getElementById('bmi-form').after(resultDiv);
        }

        resultDiv.style.borderLeftColor = color;
        resultDiv.innerHTML = `
            <h3 style="color: ${color};">Your BMI: ${bmi.toFixed(1)}</h3>
            <p style="font-size: 1.125rem; font-weight: 600; color: ${color}; margin: 0.5rem 0;">
                ${category}
            </p>
            <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.875rem;">
                <strong>BMI Categories:</strong><br>
                Underweight: &lt; 18.5<br>
                Normal weight: 18.5 - 24.9<br>
                Overweight: 25 - 29.9<br>
                Obese: ≥ 30
            </p>
        `;

        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },

    /**
     * Calculate 1 Rep Max
     */
    calculate1RM() {
        // Get form data
        const weight = parseFloat(document.getElementById('orm-weight').value);
        const reps = parseInt(document.getElementById('orm-reps').value);

        // Clear previous errors
        Validation.clearAllErrors();

        // Validate
        const validation = Validation.validate1RM({ weight, reps });
        
        if (!validation.isValid) {
            Validation.showErrors('orm-form', validation.errors);
            return;
        }

        // Calculate 1RM using Epley formula
        const oneRepMax = weight * (1 + reps / 30);

        // Calculate percentage ranges
        const percentages = [
            { percent: 95, reps: '1-2', weight: oneRepMax * 0.95 },
            { percent: 90, reps: '2-4', weight: oneRepMax * 0.90 },
            { percent: 85, reps: '4-6', weight: oneRepMax * 0.85 },
            { percent: 80, reps: '6-8', weight: oneRepMax * 0.80 },
            { percent: 75, reps: '8-10', weight: oneRepMax * 0.75 },
            { percent: 70, reps: '10-12', weight: oneRepMax * 0.70 },
            { percent: 65, reps: '12-15', weight: oneRepMax * 0.65 },
            { percent: 60, reps: '15-20', weight: oneRepMax * 0.60 }
        ];

        // Display result
        this.display1RMResult(oneRepMax, percentages);
    },

    /**
     * Display 1RM result
     */
    display1RMResult(oneRepMax, percentages) {
        let resultDiv = document.getElementById('orm-result');
        
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'orm-result';
            resultDiv.className = 'result';
            document.getElementById('orm-form').after(resultDiv);
        }

        // Build percentage table
        let tableHTML = `
            <table style="width: 100%; margin-top: 1rem; border-collapse: collapse;">
                <thead>
                    <tr style="background-color: var(--background-hover);">
                        <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--border-color);">% of 1RM</th>
                        <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--border-color);">Weight (kg)</th>
                        <th style="padding: 0.5rem; text-align: left; border: 1px solid var(--border-color);">Reps</th>
                    </tr>
                </thead>
                <tbody>
        `;

        percentages.forEach(p => {
            tableHTML += `
                <tr>
                    <td style="padding: 0.5rem; border: 1px solid var(--border-color);">${p.percent}%</td>
                    <td style="padding: 0.5rem; border: 1px solid var(--border-color); font-weight: 600;">${p.weight.toFixed(1)}kg</td>
                    <td style="padding: 0.5rem; border: 1px solid var(--border-color);">${p.reps}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        resultDiv.innerHTML = `
            <h3 style="color: var(--success-dark);">Your Estimated 1 Rep Max</h3>
            <p style="font-size: 2rem; font-weight: 700; color: var(--primary-green); margin: 0.5rem 0;">
                ${oneRepMax.toFixed(1)} kg
            </p>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">
                Based on Epley Formula: 1RM = Weight × (1 + Reps/30)
            </p>
            ${tableHTML}
            <div style="margin-top: 1rem; padding: 1rem; background-color: var(--background-hover); border-radius: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                <strong>Training Zones:</strong><br>
                • 90-100%: Strength/Power (1-4 reps)<br>
                • 80-90%: Hypertrophy/Strength (4-8 reps)<br>
                • 70-80%: Hypertrophy (8-12 reps)<br>
                • 60-70%: Endurance (12-20 reps)
            </div>
        `;

        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

// Initialize calculators page if on calculators page
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.App && App.currentPage === 'calculators') {
            Calculators.init();
        }
    }, 100);
});

// Make available globally
window.Calculators = Calculators;