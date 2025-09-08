<!-- <p align="center">
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/public/logo192.png" width="128px" />
</p> -->

# 📝React.js Todo App

<p align="center"><i>A fast and modern Todo app built with React, featuring task sharing via link, P2P Task Sync with WebRTC, theme customization, offline usage as a PWA, and caching for smooth performance.</i></p>

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/baner.png" />

## [https://react-cool-todo-app.netlify.app/](https://react-cool-todo-app.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3b07d34-f0da-4280-9076-fd40eea893c6/deploy-status)](https://app.netlify.com/sites/react-cool-todo-app/deploys)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/maciekt07/TodoApp?color=%23b624ff)
![GitHub created at ](https://img.shields.io/github/created-at/maciekt07/TodoApp?color=%23b624ff)
![GitHub last commit](https://img.shields.io/github/last-commit/maciekt07/TodoApp?color=%23b624ff)

<!-- <p align="center">
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/iPhone%20Mockup%20black.png" width="400px" />
</p> -->

## 💻 Tech Stack

<ul style="display: flex; flex-direction: column; gap:10px;">
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=react" alt="react" width="24" style="vertical-align: middle; margin-right: 4px;" /> React
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript" alt="typescript" width="20" style="vertical-align: middle;margin-right: 4px;" /> Typescript
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vite" alt="vite" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vite
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vitest" alt="vitest" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vitest
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=emotion" alt="emotion" width="24" style="vertical-align: middle;margin-right: 4px;" /> Emotion
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=mui" alt="mui" width="24" style="vertical-align: middle;margin-right: 4px;" /> Material UI (MUI)
  </li>
</ul>

## ⚡ Features

### 🔗 Share Tasks by Link or QR Code

Easily share your tasks with others using a link or QR code.

**[Example Link](https://react-cool-todo-app.netlify.app/share?task=N4IgJg9gdgpiBcAzAhgGwM4wDQgA4EspYwEAXAJwFdsQpkBbOeEAdRgCN19SYACAERgA3GKgi5GUUiBxgY6AMbl8uUvmgIQAYXIxkPXsl6pkUMIQDmvXMgt8A7twAWvAEp6FpAHQArdL0QIcl4FVHwYKS9eJ1JSXHR4AHpE+1SvAE8ISlJKdhgvBQh6FP0FJwB+IQBedgBZAGsoRABpAA0ASQAxAEEADgAyUiqAJgBmdH7kdgB9MtNYVCrEXRgtCDktBlwvIIsZEBh6CB98TQBGRABOMDOAWgvRxAVb4YAGV7B7xAAWdnZ9wpiciaADE7AAbMNvohEPswPomCA3sMAKy3V7fF6vAAqrzO8DOl3gr3BXleAHZRgAtOF6MBhWCaZFojEvUa4-FnXrE15k940nAKBEWILpBAAbVA+BIzFew0uwwU7GQaMQ4Jgw1u3zOCkx7BRyHJtwUKMuyFeyGQMAUiBgo32dEYmhYQXq+0Ox1OzAeGoBECBoKhvRgMJAAF8sFKZWdwb1yWdUdryd9waMyaMcI7EWtzFA9jgPSdzogDaqYK9YYL-UFQeCbsNQ2GALo4EzoUgAZWQIiZcpZmLeHPgb3go15oxR1PDQA&userName=Maciej)**



### 🎨 Color Themes & Dark Mode

Choose from various color themes and toggle between light and dark modes to suit your preferences.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/settings.png" width="500px" />

### 🗣️ Task Reading Aloud

Option to have tasks read aloud using the native `SpeechSynthesis` API, with a selection of voices to choose from.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ReadAloud.png" width="260px" alt="Task Reading Aloud" />

### 📥 Import/Export Tasks

Users can import and export tasks to/from JSON files. This feature allows users to back up their tasks or transfer them to other devices easily. [Example Import File](https://github.com/maciekt07/TodoApp/blob/main/example-import.json)

### 📴 Progressive Web App (PWA)

This app is a Progressive Web App (PWA), which means it can be installed on your device, **used even when you're offline** and behave like a native app with shortcuts and app badges.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/pwaTaskBar.png" alt="taskbar" width="260px" />

### 🔄 Update Prompt

The app features a custom update prompt that notifies users when a new version is available, allowing for easy refresh to access the latest improvements.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/UpdatePrompt.png" alt="update prompt" width="260px" />

### 📱 Custom Splash Screens

The app automatically generates custom splash screens from a single HTML template for various iOS and iPadOS devices in both light and dark modes. These splash screens provide a smooth, native-like launch experience when the app is opened as a PWA.

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/SplashScreen.png" alt="Splash Screen Example" width="450px" />

To generate splash screens: `npm run generate-splash`

## 👨‍💻 Installation

To install and run the project locally, follow these steps:

- Clone the repository: `git clone https://github.com/maciekt07/TodoApp.git`
- Navigate to the project directory: `cd TodoApp`
- Install the dependencies: `npm install`
- Start the development server: `npm run dev`

The app will now be running at [http://localhost:5173/](http://localhost:5173/).

> [!TIP]
> For mobile device testing, use `npm run dev:host` to preview the app on your local network with HTTPS (required for camera features) and a QR code in the terminal for quick access. To enable PWA features in development, see `vite.config.ts`.

## 📷 Screenshots

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss1.png" width="300px" />
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss2.png" width="300px" />

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss3.png" width="300px" />

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/sspc1.png" width="650px" />

## 🚀 Performance

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/performance.png" width="600px" />

## Task Management Enhancement - Date Filters & Priority System

### Overview
This implementation adds comprehensive date filtering and task priority features to the existing React TypeScript todo application, maintaining consistency with the existing codebase architecture and design patterns.

### Features Implemented

#### 1. Date Filters
- **Filter Options**: All Tasks (default), Today, This Week, Custom Date Range
- **Dynamic Filtering**: Tasks are re-rendered in real-time based on selected filters
- **Persistent State**: Filter preferences are saved in session storage using existing `useStorageState` hook
- **Smart Filtering**: Considers both task creation date and deadline date for filtering
- **Clear Filters**: One-click option to reset all active filters

#### 2. Task Priority System
- **Customizable Priorities**: Critical (Red), High (Orange), Medium (Purple), Low (Green)
- **Visual Indicators**: Color-coded badges displayed on task cards using Material-UI Chip component
- **Priority Selection**: Available in both Add Task and Edit Task workflows
- **Data Persistence**: Priorities are saved in the user context following existing patterns
- **Responsive Design**: Priority badges adapt to different screen sizes

### Technical Implementation

#### Architecture Decisions
- **State Management**: Extended existing Context API pattern for consistency
- **Type Safety**: Full TypeScript support with proper interface extensions
- **Component Structure**: Modular, reusable components following existing patterns
- **Styling**: Emotion/styled-components matching current design system
- **Data Storage**: Leveraged existing storage utilities for persistence

#### Key Files Created/Modified
- **Types**: Extended `Task` and `User` interfaces in `src/types/user.ts`
- **Constants**: Added default priorities in `src/constants/priorities.ts`
- **Utils**: Created date filtering functions in `src/utils/dateUtils.ts`
- **Components**: New `PriorityBadge`, `PrioritySelect`, and `TaskFilterBar` components
- **Integration**: Updated `TasksList`, `AddTask`, `EditTask`, and `TaskItem` components
- **Context**: Extended TaskProvider and UserContext for new state management

#### Integration Points
- Extended existing `TaskContext` with date filter state
- Updated task rendering logic in `TasksList` to support filtering
- Enhanced Add/Edit task forms with priority selection
- Modified `TaskItem` to display priority badges
- Maintained backward compatibility with existing task data

### Usage
1. **Date Filtering**: Use the filter bar at the top of the task list to select date ranges
2. **Priority Assignment**: Select priority when creating/editing tasks from the priority dropdown
3. **Visual Indicators**: Priority badges appear at the top of task cards with appropriate colors
4. **Filter Persistence**: Selected filters persist across browser sessions
5. **Clear Filters**: Use the "Clear Filters" button to reset all active filters

### Testing
Unit tests provided for:
- Date utility functions (`isToday`, `isThisWeek`, `isInDateRange`)
- Component rendering and user interactions
- Priority badge display and styling

The implementation maintains full backward compatibility and follows all existing codebase conventions for a seamless integration experience.

## Credits

licensed under [MIT](https://github.com/maciekt07/TodoApp/blob/main/LICENSE).
