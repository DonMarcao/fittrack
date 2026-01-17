# 💪 FITTRACK - Personal Fitness Progress Tracker


**Developer:** Marcus Machado  
**Project Type:** Level 5 Full Stack Web Development - Milestone 2  


---

## 📋 Table of Contents


## 🎯 Project Overview

**FitTrack** is an interactive web application designed to help fitness enthusiasts track their workout progress, visualize improvements over time, and make data-driven training decisions. The application provides:


### Target Audience

1. **Fitness Enthusiasts:** Individuals training 4-5 times per week who want to track progress systematically
2. **Beginners:** People starting their fitness journey who need simple, effective tracking
3. **Data-Driven Athletes:** Users who prefer quantitative progress measurement over subjective feelings
4. **Privacy-Conscious Users:** Individuals who want local data storage without cloud accounts

### Value Proposition


---

## 👥 User Experience Design (UX)

### User Stories


---

### Design Process

---

### Wireframes


---

### Color Scheme

**Accessibility:**

---

### Typography

---

## ⚙️ Features

---

## 🛠️ Technologies Used

### Languages

**HTML5:**

**CSS3:**

**JavaScript (ES6+):**

---
**Testing:**
- **W3C HTML Validator:** HTML validation
- **W3C CSS Validator:** CSS validation
- **JSLint:** JavaScript code quality
- **Chrome Lighthouse:** Performance and accessibility audit


**Deployment:**
- **GitHub Pages:** Static site hosting
- **Git:** Version control and deployment workflow

---

## 🧪 Testing

# FitTrack Testing Checklist

## Test Execution Date: _____________
## Tester: Marcus Machado
## Version: 1.0.0

---

## ✅ DASHBOARD PAGE TESTS

### Display & Stats
- [✅ ] Dashboard loads without errors
- [✅ ] Stats display correctly (Total, This Week, Last Workout, Streak)
- [✅ ] Empty state shows when no workouts exist
- [✅ ] Recent workouts list displays last 5 workouts
- [✅ ] Workout cards show correct data (exercise, date, sets, reps, weight, volume)
- [✅ ] Edit and Delete buttons are visible on each card

### Add Workout Functionality
- [✅ ] "+ Add Workout" button opens modal
- [✅ ] Modal closes on "Cancel" button
- [✅ ] Modal closes on X button
- [✅ ] Modal closes on ESC key
- [✅ ] Modal closes when clicking outside
- [✅ ] All form fields are present (Exercise, Date, Sets, Reps, Weight)
- [✅ ] Date defaults to today
- [✅ ] Cannot select future dates
- [✅ ] Form validation works (empty fields show errors)
- [✅ ] "Add Workout" button saves workout
- [✅ ] Success toast appears after adding
- [✅ ] Dashboard refreshes automatically
- [✅ ] Stats update after adding workout

### Edit Workout Functionality
- [✅ ] Edit button (✏️) opens edit modal
- [✅ ] Modal pre-fills with workout data
- [✅ ] Changes save successfully
- [✅ ] Success toast appears
- [✅ ] Card updates immediately
- [✅ ] Stats update if needed

### Delete Workout Functionality
- [✅ ] Delete button (🗑️) shows confirmation dialog
- [✅ ] "Cancel" in dialog cancels deletion
- [✅ ] "OK" in dialog deletes workout
- [✅ ] Success toast appears
- [✅ ] Workout disappears from list
- [✅ ] Stats update immediately

### Export & Backup
- [✅ ] "📊 Export CSV" button downloads CSV file
- [✅ ] CSV contains all workouts with correct data
- [✅ ] "💾 Backup" button downloads JSON file
- [✅ ] JSON contains all data
- [✅ ] "📥 Import" button opens file picker
- [✅ ] Import restores data correctly

---

## 📜 HISTORY PAGE TESTS

### Display
- [✅ ] History page loads without errors
- [✅ ] All workouts display (not just 5)
- [✅ ] Stats summary shows (Total, Volume, Exercises)
- [✅ ] Empty state shows when no workouts

