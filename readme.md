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
5. [Deployment](#deployment)
   - [GitHub Pages Deployment](#github-pages-deployment)
   - [Local Development](#local-development)
6. [Development Process](#development-process)
   - [Version Control](#version-control)
   - [Commit History](#commit-history)
7. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Acknowledgments](#acknowledgments)

---

## 🎯 Project Overview

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

**Total:** 30 user stories  
**Completed:** 25 (83.3%)  
**Planned:** 5 future enhancements

[View detailed user stories →](testing.md#user-stories-coverage-matrix)

#### Key User Stories

| ID | Feature | Status |
|----|---------|--------|
| US-01 | Understand app purpose immediately | ✅ |
| US-02 | Add first workout easily | ✅ |
| US-06-09 | CRUD operations (Add/Edit/Delete/View) | ✅ |
| US-11 | Visualize progress with charts | ✅ |
| US-14 | Export data to CSV | ✅ |
| US-16-18 | BMI & 1RM calculators | ✅ |
| US-19-21 | Mobile responsive design | ✅ |
| US-22-23 | Dark/light theme toggle | ✅ |
| US-26 | Hamburger menu navigation | ✅ |
| US-27 | Keyboard shortcuts | ✅ |

---

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

Wireframes were created for mobile (375px) and desktop (1024px) views to plan layout and user flow before development.

#### Mobile Wireframes
- **Dashboard:** Quick stats cards, recent workouts, Add Workout CTA
- **Add Workout Form:** Vertical layout, large touch targets
- **Workout History:** List view with swipe actions
- **Charts:** Full-width chart with exercise selector
- **Calculators:** Stacked input/result layout

#### Desktop Wireframes
- **Dashboard:** Multi-column grid, sidebar navigation
- **Add Workout Form:** Two-column form layout
- **Workout History:** Table view with inline actions
- **Charts:** Side-by-side chart and stats
- **Calculators:** Side-by-side BMI and 1RM

**Wireframe Files:**
- [Mobile Dashboard Wireframe](docs/wireframes/mobile-dashboard.png)
- [Desktop Dashboard Wireframe](docs/wireframes/desktop-dashboard.png)

---

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
- **Figma/Pencil:** Wireframe creation
- **Google Fonts:** Inter font family
- **Coolors.co:** Color palette generation and testing

**Testing:**
- **W3C HTML Validator:** HTML validation
- **W3C CSS Validator:** CSS validation
- **ESLint:** JavaScript code quality
- **Chrome Lighthouse:** Performance and accessibility audit


**Deployment:**
- **GitHub Pages:** Static site hosting
- **Git:** Version control and deployment workflow
- **Live URL:** https://donmarcao.github.io/fittrack/

---

## 🧪 Testing

### Manual Testing

**Comprehensive testing documentation available in [TESTING.md](TESTING.md)**

**Quick Stats:**
- **Total Tests:** 150+
- **Pass Rate:** 96.7%
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
| W3C CSS | 0 errors (6 files) |
| JSLint | 0 major issues (11 files) |

### Lighthouse Scores

**Desktop:** 100/92/96/100 (Performance/Accessibility/Best Practices/SEO)  
**Mobile:** 100/92/96/100 (Performance/Accessibility/Best Practices/SEO)

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

**Deployment Steps:**

1. Push to GitHub:
```bash
git add .
git commit -m "Type: Description"
git push origin main
```

2. Enable GitHub Pages:
   - Repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

3. Auto-deployment:
   - Changes live within 1-2 minutes

### Local Development

**Clone & Run:**
```bash
git clone https://github.com/DonMarcao/fittrack.git
cd fittrack
# Open index.html in browser OR use Live Server
```

**Requirements:**
- Modern browser (Chrome/Firefox/Edge 90+)
- No build process or dependencies

---

## 📝 Development Process

### Version Control

**Git Workflow:**
- Frequent commits (50-75 total expected)
- Small, focused changes per commit
- Clear, descriptive commit messages
- Linear history (no branches for solo project)

**Commit Types:** Feat, Fix, Docs, Style, Refactor, Test, A11y

### Development Timeline

**Commits 1-21:** HTML structure, CSS foundation, JS modules  
**Commits 22-40:** CRUD operations, History, Charts, Calculators  
**Commits 41-50:** Theme toggle, Keyboard shortcuts, JSON backup  
**Commits 51-55:** Hamburger menu, Mobile fixes, Documentation  
**Commits 56-75:** Documentation, Adjustments, Criteria Refactoring  

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

⭐ **[View Complete Testing Documentation with Screenshots →](TESTING.md)** ⭐