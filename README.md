# LMS Dashboard

A responsive learning management system dashboard built with React, Vite, Tailwind CSS, and Ant Design. The app provides a student login flow and a centralized interface for viewing dashboard content, class schedules, attendance, exam results, student details, and assessment uploads.

## Features

- Student authentication with a built-in demo account
- Persistent session state through `localStorage`
- Sidebar navigation for switching between dashboard modules
- Sections for class schedules, attendance, exam results, student details, and assessment uploads
- Responsive layout designed for desktop and smaller screens

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Ant Design
- `@ant-design/icons`

## Demo Login

Use the built-in student account to sign in:

- Email: `student@pmedu.com`
- Password: `Student@123`

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Deploy the built app with GitHub Pages

## Live Demo

https://pmtech-dashboard.netlify.app/

## Project Structure

- `src/App.jsx` - Main app shell and section routing
- `src/components/` - Dashboard modules and UI components
- `src/App.css` - Application styling
- `src/index.css` - Global styles

## Notes

The project stores the logged-in student session in the browser so the dashboard remains available after a refresh until the user signs out.

