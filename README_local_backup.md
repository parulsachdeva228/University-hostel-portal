# University Hostel Portal

A modern web application for university hostel management built with React and Tailwind CSS 4.

## Features

- Interactive user interface for students to explore hostel options
- Detailed information about on-campus hostel facilities
- Registration form for hostel applications
- Information about off-campus accommodation options
- Interactive maps showing locations of various accommodations
- Responsive design that works on all devices

## Tech Stack

- React 19
- Tailwind CSS 4
- Vite

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd universtiy-hotel-portal
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

- `/src` - Source code
  - `/components` - React components
    - `Header.jsx` - Navigation header
    - `Footer.jsx` - Page footer
    - `Carousel.jsx` - Image carousel
    - `Home.jsx` - Home page with intro and registration form
    - `About.jsx` - Hostel information page
    - `Info.jsx` - External accommodation information
  - `App.jsx` - Main application component
  - `main.jsx` - Entry point
  - `index.css` - Global styles and Tailwind imports

## Adding Images

The application expects the following images in the `/public/images` directory:
- `hostel1.jpg` through `hostel4.jpg` - For the carousel
- `hostelA.jpg` through `hostelE.jpg` - For the hostel details

You can add placeholder images during development.

## Building for Production

To build the application for production:
```
npm run build
```
or
```
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The built application can be deployed to any static web hosting service like Netlify, Vercel, or GitHub Pages.

## License

[MIT](LICENSE)
