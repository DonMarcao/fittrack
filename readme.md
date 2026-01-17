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

#### First-Time Visitor Goals
1. *"As a first-time visitor, I want to understand what FitTrack does within 5 seconds"*
2. *"As a first-time visitor, I want to add my first workout immediately"*
3. *"As a first-time visitor, I want to see example data before committing"*

#### Returning Visitor Goals
4. *"As a returning visitor, I want to see my progress at a glance"*
5. *"As a returning visitor, I want to quickly add today's workout"*
6. *"As a returning visitor, I want to review past workouts"*

#### Frequent User Goals
7. *"As a frequent user, I want to visualize my progress trends"*
8. *"As a frequent user, I want to export my data for backup"*
9. *"As a frequent user, I want to calculate training metrics"*
10. *"As a frequent user, I want to use the app on my phone at the gym"*

[Full user stories with solutions in complete README]

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