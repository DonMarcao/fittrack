# 💪 FITTRACK - Personal Fitness Progress Tracker

![FitTrack](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

**Live Site:** https://donmarcao.github.io/fittrack/  
**Repository:** https://github.com/DonMarcao/fittrack  
**Developer:** Marcus Machado  
**Project Type:** Level 5 Full Stack Web Development - Milestone 2  
**Submission Date:** January 2026
---
![Project Banner](assets/media/images/screenshots/features/dashboard-with-data.png)
![Project Banner](assets/media/images/screenshots/features/history-page-full.png)
![Project Banner](assets/media/images/screenshots/features/charts-page-full.png)
![Project Banner](assets/media/images/screenshots/features/onerm-calculator-result.png)
---

## 📋 Table of Contents

1. Project Overview
   - [Overview](#overview)
2. User Experience Design (UX)
   - [User Stories](#user-stories)
   - [Design Process](#design-process)
   - [Wireframes](#wireframes)
   - [Color Scheme](#color-scheme)
   - [Typography](#typography)
3. Features
   - [Existing Features](#existing-features)
   - [404 Page](#404-page)
   - [Features Left to Implement](#features-left-to-implement)
4. Technologies Used
   - [Languages](#languages)
   - [Libraries](#libraries)
   - [Tools & Programs](#tools--programs)
5. Deployment
   - [GitHub Pages Deployment](#github-pages-deployment)
   - [Local Development](#local-development)
6. Development Process
   - [Version Control](#version-control-strategy)
   - [Commit History](#commit-history)
7. Credits
   - [Content](#content)
   - [Acknowledgments](#acknowledgments)

---

## 🎯 Project Overview

### Overview

**FitTrack** is an interactive web application designed to help fitness enthusiasts track their workout progress, visualize improvements over time, and make data-driven training decisions. The application provides:

- **Workout Logging:** Add, edit, and delete workout sessions
- **Progress Visualization:** 4 interactive Chart.js charts
- **Fitness Calculators:** BMI and One-Rep Max (1RM) calculators
- **Data Management:** CSV export, JSON backup/import
- **Dark/Light Theme:** Persistent user preference
- **Mobile Navigation:** Responsive hamburger menu
- **Keyboard Shortcuts:** Ctrl+K, Ctrl+E, Ctrl+/

### Project Purpose

This website was developed as part of the Level 5 Diploma in Full Stack Web Development portfolio, demonstrating proficiency in:

✅ **Interactive Frontend Development** (JavaScript ES6+)  
✅ **Dynamic User Interfaces** (Form handling, CRUD operations)  
✅ **Data Visualization** (Chart.js integration)  
✅ **Client-Side Storage** (localStorage API with error recovery)  
✅ **Responsive Design** (Mobile-first approach with hamburger menu)  
✅ **Accessibility Standards** (ARIA labels, keyboard navigation, WCAG AA)  
✅ **Code Validation** (W3C validated, 0 errors)  
✅ **Version Control** (Git & GitHub frequent commits)  
✅ **Testing & Quality Assurance** (Manual testing, bug tracking)

### Target Audience

1. **Fitness Enthusiasts:** Individuals training 4-5 times per week who want to track progress systematically
2. **Beginners:** People starting their fitness journey who need simple, effective tracking
3. **Data-Driven Athletes:** Users who prefer quantitative progress measurement over subjective feelings
4. **Privacy-Conscious Users:** Individuals who want local data storage without cloud accounts

### Value Proposition

Unlike complex fitness apps with subscriptions and accounts, **FitTrack** focuses on simplicity and privacy:

- **No Account Required:** All data stored locally on your device
- **Fast & Lightweight:** Instant load times, no server requests
- **Mobile-First:** Optimized for gym use on smartphones
- **Data Ownership:** Export your data anytime, no vendor lock-in

---

## 👥 User Experience Design (UX)

### User Stories

User stories define the core functionality from the perspective of different user types. All user stories follow the format: **"As a [user type], I want [goal], so that [benefit]."**

#### 💪 New User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status |
|----|------------|---------------------|----------------|--------|
| **US-01** | As a new user, I want to understand the app's purpose immediately, so that I know if it's useful for me | Clear hero section with "Track Your Fitness Progress" messaging | Dashboard with hero text and quick stats | ✅ |
| **US-02** | As a new user, I want to add my first workout easily, so that I can start tracking immediately | "Add Workout" button prominently displayed, simple form | Primary CTA button, clear form with labels | ✅ |
| **US-03** | As a new user, I want to see example data or guidance, so that I understand how to use the app | Empty state shows helpful message: "Add your first workout!" | Empty state component with call-to-action | ✅ |
| **US-04** | As a new user, I want the interface to be intuitive, so that I don't need instructions | Clear labels, standard UI patterns, visual hierarchy | Semantic HTML, consistent styling, logical flow | ✅ |
| **US-05** | As a new user, I want to know my data is private, so that I feel secure using the app | Clear message: "Your data stays on your device" | Footer text, no external API calls | ✅ |

#### 🏋️ Returning User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status |
|----|------------|---------------------|----------------|--------|
| **US-06** | As a returning user, I want to see my workout history, so that I can track what I've done | Workout list displays date, exercise, sets, reps, weight | History page with sortable table/list | ✅ |
| **US-07** | As a returning user, I want to add today's workout quickly, so that logging doesn't disrupt training | Form pre-fills with today's date | Date input defaults to current date | ✅ |
| **US-08** | As a returning user, I want to edit past workouts, so that I can correct mistakes | Edit button on each workout, opens form with data | Edit modal/page with pre-filled form | ✅ |
| **US-09** | As a returning user, I want to delete workouts, so that I can remove errors | Delete button with confirmation dialog | Confirmation modal before deletion | ✅ |
| **US-10** | As a returning user, I want to search/filter workouts, so that I can find specific sessions | Search by exercise name, filter by date range | Search input and date filter dropdowns | ✅ |

#### 📊 Advanced User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status |
|----|------------|---------------------|----------------|--------|
| **US-11** | As an advanced user, I want to see my progress over time, so that I can track improvements | Interactive charts showing weight progression | Chart.js line graphs with date on X-axis | ✅ |
| **US-12** | As an advanced user, I want to export my data, so that I can analyze it elsewhere | "Export to CSV" button downloads all workouts | CSV generation and download trigger | ✅ |


#### 🧮 Calculator User Stories

| ID | User Story | Acceptance Criteria | Implementation | Status |
|----|------------|---------------------|----------------|--------|
| **US-13** | As any user, I want to calculate my BMI, so that I can track body composition goals | BMI calculator with weight/height inputs, result with category | BMI page with form and result display | ✅ |
| **US-14** | As any user, I want to calculate 1RM, so that I can plan progressive overload | 1RM calculator with weight/reps inputs, estimated max result | 1RM page with Epley formula implementation | ✅ |
| **US-15** | As any user, I want calculator results explained, so that I understand the numbers | Tooltips/help text explaining BMI ranges, 1RM usage | Help text sections below calculators | ✅ |

#### 📱 Mobile & Accessibility Stories

| ID | User Story | Acceptance Criteria | Implementation | Status |
|----|------------|---------------------|----------------|--------|
| **US-16** | As any user, I want the app to work on my phone, so that I can log at the gym | Fully responsive design, touch-friendly buttons (44px+) | Mobile-first CSS with media queries | ✅ |
| **US-17** | As any user, I want fast performance, so that I don't wait | Instant feedback on actions, no loading delays | Optimized JavaScript, localStorage caching | ✅ |
| **US-18** | As any user, I want clear feedback on actions, so that I know what happened | Success/error messages for all actions | Toast notification system | ✅ |
| **US-19** | As any user, I want keyboard navigation, so that I can use without mouse | Tab order logical, Enter submits forms, Esc closes modals | Focus management and keyboard event handlers | ✅ |
| **US-20** | As a user with visual impairments, I want screen reader support, so that I can use the app | Alt text, labels, ARIA attributes | WCAG AA compliance throughout | ✅ |
| **US-21** | As any user, I want a professional design, so that the app feels trustworthy | Consistent styling, clear hierarchy, polished UI | Design system with CSS variables | ✅ |
| **US-22** | As any user, I want to choose light/dark theme, so that I match my preference | Theme toggle button, preference saved | Theme switcher with localStorage persistence | ✅ |


### Design Process

#### 1. Research Phase
- Analyzed existing fitness tracking apps (MyFitnessPal, Strong, FitNotes)
- Identified common pain points: complexity, paywalls, privacy concerns
- Decided on client-side-only approach for privacy and speed

#### 2. Planning Phase
- Created user personas based on target audience
- Defined MVP features vs. nice-to-have enhancements
- Sketched wireframes for mobile and desktop views
- Established color scheme aligned with fitness/health themes

#### 3. Design Decisions
- **Mobile-First:** Primary use case is gym floor logging
- **Green Color Scheme:** Represents growth, health, progress
- **Card-Based Layout:** Clear visual separation of content
- **Minimal Navigation:** Fast access to core features
- **No Authentication:** Reduce friction, increase privacy

---

### Wireframes

Wireframes were created using multiple existing apps as source of design ideias then selected and combine on Lucidcharts on Lucid.app to plan layout and user flow development.

#### Key Wireframes Created:

**Mobile Experience:**
- ![Mobile Dashboard](/docs/wireframes/mobile-wireframes.png) - Stats cards, recent workouts, CTA
- ![Hamburger Navigation](/docs/wireframes/mobile-wireframes.png) - Mobile menu system

**Desktop Experience:**
- ![Desktop Dashboard](/docs/wireframes/dashboard-wireframe.png) - Multi-column grid layout

**Feature Pages:**
- ![Charts Page](/docs/wireframes/charts-wireframe.png) - Data visualization layout
- ![Add Workout Modal](/docs/wireframes/modal-wireframe.png) - Form design

**Design Decisions from Wireframes:**
- Mobile-first approach with hamburger navigation
- Card-based layout for better content organization
- Prominent "Add Workout" CTA on dashboard
- Grid system for stats display (1 column mobile, 4 columns desktop)
- Modal forms for focused user actions

### Color Scheme

The color palette was chosen to evoke health, growth, and motivation while maintaining professional aesthetics and accessibility.

#### Light Theme (Default)
```css
--primary-green: #28a745;      /* Main brand color - buttons, accents */
--primary-dark: #1e7e34;       /* Hover states, emphasis */
--primary-light: #d4edda;      /* Backgrounds, subtle accents */

--background-main: #ffffff;     /* Page background */
--background-card: #f8f9fa;     /* Card backgrounds */
--text-primary: #212529;        /* Main text */
--text-secondary: #6c757d;      /* Secondary text */
```

#### Dark Theme
```css
--primary-green: #28a745;       /* Same green (good contrast) */
--background-main: #1a1a1a;     /* Page background */
--background-card: #2d2d2d;     /* Card backgrounds */
--text-primary: #f8f9fa;        /* Main text (light) */
--text-secondary: #adb5bd;      /* Secondary text */
```

**Color Psychology:**
- **Green (#28a745):** Health, growth, progress, achievement
- **Dark Backgrounds:** Focus, professionalism, reduced eye strain
- **White/Light Gray Text:** High readability, clean aesthetics

**Accessibility:**
- All text meets WCAG AA contrast standards (4.5:1 minimum)
- Primary green on white: 4.6:1 contrast ratio
- Light text on dark background: 15:1 contrast ratio

---

### Typography

**Primary Font:** [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

**Why Inter?**
- Modern, clean, professional aesthetic
- Excellent number legibility (important for workout data)
- Great readability at all sizes
- Free and open-source

**Font Weights Used:**
- Regular (400): Body text
- Medium (500): Labels, emphasis
- Semi-Bold (600): Card titles, buttons
- Bold (700): Page headings
- Extra-Bold (800): Statistics numbers

**Font Sizes:**
- Body text: 16px (base size, prevents iOS zoom)
- Small text: 14px (labels, helper text)
- H1 (Page titles): 32px mobile, 40px desktop
- H2 (Section titles): 28px mobile, 32px desktop
- Stats numbers: 36px mobile, 48px desktop

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

---

## ⚙️ Features

### Existing Features

#### 1. 🏠 Dashboard
- Quick stats cards (Total, This Week, Last Workout, Streak)
- Recent 5 workouts preview
- Quick actions (Add, Export, Backup, Import, Clear All)

#### 2. ✍️ Workout Management (CRUD)
- **Add:** Modal form, Ctrl+K shortcut
- **Edit:** Pre-filled modal, instant updates
- **Delete:** Confirmation dialog
- **Validation:** Exercise (2-50 chars), Sets (1-20), Reps (1-100), Weight (0.5kg increments)

#### 3. 📜 History
- Complete workout list
- Search by exercise
- Date filters (7d/30d/1y/all)
- Stats summary

#### 4. 📊 Charts (Chart.js 4.4.1)
- Volume Over Time (line, green)
- Weight Progress (line, blue)
- Sets & Reps Distribution (bar, orange/purple)
- Exercise Breakdown (doughnut)
- Mobile-optimized rendering

#### 5. 🧮 Calculators
- **BMI:** Color-coded results
- **1RM:** Epley formula + percentage table

#### 6. 💾 Data Management
- CSV Export (Ctrl+E)
- JSON Backup/Import
- Data corruption recovery

#### 7. 🎨 Theme System
- Light/dark toggle
- localStorage persistence

#### 8. ⌨️ Keyboard Shortcuts
- Ctrl+K: Add Workout
- Ctrl+E: Export CSV
- Ctrl+/: Shortcuts help
- ESC: Close modals

#### 9. 📱 Responsive Design
- Mobile: <768px (hamburger menu)
- Tablet: 768-1023px (2-column)
- Desktop: 1024px+ (4-column)

#### 10. 🔔 Toast Notifications
- Success, Error, Warning, Info types
- Auto-dismiss (3s)

#### 11. ♿ Accessibility
- ARIA labels
- Keyboard navigation
- WCAG AA contrast ratios
- Semantic HTML5

#### 12. 🛡️ Error Handling
- Form validation with shake animation
- localStorage quota detection
- Data corruption auto-recovery


### 404 page

## Error Handling

Overview
The 404.html page is a custom error page that handles invalid URLs and routes users back to the FitTrack application. It provides a user-friendly experience when visitors attempt to access non-existent pages.

- Automatically redirects users to the dashboard after 10 seconds
- Provides manual navigation options
- Includes quick links to all main pages
- Supports light/dark theme preferences
- Works seamlessly with GitHub Pages

**Test it:** [Invalid URL Example](https://donmarcao.github.io/fittrack/test-404)

### Features Left to Implement

- Personal Records tracking
- Workout templates
- Calendar view
- Advanced analytics
- Progressive overload AI
- PWA conversion
- Social features (optional)

---

## 🛠️ Technologies Used

### Languages

- **HTML5** - Semantic markup, ARIA attributes
- **CSS3** - Grid, Flexbox, Variables, Animations
- **JavaScript ES6+** - Modules, arrow functions, async
---

### Libraries

- **Chart.js 4.4.1** (CDN) - 4 interactive charts
- **localStorage API** - Client-side persistence
- **Blob API** - File generation (CSV/JSON)
- **FileReader API** - Import functionality
- **Performance API** - Render metrics

---

### Tools & Programs

**Development:**
- **VSCode:** Primary code editor
- **Live Server:** Local development server
- **Chrome DevTools:** Debugging and testing
- **Git:** Version control
- **GitHub:** Repository hosting and collaboration

**Design:**
- **LucidChart/Lucid.App:** Wireframe creation
- **Google Fonts:** Inter font family
- **Coolors.co:** Color palette generation and testing

**Testing:**
- **W3C HTML Validator:** HTML validation
- **W3C CSS Validator:** CSS validation
- **JSHint:** JavaScript code quality
- **Chrome Lighthouse:** Performance and accessibility audit


**Deployment:**
- **GitHub Pages:** Static site hosting
- **Git:** Version control and deployment workflow
- **Live URL:** https://donmarcao.github.io/fittrack/

---

## 🧪 Testing

### Manual Testing

**Comprehensive testing documentation available in [testing.md](testing.md)**

**Quick Stats:**
- **Total Tests:** 72
- **Pass Rate:** 98.6%
- **Critical Bugs:** 0
- **Code Validation:** HTML/CSS/JS - 0 errors

### Test Coverage

- ✅ Dashboard & CRUD Operations (9 tests)
- ✅ History Page (8 tests)
- ✅ Charts Page (10 tests)
- ✅ Calculators (7 tests)
- ✅ Data Persistence (8 tests)
- ✅ Theme & UI (6 tests)
- ✅ Keyboard Shortcuts (7 tests)
- ✅ Mobile Responsive (9 tests)
- ✅ Form Validation (8 tests)

### Validation Results

| Tool | Result |
|------|--------|
| W3C HTML | 0 errors (4 pages) |
| W3C CSS | 0 errors (12 files) |
| JSLint | 0 major issues (11 files) |

### Lighthouse Scores

**Desktop:** 100/95/96/100 (Performance/Accessibility/Best Practices/SEO)  
**Mobile:** 100/95/96/100 (Performance/Accessibility/Best Practices/SEO)

### Cross-Browser Testing

- ✅ Chrome 143+
- ✅ Firefox 122+
- ✅ Edge 121+
- ✅ Opera GX
- ✅ Android (Chrome/Opera)

### Testing Methodology

**Approach:** Manual testing + automated validation tools

**Why Manual Testing:**
- Frontend-only application
- Visual components require human verification
- Responsive design across real devices
- Fast MVP development cycle

**Why Automated Validation:**
- Consistent code quality (W3C, JSLint)
- Performance monitoring (Lighthouse)
- Quick regression detection

[**📸 View Complete Testing Documentation with Screenshots →**](TESTING.md)

---

## 🚀 Deployment

### GitHub Pages Deployment

**Live Site:** https://donmarcao.github.io/fittrack/

Fittrack is deployed using GitHub Pages, providing free, reliable hosting with automatic SSL and global CDN distribution.

#### Pre-Deployment Validation

Before each deployment, the following quality checks are performed:

**Code Validation:**
- HTML validation via W3C Validator - **0 errors** across all 5 pages
- CSS validation via W3C CSS Validator - **0 errors** across all 12 stylesheets  
- JavaScript quality check via JSLint - **No major issues** across all 11 modules

**Testing Verification:**
- Manual testing: 72 test cases with 98.6% pass rate
- Cross-browser testing: Chrome, Firefox, Edge, Safari
- Mobile responsiveness: iOS and Android devices
- Lighthouse audit: 95+ scores across all metrics
- Accessibility: WCAG AA compliance verified

**Documentation Review:**
- README.md updated with latest features
- TESTING.md includes new test scenarios
- Code comments added for complex logic

---

#### Initial Setup (One-Time Configuration)

```bash
# 1. Create repository on GitHub (github.com)
# Repository name: fittrack
# Visibility: Public

# 2. Initialize local repository and push
git init
git add .
git commit -m "Initial commit: Project structure and core features"
git branch -M main
git remote add origin https://github.com/DonMarcao/fittrack.git
git push -u origin main

# 3. Enable GitHub Pages
# Navigate to: Repository Settings → Pages
# Source: Deploy from branch "main"
# Folder: / (root)
# Click "Save"
#    
# GitHub Pages URL format: https://[username].github.io/[repository]/
# Live site: https://donmarcao.github.io/fittrack/
```

---

#### Standard Deployment Workflow

```bash
# 1. Pull latest changes (ensure you're up to date)
git pull origin main

# 2. Make changes and test locally
# - Open index.html in browser
# - Test all functionality
# - Verify responsive design
# - Check console for errors

# 3. Validate code (pre-commit)
# - Run HTML through W3C Validator
# - Run CSS through CSS Validator
# - Check JavaScript with JSLint

#4. Stage and commit changes
git add .
git commit -m "Type: Clear description"

# Commit message examples:
# "Feat: Add BMI calculator with color-coded results"
# "Fix: Chart rendering issue on mobile devices"
# "Style: Improve button hover effects in dark mode"
# "A11y: Add ARIA labels to workout forms"
# "Docs: Update README with deployment instructions"

#5. Push to GitHub
git push origin main

#6. Monitor deployment
# GitHub Actions: https://github.com/DonMarcao/fittrack/actions
# Wait for "pages-build-deployment" workflow
# Look for green checkmark ✅ (typically 2-5 minutes)

# 7. Verify deployment
# Visit: https://donmarcao.github.io/fittrack/
# Test core functionality:
# - Add/Edit/Delete workout
# - Charts render correctly
# - Theme toggle works
# - Mobile navigation functional
```

**Deployment Timeline:**
- Code push to GitHub: < 1 second
- GitHub Actions build: 30-60 seconds
- Pages deployment: 1-3 minutes
- **Total deployment time: 2-5 minutes**

---

#### Post-Deployment Verification

After each deployment, the following checks are performed:

**Functionality Tests:**
```bash
# 1. Check all pages load
✓ https://donmarcao.github.io/fittrack/              # Dashboard
✓ https://donmarcao.github.io/fittrack/history.html  # History
✓ https://donmarcao.github.io/fittrack/charts.html   # Charts
✓ https://donmarcao.github.io/fittrack/calculators.html # Calculators
✓ https://donmarcao.github.io/fittrack/404.html      # Error page

# 2. Test custom 404 page
https://donmarcao.github.io/fittrack/test-404
Expected: Custom error page with 10-second auto-redirect

# 3. Check browser console
Open DevTools → Console
Expected: No errors (console.logs are informational only)

#4. Verify assets load
Open DevTools → Network tab
Expected: All CSS/JS files return 200 status
```

**Core Feature Tests:**
- [] Add workout: Form validation and localStorage save
- [] Edit workout: Data persistence and UI update
- [] Delete workout: Confirmation and data removal
- [] Charts: All 4 charts render with correct data
- [] Calculators: BMI and 1RM calculations accurate
- [] Theme toggle: Preference saved in localStorage
- [] Export CSV: File downloads with correct data
- [] Mobile menu: Hamburger navigation works

---

#### Rollback Strategy

If a deployment introduces critical bugs:

```bash
# Option 1: Revert last commit
git revert HEAD
git push origin main
# Triggers automatic redeployment of previous version

# Option 2: Reset to specific commit
git log --oneline              # Find stable commit hash
git reset --hard 
git push --force origin main   # Use with caution!

# Option 3: Quick fix and redeploy
# Fix the bug locally
git add .
git commit -m "Hotfix: Critical bug description"
git push origin main
# New deployment overwrites broken version
```

---

### Local Development

#### Quick Start Options

```bash
# Clone repository
git clone https://github.com/DonMarcao/fittrack.git
cd fittrack

# Option 1: Direct browser open (simplest)
open index.html        # macOS
start index.html       #Windows
xdg-open index.html    #Linux

# Option 2: VSCode Live Server (recommended for development)
# 1. Install "Live Server" extension in VSCode
# 2. Right-click index.html → "Open with Live Server"
# 3. Auto-reload on file changes
# URL: http://127.0.0.1:5500/

# Option 3: Python HTTP server
python3 -m http.server 8000
# URL: http://localhost:8000

# Option 4: Node.js http-server (if npm installed)
npx http-server -p 8000
# URL: http://localhost:8000
```

**No Build Process Required:**
- No webpack, npm, or bundlers needed
- No dependencies to install
- Pure vanilla HTML/CSS/JavaScript
- Works immediately after cloning

---

#### File Structure

```
fittrack/
├── index.html # Dashboard - Main entry point
├── history.html # Workout history page
├── charts.html # Progress visualization with Chart.js
├── calculators.html # BMI & 1RM calculators
├── 404.html # Custom error page with auto-redirect
├── README.md # Project documentation
├── TESTING.md # Testing documentation and results
├── assets/
│ ├── css/ # 12 modular CSS files
│ │ ├── style.css # Main stylesheet (imports all modules)
│ │ ├── variables.css # CSS custom properties (colors, spacing)
│ │ ├── reset.css # Browser normalization
│ │ ├── layout.css # Grid and Flexbox layouts
│ │ ├── components.css # Buttons, cards, forms
│ │ └──...            # Page-specific and feature-specific styles
│ ├── js/ # 11 JavaScript modules
│ │ ├── main.js # App initialization and global utilities
│ │ ├── storage.js # localStorage wrapper with error handling
│ │ ├── workout.js # Workout CRUD operations
│ │ ├── validation.js # Form validation logic
│ │ ├── dashboard.js # Dashboard page functionality
│ │ ├── history.js # History page functionality
│ │ ├── charts.js # Chart.js integration
│ │ └──...            # Other feature modules
│ └── media/ # Images and static assets
│ └── images/
│ ├── screenshots/ # Testing documentation images
│ └── wireframes/ # Design mockups
└── docs/ # Additional documentation
```
---

## 📝 Development Process

### Version Control Strategy

**Repository:** https://github.com/DonMarcao/fittrack  
**Primary Branch:** `main` (linear history, solo development)  
**Commit Frequency:** 75+ commits over 5-week development period  
**Commit Philosophy:** Small, focused commits with clear, descriptive messages

---

#### Git Workflow

```bash
# Daily development workflow
git status                          # Review changed files
git add .                           # Stage all changes
git commit -m "Type: Description"   # Commit with convention
git push origin main                # Deploy to production

# Before starting work
git pull origin main                # Sync with remote

# View commit history
git log --oneline --graph           # See project timeline
```

---

#### Commit Message Convention

All commits follow a structured format for clarity and consistency:

**Format:** `Type: Brief description (max 50 characters)`

**Commit Types:**
| Type | Purpose | Example |
|------|---------|---------|
| **Feat** | New feature | `Feat: Add 1RM calculator with percentage table` |
| **Fix** | Bug fix | `Fix: Chart rendering on mobile Safari` |
| **Style** | CSS/UI changes | `Style: Improve button hover effects` |
| **Refactor** | Code restructure | `Refactor: Split validation into separate module` |
| **Docs** | Documentation | `Docs: Add deployment section to README` |
| **Test** | Testing updates | `Test: Add form validation test cases` |
| **A11y** | Accessibility | `A11y: Add ARIA labels to navigation` |
| **Perf** | Performance | `Perf: Optimize chart render on data change` |

**Example Commit History:**
```bash
Feat: Implement workout CRUD operations
Fix: localStorage quota exceeded error handling  
Style: Add dark theme support with toggle
Refactor: Create modular CSS architecture
A11y: Improve keyboard navigation for forms
Test: Add comprehensive validation testing
Docs: Complete README with all sections
```

---

#### Development Timeline

| Phase | Duration | Commits | Key Deliverables |
|-------|----------|---------|------------------|
| **Planning & Setup** | Week 1 | 1-15 | Project structure, wireframes, HTML foundation |
| **Core Features** | Week 2-3 | 16-40 | CRUD operations, History, Charts, Calculators |
| **Enhancement** | Week 4 | 41-60 | Theme toggle, Keyboard shortcuts, Mobile menu |
| **Testing & Polish** | Week 5 | 61-75+ | Validation fixes, Documentation, Testing |

**Key Milestones:**
- **Day 5:** Basic HTML structure complete
- **Day 10:** CRUD operations functional
- **Day 15:** All 4 pages operational
- **Day 20:** Chart.js integration complete
- **Day 25:** Full responsive design
- **Day 30:** Testing and documentation
- **Day 35:** Production deployment

---

### Code Quality Standards

#### Validation Results

**HTML Validation (W3C):**
- index.html: **0 errors, 0 warnings**
- history.html: **0 errors, 0 warnings**
- charts.html: **0 errors, 0 warnings**
- calculators.html: **0 errors, 0 warnings**
- 404.html: **0 errors, 0 warnings**

**CSS Validation (W3C CSS Validator):**
- All 12 CSS files: **0 errors**
- Modern CSS features used (Grid, Flexbox, Variables)
- Cross-browser compatibility maintained

**JavaScript Quality (JSLint):**
- All 11 modules: **No major issues**
- ES6+ syntax (arrow functions, template literals, modules)
- Strict mode enabled throughout
- Do not use of eval() or with statements
---

### Development Tools & Environment

| Tool | Purpose | Usage |
|------|---------|-------|
| **VSCode** | Code editor | Primary IDE with extensions |
| **Live Server** | Dev server | Hot reload during development |
| **Chrome DevTools** | Debugging | Console, Network, Lighthouse |
| **Git** | Version control | Commit tracking, history |
| **GitHub** | Hosting | Repository + Pages deployment |
| **W3C Validators** | Code quality | HTML/CSS validation |
| **JSLint** | JS quality | Linting and best practices |

---

### Project Management Approach

**Methodology:** Agile-inspired iterative development

1. **Plan:** Defines user stories and acceptance criteria
TWO. **Design:** Create wireframes and plan structure
3. **Build:** Implement features with frequent commits
4. **Test:** Manual testing + validation tools
5. **Document:** Update README and TESTING.md
6. **Deploy:** Push to GitHub Pages
7. **Review:** Gather feedback and iterate

**Documentation Maintained:**
- README.md: Project overview, features, deployment
- TESTING.md: Test cases, results, screenshots
- Inline code comments: Complex logic explained
- Git commit messages: Clear change history

---

### Collaborative Development (Future)

While currently a solo project, the codebase is structured for team collaboration:

**Code Organization:**
- Modular JavaScript architecture (11 independent modules)
- Separation of concerns (HTML/CSS/JS clearly divided)
- Consistent naming conventions throughout
- Comprehensive inline documentation

**Contribution Workflow (Future):**
```bash
# Fork repository
# Create feature branch
git checkout -b feature/new-calculator

# Make changes and commit
git add .
git commit -m "Feat: Add macro calculator"

# Push to fork
git push origin feature/new-calculator

# Open Pull Request on GitHub
# Code review → Merge to main
```

---

## 📊 Project Statistics

```
┌─────────────────────────────────────────────────┐
│ 📊 FitTrack Development Metrics │
├─────────────────────────────────────────────────┤
│ Total Lines of Code: ~3,500+ │
│ JavaScript Modules: 11 │
│ CSS Files: 12 │
│ HTML Pages: 5 │
│ Git Commits: 75+ │
│ Development Time: 5 weeks │
│ Test Cases: 72 (98.6% pass rate) │
│ W3C Validation: 0 errors │
│ Lighthouse Score: 95+ (all metrics) │
│ Supported Browsers: 5 (Chrome, FF, Edge, Safari, Opera) │
│ Deployment Frequency: 10-15 pushes/week │
│ Repository Size: ~2MB │
└─────────────────────────────────────────────────┘
```

---

**Last Updated:** January 2026  
**Deployment Status:** ✅ Live and Stable  
**Production URL:** https://donmarcao.github.io/fittrack/

---

## 🙏 Credits

### Content
- All text by Marcus Machado
- BMI categories: WHO standards
- 1RM formula: Epley (public domain)

### Code & Technologies

**External Libraries:**
- **Chart.js 4.4.1** (MIT License) - https://www.chartjs.org/
- **Google Fonts - Inter** (OFL) - https://fonts.google.com/specimen/Inter

**Original Code (100% by Marcus Machado):**
- 11 JavaScript modules
- 6 CSS files
- 4 HTML pages
- All responsive design
- All accessibility features

### Acknowledgments

- **Code Institute** - Course structure
- **W3C & MDN** - Web standards documentation
- **Chart.js Community** - Excellent docs

---

## 📄 License

**MIT License** - Copyright (c) 2026 Marcus Machado

Educational project for Level 5 Full Stack Web Development diploma.

**Third-Party Licenses:**
- Chart.js: MIT
- Inter Font: SIL OFL

---

## 📞 Contact

**Developer:** Marcus Machado  
**GitHub:** [@DonMarcao](https://github.com/DonMarcao)  
**Repository:** https://github.com/DonMarcao/fittrack  
**Live Site:** https://donmarcao.github.io/fittrack/

---

## 🔮 Future Enhancements

Post-MVP features planned for v2.0+:
- Personal Records tracking
- Workout templates
- Calendar view
- Advanced analytics
- Progressive overload AI
- PWA conversion
- Social features (optional)

---

**Last Updated:** January 20, 2026  
**Status:** ✅ Production Ready  
**Version:** 1.0.7

---

💪 **Thank you for reviewing FitTrack!** 💪

*Developed by Marcus Machado for Level 5 Full Stack Web Development - Milestone 2*

---

⭐ **[View Complete Testing Documentation with Screenshots →](testing.md)** ⭐