### Filters
- [✅ ] Search by exercise name works
- [✅ ] Date filter "Last 7 Days" works
- [✅ ] Date filter "Last 30 Days" works
- [✅ ] Date filter "Last Year" works
- [✅] Date filter "All Time" works
- [✅ ] "Clear Filters" button resets filters
- [✅ ] Stats update based on filters

### Actions
- [✅ ] Add workout button works
- [✅ ] Edit workout works from history
- [✅ ] Delete workout works from history
- [✅ ] All actions refresh the page

---

## 📊 CHARTS PAGE TESTS

### Display
- [✅ ] Charts page loads without errors
- [✅ ] All 4 charts render correctly:
  - [✅ ] Volume Over Time (line chart)
  - [✅ ] Weight Progress (line chart)
  - [✅] Sets & Reps (bar chart)
  - [✅] Exercise Breakdown (doughnut chart)
- [✅ ] Empty state shows when no workouts
- [✅ ] Charts have proper labels and colors

### Filters
- [ ] Exercise dropdown populates with exercises
- [ ] Selecting exercise filters all charts
- [ ] Time range filter works (Week/Month/Year/All)
- [ ] Charts update when filters change
- [ ] Loading indicator shows during render

### Responsiveness
- [ ] Charts resize on window resize
- [ ] Charts display properly on mobile
- [ ] Labels are readable on small screens

---

## 🧮 CALCULATORS PAGE TESTS

### BMI Calculator
- [✅ ] Weight and Height inputs accept numbers
- [✅ ] "Calculate BMI" button works
- [✅ ] Result displays with correct BMI value
- [✅ ] Result shows correct category (Underweight/Normal/Overweight/Obese)
- [✅ ] Color coding matches category
- [✅ ] Validation works (empty fields show errors)
- [✅ ] Invalid inputs (negative, too large) show errors

### 1RM Calculator
- [✅ ] Weight and Reps inputs accept numbers
- [✅ ] "Calculate 1RM" button works
- [✅ ] Result displays estimated 1RM
- [✅ ] Percentage table displays (95%, 90%, 85%, etc.)
- [✅ ] Training zones info displays
- [✅ ] Validation works (reps 1-10 only)

---

## 🎨 THEME & UI TESTS

### Theme Toggle
- [✅ ] Theme toggle button exists in header (🌙/☀️)
- [✅ ] Clicking toggles between light and dark
- [✅ ] Theme persists after page refresh
- [✅ ] All pages respect theme setting
- [✅ ] Dark theme has proper contrast
- [✅ ] Light theme has proper contrast

