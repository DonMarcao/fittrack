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

### Dashboard Page
- Stats cards, recent workouts, quick actions
- Export CSV, backup/import data

### History Page
- Complete workout list with search and filters
- Stats summary

### Charts Page
- 4 interactive charts (Volume, Weight, Sets/Reps, Exercise Breakdown)
- Dynamic filters

### Calculators Page
- BMI Calculator
- 1RM Calculator with percentage tables

### UI/UX Features
- Dark/Light theme toggle
- Keyboard shortcuts (Ctrl+K, Ctrl+E, Ctrl+/)
- Toast notifications
- Hamburger menu (mobile)
- Form validation with animations

---

## 🛠️ Technologies Used

- **HTML5, CSS3, JavaScript (ES6+)**
- **Chart.js 4.4.1**
- **localStorage API**
- **Git & GitHub Pages**
- **VS Code + Live Server**

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