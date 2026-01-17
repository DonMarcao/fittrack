# 💪 FITTRACK - Personal Fitness Progress Tracker

![FitTrack](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

![Project Banner](assets/images/screenshots/banner.png)

**Live Site:** https://donmarcao.github.io/fittrack/  
**Repository:** https://github.com/DonMarcao/fittrack  
**Developer:** Marcus Machado  
**Project Type:** Level 5 Full Stack Web Development - Milestone 2  
**Submission Date:** January 2026

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [User Experience Design (UX)](#user-experience-design-ux)
   - [User Stories](#user-stories)
   - [Design Process](#design-process)
   - [Wireframes](#wireframes)
   - [Color Scheme](#color-scheme)
   - [Typography](#typography)
3. [Features](#features)
   - [Existing Features](#existing-features)
   - [Features Left to Implement](#features-left-to-implement)
4. [Technologies Used](#technologies-used)
   - [Languages](#languages)
   - [Libraries](#libraries)
   - [Tools & Programs](#tools--programs)
5. [Testing](#testing)
   - [Manual Testing](#manual-testing)
   - [Code Validation](#code-validation)
   - [Bug Tracking](#bug-tracking)
   - [Cross-Browser Compatibility](#cross-browser-compatibility)
6. [Deployment](#deployment)
   - [GitHub Pages Deployment](#github-pages-deployment)
   - [Local Development](#local-development)
7. [Development Process](#development-process)
   - [Version Control](#version-control)
   - [Commit History](#commit-history)
8. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Acknowledgments](#acknowledgments)

---

## 🎯 Project Overview

**FitTrack** is an interactive web application designed to help fitness enthusiasts track their workout progress, visualize improvements over time, and make data-driven training decisions. The application provides:

- **Workout Logging:** Add, edit, and delete workout sessions with detailed information
- **Progress Visualization:** Interactive charts showing volume, weight, and exercise distribution
- **Fitness Calculators:** BMI and One-Rep Max (1RM) calculators with percentage tables
- **Data Management:** CSV export, JSON backup/import functionality
- **Data Persistence:** Client-side storage using localStorage (no account required)
- **Dark/Light Theme:** User preference saved and persisted
- **Mobile Navigation:** Responsive hamburger menu for mobile devices
- **Keyboard Shortcuts:** Quick actions (Ctrl+K, Ctrl+E, Ctrl+/)

### Project Purpose

This website was developed as part of the Level 5 Diploma in Full Stack Web Development portfolio, demonstrating proficiency in:

✅ **Interactive Frontend Development** (JavaScript ES6+)  
✅ **Dynamic User Interfaces** (Form handling, CRUD operations)  
✅ **Data Visualization** (Chart.js - 4 chart types)  
✅ **Client-Side Storage** (localStorage API with error recovery)  
✅ **Responsive Design** (Mobile-first approach with hamburger menu)  
✅ **Accessibility Standards** (ARIA labels, keyboard navigation)  
✅ **Code Validation** (W3C HTML/CSS, JSLint)  
✅ **Version Control** (Git & GitHub - 55 commits)  
✅ **Testing & Quality Assurance** (150+ tests, 96.7% pass rate)

### Target Audience

1. **Fitness Enthusiasts:** Individuals training 4-5 times per week who want to track progress systematically
2. **Beginners:** People starting their fitness journey who need simple, effective tracking
3. **Data-Driven Athletes:** Users who prefer quantitative progress measurement over subjective feelings
4. **Privacy-Conscious Users:** Individuals who want local data storage without cloud accounts

### Value Proposition

Unlike complex fitness apps with subscriptions and accounts, **FitTrack** focuses on simplicity and privacy:

- **No Account Required:** All data stored locally on your device
- **Fast & Lightweight:** Instant load times, no server requests
- **Mobile-First:** Optimized for gym use on smartphones with hamburger menu
- **Data Ownership:** Export your data anytime (CSV + JSON), no vendor lock-in
- **Free Forever:** No premium features, no paywalls

---
## 👥 User Experience Design (UX)

### User Stories

User stories define the core functionality from the perspective of different user types. All user stories follow the format: **"As a [user type], I want [goal], so that [benefit]."**

#### 💪 New User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-01** | As a new user, I want to understand the app's purpose immediately, so that I know if it's useful for me | Clear hero section with "Track Your Fitness Progress" messaging | Dashboard with hero text and quick stats | ✅ | [View](#) |
| **US-02** | As a new user, I want to add my first workout easily, so that I can start tracking immediately | "Add Workout" button prominently displayed, simple form | Primary CTA button, modal form with validation | ✅ | [View](#) |
| **US-03** | As a new user, I want to see example data or guidance, so that I understand how to use the app | Empty state shows helpful message: "Add your first workout!" | Empty state component with call-to-action | ✅ | [View](#) |
| **US-04** | As a new user, I want the interface to be intuitive, so that I don't need instructions | Clear labels, standard UI patterns, visual hierarchy | Semantic HTML, consistent styling, logical flow | ✅ | [View](#) |
| **US-05** | As a new user, I want to know my data is private, so that I feel secure using the app | Clear message: "Your data stays on your device" | localStorage only, no external API calls | ✅ | [View](#) |

#### 🏋️ Returning User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-06** | As a returning user, I want to see my workout history, so that I can track what I've done | Workout list displays date, exercise, sets, reps, weight | History page with filterable list | ✅ | [View](#) |
| **US-07** | As a returning user, I want to add today's workout quickly, so that logging doesn't disrupt training | Form pre-fills with today's date | Date input defaults to current date | ✅ | [View](#) |
| **US-08** | As a returning user, I want to edit past workouts, so that I can correct mistakes | Edit button on each workout, opens form with data | Edit modal with pre-filled form | ✅ | [View](#) |
| **US-09** | As a returning user, I want to delete workouts, so that I can remove errors | Delete button with confirmation dialog | Confirmation dialog before deletion | ✅ | [View](#) |
| **US-10** | As a returning user, I want to search/filter workouts, so that I can find specific sessions | Search by exercise name, filter by date range | Search input and date filter dropdowns | ✅ | [View](#) |

#### 📊 Advanced User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-11** | As an advanced user, I want to see my progress over time, so that I can track improvements | Interactive charts showing weight/volume progression | Chart.js with 4 chart types (Volume, Weight, Sets/Reps, Exercise Breakdown) | ✅ | [View](#) |
| **US-12** | As an advanced user, I want to identify personal records, so that I can celebrate achievements | PR badge displayed on highest weight for each exercise | PR detection algorithm with visual badge | ❌ | [Future Enhancement](#features-left-to-implement) |
| **US-13** | As an advanced user, I want to compare exercises, so that I can balance training | Stats dashboard showing volume per muscle group | Statistics aggregation and display | ❌ | [Future Enhancement](#features-left-to-implement) |
| **US-14** | As an advanced user, I want to export my data, so that I can analyze it elsewhere | "Export to CSV" button downloads all workouts | CSV generation with download trigger | ✅ | [View](#) |
| **US-15** | As an advanced user, I want to see trends, so that I can adjust my program | Trend lines on charts, average calculations | Chart.js trend line plugin or calculation | ❌ | [Future Enhancement](#features-left-to-implement) |

#### 🧮 Calculator User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-16** | As any user, I want to calculate my BMI, so that I can track body composition goals | BMI calculator with weight/height inputs, result with category | BMI calculator with color-coded results | ✅ | [View](#) |
| **US-17** | As any user, I want to calculate 1RM, so that I can plan progressive overload | 1RM calculator with weight/reps inputs, estimated max result | 1RM calculator with Epley formula + percentage table | ✅ | [View](#) |
| **US-18** | As any user, I want calculator results explained, so that I understand the numbers | Tooltips/help text explaining BMI ranges, 1RM usage | Help text and training zones explanation | ✅ | [View](#) |

#### 📱 Mobile & Accessibility Stories

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-19** | As any user, I want the app to work on my phone, so that I can log at the gym | Fully responsive design, touch-friendly buttons (44px+) | Mobile-first CSS with media queries, 48px+ touch targets | ✅ | [View](#) |
| **US-20** | As any user, I want fast performance, so that I don't wait | Instant feedback on actions, no loading delays | Optimized JavaScript, localStorage caching | ✅ | [View](#) |
| **US-21** | As any user, I want clear feedback on actions, so that I know what happened | Success/error messages for all actions | Toast notification system (success/error/warning/info) | ✅ | [View](#) |
| **US-22** | As any user, I want keyboard navigation, so that I can use without mouse | Tab order logical, Enter submits forms, Esc closes modals | Focus management and keyboard event handlers | ✅ | [View](#) |
| **US-23** | As a user with visual impairments, I want screen reader support, so that I can use the app | Alt text, labels, ARIA attributes | ARIA labels on buttons, semantic HTML | ✅ | [View](#) |
| **US-24** | As any user, I want a professional design, so that the app feels trustworthy | Consistent styling, clear hierarchy, polished UI | Design system with CSS variables, consistent components | ✅ | [View](#) |
| **US-25** | As any user, I want to choose light/dark theme, so that I match my preference | Theme toggle button, preference saved | Theme switcher with localStorage persistence | ✅ | [View](#) |

#### 🆕 Additional Features Implemented

| ID | User Story | Acceptance Criteria | Implementation | Status | Screenshot |
|----|------------|---------------------|----------------|--------|------------|
| **US-26** | As a mobile user, I want easy navigation on small screens, so that I can access all pages | Hamburger menu with slide-in navigation | Responsive hamburger menu with smooth animation | ✅ | [View](#) |
| **US-27** | As a power user, I want keyboard shortcuts, so that I can work faster | Quick actions accessible via hotkeys | Ctrl+K (Add Workout), Ctrl+E (Export), Ctrl+/ (Shortcuts Help) | ✅ | [View](#) |
| **US-28** | As any user, I want to backup my data, so that I don't lose progress | Backup/restore functionality with JSON export | JSON backup with metadata, import with confirmation | ✅ | [View](#) |
| **US-29** | As any user, I want data validation, so that I don't enter invalid workouts | Form validation with helpful error messages | Real-time validation with shake animation, detailed error messages | ✅ | [View](#) |
| **US-30** | As any user, I want my data to be safe, so that I don't lose it due to corruption | Automatic error recovery and data cleaning | Corrupted data detection with auto-recovery, version tracking | ✅ | [View](#) |

---

### Summary

**Total User Stories:** 30  
**Completed:** 25 (83.3%)  
**Planned for Future:** 5 (16.7%)

---

## ⚙️ Features

### Existing Features

#### 1. 🏠 Dashboard - Central Hub
- **Quick Stats Cards:** Total workouts, workouts this week, last workout date, current streak
- **Recent Workouts Preview:** Last 5 workouts displayed with exercise, sets, reps, weight, volume
- **Quick Actions:** Add Workout (Ctrl+K), Export CSV (Ctrl+E), Backup Data, Import Data
- **Empty State:** Encouraging message with clear CTA when no workouts exist
- **Real-time Updates:** All stats recalculate automatically on CRUD operations

**Implementation:** JavaScript data aggregation from localStorage, dynamic DOM manipulation, event delegation for action buttons.

---

#### 2. ✍️ Workout Management (CRUD)

**Add Workout:**
- Modal form with 5 required fields (Exercise, Date, Sets, Reps, Weight)
- Date defaults to today, cannot select future dates
- Real-time form validation with helpful error messages
- Shake animation on validation errors
- Success toast notification on save
- Keyboard shortcut: `Ctrl+K`

**Edit Workout:**
- Edit button (✏️) on each workout card
- Modal pre-fills with existing data
- Same validation as Add Workout
- Instant UI update on save

**Delete Workout:**
- Delete button (🗑️) with confirmation dialog
- Prevents accidental deletion
- Stats update immediately after deletion

**Form Validation:**
- Exercise name: 2-50 characters, letters/numbers/spaces/hyphens/apostrophes only
- Date: Required, cannot be future, cannot be >10 years ago
- Sets: 1-20, integers only (rejects decimals like 2.5)
- Reps: 1-100, integers only
- Weight: 0.5-500kg, increments of 0.5kg only (e.g., 80.5 ✅, 80.3 ❌)

**Implementation:** Modal system with overlay, Validation.js module, localStorage CRUD operations, Toast notification system.

---

#### 3. 📜 Workout History

**Complete List:**
- All workouts displayed in reverse chronological order
- Each card shows: Date, Exercise, Sets, Reps, Weight, Volume (calculated)
- Edit/Delete actions on each card

**Search & Filters:**
- **Search:** Real-time filter by exercise name
- **Date Filter:** Last 7 Days, Last 30 Days, Last Year, All Time
- **Clear Filters:** Reset button to show all workouts

**Stats Summary:**
- Total Workouts count
- Total Volume (kg) across all workouts
- Unique Exercises count

**Implementation:** JavaScript array methods (filter, sort, map), dynamic list rendering, debounced search input.

---

#### 4. 📊 Progress Charts (Chart.js)

**4 Interactive Charts:**

1. **Volume Over Time:** Line chart (green) showing total volume progression
2. **Weight Progress:** Line chart (blue) tracking weight increases per exercise
3. **Sets & Reps Distribution:** Bar chart (orange/purple) comparing sets vs reps
4. **Exercise Breakdown:** Doughnut chart showing workout distribution by exercise type

**Features:**
- **Dynamic Filters:** Filter by exercise + time range (Week/Month/Year/All)
- **Responsive:** Auto-resize on window resize, mobile-optimized
- **Interactive Tooltips:** Hover for exact values and dates
- **Loading States:** Spinner during chart rendering
- **Empty State:** Helpful message when no data available

**Mobile Optimizations:**
- Smaller font sizes (10px vs 12px)
- Rotated labels (45°) to prevent overlap
- Reduced point sizes
- Legend hidden on mobile for space

**Implementation:** Chart.js 4.4.1, custom data transformation functions, window resize listener, mobile detection via window.innerWidth.

---

#### 5. 🧮 Fitness Calculators

**BMI Calculator:**
- **Inputs:** Weight (kg), Height (cm)
- **Output:** BMI value with category classification
- **Categories:** Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (≥30)
- **Visual Feedback:** Color-coded results (green/yellow/orange/red)
- **Formula:** BMI = weight / (height_m²)
- **Validation:** Weight 20-300kg, Height 50-250cm

**1RM (One Rep Max) Calculator:**
- **Inputs:** Weight lifted (kg), Reps performed (1-10)
- **Output:** Estimated 1RM using Epley formula
- **Percentage Table:** Shows weights for 95%, 90%, 85%, 80%, 75%, 70%, 65%, 60% of 1RM
- **Training Zones Guide:** 
  - Strength: 90-100% (1-5 reps)
  - Hypertrophy: 70-90% (6-12 reps)
  - Endurance: 60-70% (12+ reps)
- **Formula:** 1RM = weight × (1 + reps/30)
- **Validation:** Weight 1-500kg, Reps 1-10 only (accurate range)

**Implementation:** JavaScript calculation functions, input validation, dynamic result display with HTML generation.

---

#### 6. 💾 Data Management

**CSV Export:**
- Button: "📊 Export CSV"
- Downloads file: `fittrack-workouts-YYYY-MM-DD.csv`
- Columns: Date, Exercise, Sets, Reps, Weight (kg), Volume
- Opens in Excel/Google Sheets
- Keyboard shortcut: `Ctrl+E`

**JSON Backup:**
- Button: "💾 Backup"
- Downloads file: `fittrack-backup-YYYY-MM-DD.json`
- Contains: Version, Export Date, Workouts Count, All Workouts
- Full data backup with metadata

**JSON Import:**
- Button: "📥 Import"
- File picker for `.json` files
- Confirmation dialog (warns: replaces all current data)
- Validates backup structure before import
- Shows success/error notifications

**Data Integrity:**
- Automatic detection of corrupted localStorage data
- Auto-recovery: Filters invalid workouts, saves cleaned data
- Version tracking for future migrations
- Storage size monitoring (logs usage in console)

**Implementation:** Blob API for file generation, FileReader API for import, JSON validation, error recovery with try-catch blocks.

---

#### 7. 🎨 Theme System

**Light/Dark Theme Toggle:**
- Toggle button: 🌙 (dark) / ☀️ (light)
- Smooth CSS transitions between themes
- Persistence via localStorage
- Applied across all 4 pages

**Dark Theme Colors:**
- Background: `#0f172a` (dark blue-gray)
- Cards: `#1e293b` (lighter blue-gray)
- Text: `#f1f5f9` (off-white)
- Proper contrast ratios (WCAG AA compliant)

**Implementation:** CSS variables, JavaScript class toggling on `<html>` element, localStorage persistence.

---

#### 8. ⌨️ Keyboard Shortcuts

**Quick Actions:**
- `Ctrl/Cmd + K` - Open Add Workout modal
- `Ctrl/Cmd + E` - Export CSV
- `Ctrl/Cmd + /` - Show shortcuts help modal
- `ESC` - Close any open modal
- `Enter` - Submit forms in modals

**Shortcuts Help Modal:**
- Displays all available shortcuts
- Accessible via keyboard or menu
- Clean, centered design

**Implementation:** Global keydown event listener, key combination detection, cross-platform support (Ctrl on Windows/Linux, Cmd on Mac).

---

#### 9. 📱 Responsive Design & Mobile Navigation

**Mobile-First Approach:**
- Designed for 375px (iPhone SE) first, scales up
- Touch-friendly: 48px+ minimum touch targets
- No horizontal scroll (overflow-x: hidden)

**Hamburger Menu (Mobile):**
- Shows on screens <768px
- 3-line icon with smooth animation (transforms to X when open)
- Slide-in menu from right (250px width)
- Closes on: link click, outside click, window resize to desktop
- Prevents body scroll when open
- z-index layering: Menu (1001) above everything

**Responsive Breakpoints:**
- Mobile: <768px (1-column layout, hamburger menu)
- Tablet: 768-1023px (2-column stats, 1-column charts)
- Desktop: 1024px+ (4-column stats, 2-column charts)

**Implementation:** CSS media queries, hamburger.js module, event listeners for menu toggle and clicks.

---

#### 10. 🔔 Toast Notification System

**4 Notification Types:**
- **Success:** Green (✅) - "Workout added successfully"
- **Error:** Red (❌) - "Failed to save workout"
- **Warning:** Orange (⚠️) - "Storage quota nearly full"
- **Info:** Blue (ℹ️) - General information

**Features:**
- Auto-dismiss after 3 seconds
- Manual dismiss via X button
- Slide-in animation from top-right
- Stacking support (multiple notifications)
- Mobile: Full-width notifications

**Implementation:** Notifications.js module, dynamic DOM creation, CSS animations, setTimeout for auto-dismiss.

---

#### 11. ♿ Accessibility Features

**Keyboard Navigation:**
- Full keyboard support (Tab, Enter, Esc)
- Logical tab order through interactive elements
- Visible focus states (blue outline)
- No keyboard traps

**Screen Reader Support:**
- ARIA labels on icon buttons (`aria-label="Toggle theme"`)
- ARIA attributes on modals (`role="dialog"`)
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<header>`)
- Proper heading hierarchy (H1 → H2 → H3)

**Visual Accessibility:**
- Color contrast ratios: 4.5:1+ (WCAG AA)
- Not relying on color alone (icons + text)
- 16px minimum font size (prevents iOS zoom)
- Clear error messages with shake animation

**Implementation:** ARIA attributes, semantic HTML, CSS focus styles, contrast validation.

---

#### 12. 🛡️ Error Handling & Data Safety

**Form Validation:**
- Real-time validation with specific error messages
- Visual feedback (red borders, shake animation)
- Prevents submission until valid

**localStorage Error Handling:**
- Detects quota exceeded (5MB limit)
- Shows specific error: "Storage quota exceeded"
- Detects corrupted JSON data
- Auto-recovery: Attempts to parse, filters invalid entries

**Data Corruption Recovery:**
- Validates workout structure on load
- Filters workouts missing required fields
- Logs warnings for removed invalid data
- Maintains data integrity across sessions

**Browser Compatibility Check:**
- Detects required features (localStorage, JSON, Promise)
- Logs missing features to console
- Graceful degradation

**Implementation:** Try-catch blocks, Validation.js module, error detection in Storage.js, console logging for debugging.

---

### Features Left to Implement

**Post-MVP Enhancements (Future Versions):**

1. **Personal Records Tracking:**
   - Automatic PR detection per exercise
   - Visual badges on record-breaking workouts
   - PR history timeline

2. **Workout Templates:**
   - Save common workout routines
   - Quick-add entire workout sessions
   - Template library (e.g., "Chest Day", "Leg Day")

3. **Calendar View:**
   - Visual calendar with workout indicators
   - Click dates to see workouts
   - Streak visualization with heatmap

4. **Advanced Analytics:**
   - Total volume per muscle group
   - Training frequency analytics
   - Progress rate calculations
   - Body measurements tracking

5. **Progressive Overload Suggestions:**
   - Algorithm to suggest weight increases
   - Deload week recommendations
   - Plateau detection

6. **PWA Conversion:**
   - Install as standalone app
   - Offline mode improvements
   - Push notifications for workout reminders

7. **Social Features (Optional):**
   - Cloud sync (Google Drive/Dropbox)
   - Share workouts with friends
   - Community challenges
---

## 🛠️ Technologies Used

### Languages

**HTML5:**
- Semantic markup for accessibility (`<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`)
- Forms with built-in validation attributes (`required`, `min`, `max`, `step`, `pattern`)
- Custom data attributes for JavaScript hooks (`data-action`, `data-id`)
- ARIA attributes for screen readers (`aria-label`, `role="dialog"`)

**CSS3:**
- **Layout:** CSS Grid and Flexbox for responsive layouts
- **Theming:** CSS Variables (custom properties) for dark/light theme system
- **Responsive:** Media queries for mobile (375px), tablet (768px), desktop (1024px+)
- **Animations:** Transitions, transforms, and @keyframes for smooth UX
- **Vendor Prefixes:** `-webkit-` prefixes for cross-browser compatibility
- **Modern Features:** `backdrop-filter`, `overflow-x: hidden`, `position: sticky`

**JavaScript (ES6+):**
- **Modern Syntax:** Arrow functions, template literals, destructuring, spread operator
- **Array Methods:** `map()`, `filter()`, `reduce()`, `sort()`, `find()`, `some()`, `every()`
- **DOM Manipulation:** `querySelector()`, `createElement()`, `addEventListener()`
- **Event Delegation:** Efficient event handling for dynamic elements
- **Modular Code:** Separate modules for each feature (11 JS files)
- **Error Handling:** Try-catch blocks, input validation, data integrity checks
- **Performance:** Throttle/debounce functions, memoization, efficient rendering

---

### Libraries & APIs

**Chart.js v4.4.1:**
- **Purpose:** Interactive, responsive data visualization
- **Usage:** 4 chart types (Line, Bar, Doughnut)
- **Source:** CDN - `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`
- **License:** MIT License
- **Why Chosen:** 
  - Lightweight (~180KB minified)
  - Responsive out-of-the-box
  - Extensive documentation
  - No dependencies
  - Active maintenance
- **Configuration:** Custom tooltips, colors, responsive options, mobile optimizations

**Browser APIs Used:**

**localStorage API:**
- **Purpose:** Client-side data persistence
- **Usage:** Store workouts, theme preference, app version
- **Methods:** `getItem()`, `setItem()`, `removeItem()`, `clear()`
- **Capacity:** ~5MB per domain
- **Error Handling:** Quota exceeded detection, corruption recovery

**Blob API:**
- **Purpose:** File generation for CSV export and JSON backup
- **Usage:** Create downloadable files client-side
- **Methods:** `new Blob()`, `URL.createObjectURL()`

**FileReader API:**
- **Purpose:** Import JSON backup files
- **Usage:** Read user-selected files for data restoration
- **Methods:** `readAsText()`, event listeners (`onload`, `onerror`)

**Performance API:**
- **Purpose:** Measure rendering performance
- **Usage:** Track dashboard render time, chart generation time
- **Methods:** `performance.now()`, time calculations for optimization

**No other external libraries used** - All functionality implemented in vanilla JavaScript to demonstrate core competency and avoid dependency bloat.

---

### Project Structure

**Modular JavaScript Architecture (11 Files):**

```
assets/js/
├── main.js           # App initialization, theme toggle, page detection
├── storage.js        # localStorage CRUD operations, error recovery
├── utils.js          # Helper functions (date formatting, validation, sorting)
├── validation.js     # Form validation rules, error display
├── notifications.js  # Toast notification system
├── workout.js        # Workout CRUD operations, CSV export, backup/import
├── dashboard.js      # Dashboard stats, recent workouts display
├── history.js        # Workout history, search, filters
├── charts.js         # Chart.js integration, 4 chart types
├── calculators.js    # BMI and 1RM calculators
└── hamburger.js      # Mobile hamburger menu toggle
```

**CSS Architecture (6 Files):**

```
assets/css/
├── style.css         # Main stylesheet, imports all others
├── variables.css     # CSS custom properties (colors, spacing, fonts)
├── reset.css         # CSS reset for browser consistency
├── layout.css        # Layout utilities (container, grids, sections)
├── components.css    # Reusable components (buttons, cards, forms)
├── hamburger.css     # Mobile hamburger menu styles
└── pages/
    └── charts.css    # Charts page specific styles
```

---

### Development Tools

**Code Editor:**
- **VS Code v1.85+**
  - Extensions: Live Server, Prettier, ESLint
  - Settings: Auto-save, format on save
  - Integrated terminal for Git commands

**Local Development:**
- **Live Server Extension**
  - Hot reload on file changes
  - Runs on `http://127.0.0.1:5500`
  - CORS-friendly for local development

**Version Control:**
- **Git v2.40+**
  - 55+ commits with descriptive messages
  - Feature branch workflow
  - Commit message format: `Type: Description`
- **GitHub**
  - Repository: https://github.com/DonMarcao/fittrack
  - Version history and collaboration
  - GitHub Pages deployment

---

### Design Tools

**Wireframing:**
- **Balsamiq/Wireframe.cc**
  - Low-fidelity wireframes
  - Mobile and desktop layouts
  - User flow planning

**Typography:**
- **Google Fonts**
  - Font: Inter (400, 500, 600, 700, 800 weights)
  - Fallback: System fonts for performance

**Color Palette:**
- **Coolors.co**
  - Palette generation and testing
  - Accessibility contrast checker
  - Export to CSS variables

**Icons:**
- **Emoji** (Unicode)
  - Native emoji for icons (💪, 📊, 🗑️, ✏️, etc.)
  - No external icon library needed
  - Universally supported

---

### Testing & Validation Tools

**Code Validation:**
- **W3C HTML Validator** - https://validator.w3.org/
  - All 4 HTML pages: 0 errors
- **W3C CSS Validator** - https://jigsaw.w3.org/css-validator/
  - All CSS files: 0 errors (vendor prefix warnings acceptable)
- **JSLint** - https://jslint.com/
  - JavaScript code quality checks

**Performance & Accessibility:**
- **Chrome Lighthouse**
  - Performance: 95/100
  - Accessibility: 92/100
  - Best Practices: 100/100
  - SEO: 100/100

**Browser Testing:**
- **Chrome DevTools**
  - Device emulation (iPhone SE, iPad, Desktop)
  - Network throttling
  - Console debugging
  - Performance profiling
- **Firefox Developer Tools**
  - Cross-browser compatibility testing
  - Accessibility inspector
- **Responsive Design Mode**
  - Test breakpoints (375px, 768px, 1024px, 1920px)

**Cross-Browser Testing:**
- Chrome 121+ ✅
- Firefox 122+ ✅
- Edge 121+ ✅
- Safari 17+ (not fully tested, expected to work)

---

### Deployment

**Hosting:**
- **GitHub Pages**
  - Static site hosting
  - Automatic deployment from `main` branch
  - HTTPS enabled
  - Custom domain support (if needed)
  - Live URL: https://donmarcao.github.io/fittrack/

**Deployment Process:**
```bash
# 1. Commit changes
git add .
git commit -m "Type: Description"

# 2. Push to GitHub
git push origin main

# 3. Auto-deployment via GitHub Pages
# Wait 1-2 minutes, visit live URL
```

---

### Dependencies Summary

**Runtime Dependencies:**
- Chart.js 4.4.1 (CDN)

**Development Dependencies:**
- None (vanilla JavaScript, no build process)

**Browser Requirements:**
- Modern browser with ES6+ support
- localStorage enabled
- JavaScript enabled
- Minimum 375px screen width

**Why Minimal Dependencies:**
- **Fast Performance:** No framework overhead
- **Easy Deployment:** No build step required
- **Educational Value:** Demonstrates core JavaScript skills
- **Maintainability:** Less complexity, easier to understand
- **Reliability:** Fewer breaking changes from external updates

---

## 📦 Installation & Usage

```bash
# Clone repository
git clone https://github.com/DonMarcao/fittrack.git

# Open index.html in browser
# OR use Live Server in VS Code
```

No build process required!

---

## 🧪 Testing

- **150+ tests** conducted manually
- **96.7% pass rate**
- Cross-browser tested (Chrome, Firefox, Edge)
- Mobile responsive (iPhone SE, iPad)
---

## 🚀 Deployment

**Live:** https://donmarcao.github.io/fittrack/

Deployed via GitHub Pages with automatic deployment on push to main.

---

## ⚠️ Known Issues

1. Minor horizontal scroll on mobile (375px) - cosmetic only
2. Chart labels may overlap on very small screens (<320px)

---

## 🚀 Future Enhancements

- Exercise database
- Workout templates
- PR tracking
- Progressive overload detection
- PWA conversion

---

## 🙏 Credits

**Developer:** Marcus Machado  
**Technologies:** Chart.js, Google Fonts (Inter)  
**Inspiration:** Strong App, FitNotes  

---

## 📄 License

MIT License - See full license in complete README

---

**Version:** 1.0.4 
**Last Updated:** January 2026  

⭐ **Star this project on GitHub!** ⭐