### Navigation
- [ ] Logo click returns to dashboard
- [✅ ] All nav links work (Dashboard, History, Charts, Calculators)
- [ ] Active page is highlighted in nav
- [✅ ] Navigation works on all pages
- [✅ ] Mobile navigation works (doesn't overflow)

### Responsive Design
- [✅ ] Desktop (1920px): 4-column stats, 2-column charts ✅
- [✅ ] Laptop (1280px): Proper layout ✅
- [✅ ] Tablet (768px): 2-column stats, 1-column charts ✅
- [✅ ] Mobile (375px): 1-column everything, full-width buttons ✅
- [✅ ] Very small (320px): Everything still usable ✅

---

## ⌨️ KEYBOARD SHORTCUTS TESTS

- [✅ ] Ctrl/Cmd + K opens Add Workout modal
- [✅ ] Ctrl/Cmd + E exports CSV
- [✅ ] Ctrl/Cmd + / shows shortcuts help
- [✅ ] ESC closes modals
- [✅ ] Enter submits forms in modals

---

## 💾 DATA PERSISTENCE TESTS

### localStorage
- [✅ ] Workouts persist after page refresh
- [✅ ] Theme persists after page refresh
- [✅ ] Data survives browser close/reopen
- [✅ ] Multiple workouts can be stored
- [✅ ] Edit/Delete persists correctly

### Data Integrity
- [✅ ] No data corruption after many operations
- [✅ ] Import/Export preserves all data
- ✅[ ] Backup file is valid JSON
- [✅ ] CSV export is valid format

---

## 🛡️ VALIDATION TESTS

### Workout Validation
- [✅ ] Exercise name required (2-50 chars)
- [✅ ] Exercise name rejects special characters (!@#$)
- [✅ ] Date required
- [✅ ] Date cannot be in future
- [✅ ] Date cannot be >10 years ago
- [✅ ] Sets required (1-20, integers only)
- [✅ ] Sets rejects decimals (2.5)
- [✅ ] Reps required (1-100, integers only)
- [✅ ] Reps rejects decimals (10.5)
- [✅ ] Weight required (0.5-500kg)
- [✅ ] Weight accepts 0.5 increments (80.5kg)
- [✅ ] Weight rejects other decimals (80.3kg)

### Calculator Validation
- [✅ ] BMI: Weight 20-300kg
- [✅ ] BMI: Height 50-250cm
- [✅ ] 1RM: Weight 1-500kg
- [✅ ] 1RM: Reps 1-10 only

---

## 🌐 CROSS-BROWSER TESTS

### Chrome
- [✅ ] All features work ✅
- [✅ ] No console errors ✅
- [✅ ] Charts render correctly ✅

### Firefox
- [✅ ] All features work
- [✅ ] No console errors
- [✅ ] Charts render correctly
- [✅ ] Date picker works

### Safari (if available)
- [ ] All features work
- [ ] No console errors
- [ ] Charts render correctly
- [ ] Date picker works

### Edge
- [✅ ] All features work
- [✅ ] No console errors
- [✅ ] Charts render correctly

---

## 📱 MOBILE DEVICE TESTS

### iOS Safari (if available)
- [ ] Touch interactions work
- [ ] Forms are usable (no zoom on input)
- [ ] Charts display properly
- [ ] Modals are full-screen

### Android Chrome (if available)
- [✅ ] Touch interactions work
- [✅ ] Forms are usable
- [✅ ] Charts display properly

---

## 🚨 ERROR HANDLING TESTS

- [ ] localStorage full shows proper error
- [ ] Corrupted data auto-recovers
- [ ] Invalid workout data is filtered
- [ ] Network errors handled gracefully (if applicable)
- [ ] Missing required fields show clear errors

---

## ♿ ACCESSIBILITY TESTS

- [ ] Tab navigation works through all interactive elements
- [ ] Focus visible on keyboard navigation
- [ ] Buttons have descriptive labels
- [ ] Forms have proper labels
- [ ] Error messages are clear

---

## 🎯 PERFORMANCE TESTS

- [ ] Dashboard loads in <1 second
- [ ] Charts render in <2 seconds
- [ ] No lag when adding workouts
- [ ] Smooth animations
- [ ] No memory leaks (check DevTools)

---

## 📝 NOTES & BUGS FOUND

### Critical Bugs (Stop deployment):
- 
- 

### High Priority Bugs (Fix before release):
- 
- 

### Medium Priority Bugs (Fix if time):
- 
- 

### Low Priority Bugs (Nice to have):
- 
- 

---

## ✅ FINAL SIGN-OFF

- [ ] All critical tests passed
- [ ] All high-priority bugs fixed
- [ ] All features working as expected
- [ ] Ready for deployment

**Tested by:** _____________
**Date:** _____________
**Signature:** _____________
---

## 🚀 Deployment
---

## 📄 License

This project is developed for **educational purposes only** as part of the Level 5 Full Stack Web Development diploma portfolio.

**Code License:** MIT (for original code written by Marcus Machado)  
**Content License:** Educational use only  

**Redistribution:** Please credit Marcus Machado if you reference or adapt this code for educational purposes.

---

## 📞 Contact

**Developer:** Marcus Machado  
**GitHub:** [@DonMarcao](https://github.com/DonMarcao)  

---
**Current Version:** 0.1.0 (Planning Phase)

---
