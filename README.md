# React CSS Portfolio

A professional personal portfolio website built with React 18+, Material-UI v5+, and React Router DOM v6 for the Web Development with Bootstrap 5 course (Assignment 2). Hosted at [https://github.com/muteeurrehman28/react-css-portfolio](https://github.com/muteeurrehman28/react-css-portfolio).

## Features

* **Responsive Layout**: MUI AppBar with profile avatar, collapsible Drawer (mobile), and fixed Footer.
* **Dynamic Routing**: Lazy-loaded routes for Home, Education, Projects, and Contact pages.
* **Contact Form**: Formik with Yup validation (name, email, message length checks).
* **Project Showcase**: Reusable ProjectCard with images, hover animations, and responsive grid.
* **Theme Toggle**: Light/dark mode switch using MUI ThemeProvider and Context API.
* **Loading States**: MUI Skeleton components for Education and Projects pages.
* **Styling**: Global CSS variables and module-based local styles with media queries.
* **Animations**: Fade-in transitions and hover effects for a polished user experience.
* **Accessibility**: Semantic HTML, ARIA labels, and dynamic document titles.

## Screenshots

![Home Page](src/assets/Home_ss.jpg)
*Home Page*

![Education Page](./assets/Education_ss.jpg)
*Education Page*

![Projects Page](./assets/Projects_ss.jpg)
*Projects Page*

![Contact Page](./assets/Contact_ss.jpg)
*Contact Page*

## Installation

```bash
# Clone the repository
git clone https://github.com/muteeurrehman28/react-css-portfolio.git

# Navigate to the project directory
cd react-css-portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

## Folder Structure

```
src/
├── assets/
│   ├── avatar.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── placeholder.jpg
├── context/
│   ├── PageTitleContext.jsx
│   ├── ThemeContext.jsx
├── pages/
│   ├── Home/
│   │   ├── index.jsx
│   │   ├── Home.module.css
│   ├── Education/
│   │   ├── index.jsx
│   │   ├── Education.module.css
│   ├── Projects/
│   │   ├── index.jsx
│   │   ├── Projects.module.css
│   ├── Contact/
│   │   ├── index.jsx
│   │   ├── Contact.module.css
├── layouts/
│   ├── Header/
│   │   ├── index.jsx
│   │   ├── Header.module.css
│   ├── Footer/
│   │   ├── index.jsx
│   │   ├── Footer.module.css
│   ├── SideNav/
│   │   ├── index.jsx
│   │   ├── SideNav.module.css
├── components/
│   ├── CustomInput/
│   │   ├── index.jsx
│   │   ├── CustomInput.module.css
│   ├── CustomTable/
│   │   ├── index.jsx
│   ├── ProjectCard/
│   │   ├── index.jsx
│   │   ├── ProjectCard.module.css
│   ├── LoadingSkeleton/
│   │   ├── index.jsx
├── App.jsx
├── index.jsx
├── index.css
```

## Submission Guidelines

* **Google Classroom**: Submit a ZIP file excluding `node_modules`. Include `.gitignore`.
* **GitHub**: Public repository at [https://github.com/muteeurrehman28/react-css-portfolio](https://github.com/muteeurrehman28/react-css-portfolio) with meaningful commit messages (e.g., `feat: add responsive header`, `style: implement theme toggle`).
* **Testing**: Verify responsiveness using Chrome DevTools (mobile and desktop breakpoints).

## Notes

* **Assets**: Replace placeholder images in `src/assets/` with optimized images (e.g., PNG/JPEG <200KB).
* **Customization**: Refer to MUI documentation for advanced component styling.
* **Performance**: Lazy-loaded routes and memoized validation schemas optimize load times.
* **Git Hygiene**: Use descriptive commit messages and maintain a clean branch history.

## Example Commit Messages

* `feat: initialize project with MUI and React Router`
* `style: add fade-in animations and hover effects`
* `fix: improve mobile drawer accessibility`
* `feat: implement light/dark theme toggle`

## License

© 2025 My Portfolio. All rights reserved.
