# Andromeda Studio

Andromeda Studio is a visually stunning web application built with React and Vite. It features a premium, interactive UI inspired by modern design paradigms, including a dynamic sonar ring animation and a highly responsive layout. The app includes user authentication (Sign In/Sign Up) integrated with Firebase and uses Framer Motion for smooth, complex animations.

## Features

- **Immersive UI/UX**: Premium dark mode aesthetics with blur effects, concentric ring sonar animations, and highly interactive components.
- **Authentication**: Firebase-powered user authentication. Features include Sign Up, Sign In, and a custom Auth Modal.
- **Responsive Design**: Carefully crafted to look perfect on both desktop and mobile devices. Typography and layout scale dynamically.
- **Modern Animations**: Complex layout animations, staggering, and morphing SVGs powered by Framer Motion.
- **Drag & Drop**: Included a dropzone area for media uploads with interactive styling.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS, inline styles, CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React & Custom SVGs
- **Authentication**: Firebase Auth
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejastelkar/andromeda.git
   cd andromeda
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Firebase Setup:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password).
   - Get your Firebase config.
   - You need to add your Firebase config to `src/firebase.js`. Replace the placeholder values with your actual Firebase project credentials.

### Running the App

To start the development server, run:
```bash
npm run dev
```
Then, open `http://localhost:5173` in your browser.

## Deployment

To build the app for production:
```bash
npm run build
```
You can preview the production build using:
```bash
npm run preview
```
