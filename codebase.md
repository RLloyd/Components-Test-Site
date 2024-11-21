# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "components-test-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.28.0",
    "sass": "^1.81.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "^5.4.10"
  }
}

```

# public/Notes/Misc.tsx

```tsx

```

# public/vite.svg

This is a file of the type: SVG Image

# README.md

```md
#React + TypeScript + Vite + SASS
Testing environment for UI components, focusing specifically on a navigation system with theme switching capabilities. However, let me lay out what we could use it for based on the current setup:

Component Testing Site:


Test different UI components in isolation
Verify the functionality of the theming system (light/dark mode)
Experiment with the established color palette:

Primary: #8465C3 (Purple)
Secondary: #3AF1F9 (Cyan)
Accent: #F46A47 (Orange)
Success: #A2C465 (Green)
Warning: #FAD8B4 (Light Orange)
Danger: #F5536A (Red)

Design System Documentation:

We could expand it to showcase your design system elements:

Typography (Libre Baskerville for headers, Open Sans for body)
Color usage examples
Component variations and states
Spacing and layout guidelines




Component Library Development:


Could serve as a playground for developing and testing new components
Document component usage and props
Show different component variations and interactions

Would you like me to help you expand the site in any of these directions? For example, I could help:

Create a proper styleguide page
Add more test components
Set up documentation for your design system
Create example pages showing different component combinations
```

# src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src/App.tsx

```tsx
// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme } from './types/theme';
import styles from './styles/App.module.scss';
import TopNav from './components/TopNav';
import {
  MashMediaStudio,
  DigitalOne,
  Zenmonics,
  Blog,
  Styleguide,
  Profile
} from './pages';
import Hero from './components/Hero';

// Custom hook for theme persistence
const useThemePersistence = () => {
  // Get initial theme from localStorage or default to 'light'
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }

    // Check system preference if no saved theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Optionally update body/root element class for global theming
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

function App() {
  const { theme, toggleTheme } = useThemePersistence();

  return (
    <Router>
      <div className={`${styles.appContainer} ${styles[theme]}`}>
        <TopNav theme={theme} onThemeToggle={toggleTheme} />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to the Components Test Site</h1>
                <p>This is a test environment for our navigation components.</p>
                <Hero />
              </>
            } />
            <Route path="/mashmedia" element={<MashMediaStudio />} />
            <Route path="/digitalone" element={<DigitalOne />} />
            <Route path="/zenmonics" element={<Zenmonics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
```

# src/assets/GD-Fusion-logo.png

This is a binary file of the type: Image

# src/assets/Hero/veil-1.webp

This is a binary file of the type: Image

# src/assets/Hero/veil-2.webp

This is a binary file of the type: Image

# src/assets/Hero/veil-3.webp

This is a binary file of the type: Image

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/Hero.tsx

```tsx
// src/components/Hero.tsx
import { useState, useEffect, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const heroContent = [
  {
    title: "Discover Innovation",
    description: "Explore cutting-edge solutions that transform your digital experience",
    image: "src/assets/Hero/veil-1.webp",
    ctaText: "Learn More"
  },
  {
    title: "Build the Future",
    description: "Create powerful applications with our advanced technology stack",
    image: "src/assets/Hero/veil-2.webp",
    ctaText: "Start Building"
  },
  {
    title: "Expert Support",
    description: "Get dedicated assistance from our team of experienced developers",
    image: "src/assets/Hero/veil-3.webp",
    ctaText: "Contact Us"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === heroContent.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? heroContent.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      {heroContent.map((content, index) => (
        <div
          key={index}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
          className="hero__slide"
        >
          <img
            src={content.image}
            alt={content.title}
            className="hero__image"
          />
          <div className="hero__overlay">
            <div className="hero__content">
              <h1 className="hero__title">{content.title}</h1>
              <p className="hero__description">{content.description}</p>
              <button className="hero__cta">{content.ctaText}</button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hero__arrow hero__arrow--prev"
        aria-label="Previous slide"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={nextSlide}
        className="hero__arrow hero__arrow--next"
        aria-label="Next slide"
      >
        <IoIosArrowForward />
      </button>

      <div className="hero__dots">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

// import { useState, useEffect, useCallback } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const heroContent = [
//   {
//     title: "Discover Innovation",
//     description: "Explore cutting-edge solutions that transform your digital experience",
//     image: "src/assets/Hero/veil-1.webp",
//     ctaText: "Learn More"
//   },
//   {
//     title: "Build the Future",
//     description: "Create powerful applications with our advanced technology stack",
//     image: "src/assets/Hero/veil-2.webp",
//     ctaText: "Start Building"
//   },
//   {
//     title: "Expert Support",
//     description: "Get dedicated assistance from our team of experienced developers",
//     image: "src/assets/Hero/veil-3.webp",
//     ctaText: "Contact Us"
//   }
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleNextSlide = useCallback(() => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   }, [isAnimating]);

//   useEffect(() => {
//     const timer = setInterval(handleNextSlide, 5000);
//     return () => clearInterval(timer);
//   }, [handleNextSlide]);

//   return (
//     <div className="hero">
//       <div
//         className="hero__slider"
//         style={{'--slide-position': `-${currentSlide * 100}%`} as React.CSSProperties}
//       >
//         {heroContent.map((content, index) => (
//           <div
//             key={index}
//             className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
//           >
//             <img
//               src={content.image}
//               alt={content.title}
//               loading="eager"
//               width={1200}
//               height={400}
//             />
//             <div className="hero__overlay">
//               <div className={`hero__content ${index === currentSlide ? 'hero__content--active' : ''}`}>
//                 <h1 className="hero__title">{content.title}</h1>
//                 <p className="hero__description">{content.description}</p>
//                 <button className="hero__cta">{content.ctaText}</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={handleNextSlide}
//         disabled={isAnimating}
//         className="hero__arrow hero__arrow--next"
//         aria-label="Next slide"
//       >
//         <IoIosArrowForward />
//       </button>
//     </div>
//   );
// };

// export default Hero;


// // import { useState, useEffect, useCallback } from 'react';
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // const heroContent = [
// //   {
// //     title: "Discover Innovation",
// //     description: "Explore cutting-edge solutions that transform your digital experience",
// //     image: "src/assets/Hero/veil-1.webp",
// //     ctaText: "Learn More"
// //   },
// //   {
// //     title: "Build the Future",
// //     description: "Create powerful applications with our advanced technology stack",
// //     image: "src/assets/Hero/veil-2.webp",
// //     ctaText: "Start Building"
// //   },
// //   {
// //     title: "Expert Support",
// //     description: "Get dedicated assistance from our team of experienced developers",
// //     image: "src/assets/Hero/veil-3.webp",
// //     ctaText: "Contact Us"
// //   }
// // ];

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);

// //   const handleNextSlide = useCallback(() => {
// //     if (!isAnimating) {
// //       setIsAnimating(true);
// //       setCurrentSlide((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
// //       setTimeout(() => setIsAnimating(false), 500);
// //     }
// //   }, [isAnimating]);

// //   useEffect(() => {
// //     const timer = setInterval(handleNextSlide, 5000);
// //     return () => clearInterval(timer);
// //   }, [handleNextSlide]);

// //   const handlePrevSlide = () => {
// //     if (!isAnimating) {
// //       setIsAnimating(true);
// //       setCurrentSlide((prev) => (prev === 0 ? heroContent.length - 1 : prev - 1));
// //       setTimeout(() => setIsAnimating(false), 500);
// //     }
// //   };

// //   const goToSlide = (index: number) => {
// //     if (!isAnimating && index !== currentSlide) {
// //       setIsAnimating(true);
// //       setCurrentSlide(index);
// //       setTimeout(() => setIsAnimating(false), 500);
// //     }
// //   };

// //   return (
// //     <div className="hero">
// //       <div
// //         className="hero__slider"
// //         style={{'--slide-position': `-${currentSlide * 100}%`} as React.CSSProperties}
// //       >
// //         {heroContent.map((content, index) => (
// //           <div
// //             key={index}
// //             className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
// //           >
// //             <img
// //               src={content.image}
// //               alt={content.title}
// //               className="hero__image"
// //               loading="eager"
// //               width={1200}
// //               height={400}
// //             />
// //             <div className="hero__overlay">
// //               <div className={`hero__content ${index === currentSlide ? 'hero__content--active' : ''}`}>
// //                 <h1 className="hero__title">{content.title}</h1>
// //                 <p className="hero__description">{content.description}</p>
// //                 <button className="hero__cta">{content.ctaText}</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <button
// //         onClick={handlePrevSlide}
// //         disabled={isAnimating}
// //         className="hero__arrow hero__arrow--prev"
// //         aria-label="Previous slide"
// //       >
// //         <IoIosArrowBack />
// //       </button>
// //       <button
// //         onClick={handleNextSlide}
// //         disabled={isAnimating}
// //         className="hero__arrow hero__arrow--next"
// //         aria-label="Next slide"
// //       >
// //         <IoIosArrowForward />
// //       </button>

// //       <div className="hero__dots">
// //         {heroContent.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => goToSlide(index)}
// //             disabled={isAnimating}
// //             className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
// //             aria-label={`Go to slide ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;
```

# src/components/TopNav.tsx

```tsx
// src/components/TopNav.tsx
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/TopNav.module.scss';
import { Theme } from '../types/theme';
import GDFusionLogo from '../assets/GD-Fusion-logo.png';

interface TopNavProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export const TopNav: FC<TopNavProps> = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`${styles.topNav} ${styles[theme]}`}>
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} />
      </div>

      <div className={`${styles.containerOne} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.leftContainer}>
          <Link
            to="/mashmedia"
            className={`${styles.navLink} ${isActive('/mashmedia') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            MashMedia Studio
          </Link>
          <Link
            to="/digitalone"
            className={`${styles.navLink} ${isActive('/digitalone') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            DigitalOne
          </Link>
          <Link
            to="/zenmonics"
            className={`${styles.navLink} ${isActive('/zenmonics') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Zenmonics
          </Link>
        </div>

        <div className={styles.middleContainer}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <img
              src={GDFusionLogo}
              alt="GD Fusion Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.rightContainer}>
          <Link
            to="/blog"
            className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/styleguide"
            className={`${styles.navLink} ${isActive('/styleguide') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Styleguide
          </Link>
          <Link
            to="/profile"
            className={`${styles.navLink} ${isActive('/profile') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Profile
          </Link>
        </div>
      </div>

      <div className={styles.containerTwo}>
        <button
          className={styles.themeToggle}
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
```

# src/index.css

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

```

# src/main.tsx

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# src/pages/Blog.tsx

```tsx
// src/pages/Blog.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const Blog: FC = () => {
   return (
     <div className={styles.pageContainer}>
       <h1>Blog</h1>
       <p>Stay updated with our latest insights and news.</p>
       <section className={styles.content}>
         <article className={styles.blogPost}>
           <h2>Latest Posts</h2>
           <div className={styles.postPreview}>
             <h3>The Future of Digital Design</h3>
             <p>Exploring upcoming trends in digital design and user experience...</p>
           </div>
           <div className={styles.postPreview}>
             <h3>Innovation in Tech</h3>
             <p>Breaking down the latest technological advancements...</p>
           </div>
         </article>
       </section>
     </div>
   );
 };


```

# src/pages/DigitalOne.tsx

```tsx
// src/pages/DigitalOne.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const DigitalOne: FC = () => {
   return (
     <div className={styles.pageContainer}>
       <h1>DigitalOne</h1>
       <p>Your partner in digital transformation.</p>
       <section className={styles.content}>
         <h2>Solutions</h2>
         <ul>
           <li>Cloud Services</li>
           <li>Digital Strategy</li>
           <li>Enterprise Solutions</li>
           <li>Data Analytics</li>
         </ul>
       </section>
     </div>
   );
 };


```

# src/pages/index.ts

```ts
// src/pages/index.ts
export * from './MashMediaStudio';
export * from './DigitalOne';
export * from './Zenmonics';
export * from './Blog';
export * from './Styleguide';
export * from './Profile';
```

# src/pages/MashMediaStudio.tsx

```tsx
// src/pages/MashMediaStudio.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const MashMediaStudio: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>MashMedia Studio</h1>
      <p>Welcome to MashMedia Studio - where creativity meets technology.</p>
      <section className={styles.content}>
        <h2>Our Services</h2>
        <ul>
          <li>Digital Content Creation</li>
          <li>Video Production</li>
          <li>Animation Services</li>
          <li>Interactive Media</li>
        </ul>
      </section>
    </div>
  );
};


```

# src/pages/Profile.tsx

```tsx
// src/pages/Profile.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const Profile: FC = () => {
   return (
     <div className={styles.pageContainer}>
       <h1>Profile</h1>
       <p>Manage your account and preferences.</p>
       <section className={styles.content}>
         <div className={styles.profileInfo}>
           <h2>Account Details</h2>
           <div className={styles.infoSection}>
             <h3>Personal Information</h3>
             <p>Name: John Doe</p>
             <p>Email: john.doe@example.com</p>
           </div>
         </div>
       </section>
     </div>
   );
 };


```

# src/pages/Styleguide.tsx

```tsx
// src/pages/Styleguide.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const Styleguide: FC = () => {
   return (
     <div className={styles.pageContainer}>
       <h1>Styleguide</h1>
       <p>Our design system documentation and components.</p>
       <section className={styles.content}>
         <h2>Design Elements</h2>
         <div className={styles.colorPalette}>
           <h3>Colors</h3>
           <div className={styles.colorSwatch} style={{ backgroundColor: '#8465C3' }}>Primary</div>
           <div className={styles.colorSwatch} style={{ backgroundColor: '#3AF1F9' }}>Secondary</div>
           <div className={styles.colorSwatch} style={{ backgroundColor: '#F46A47' }}>Accent</div>
         </div>
       </section>
     </div>
   );
 };


```

# src/pages/Zenmonics.tsx

```tsx
// src/pages/Zenmonics.tsx
import { FC } from 'react';
import styles from '../styles/pages/Pages.module.scss';

export const Zenmonics: FC = () => {
   return (
     <div className={styles.pageContainer}>
       <h1>Zenmonics</h1>
       <p>Bringing harmony to your digital experience.</p>
       <section className={styles.content}>
         <h2>Our Focus</h2>
         <ul>
           <li>User Experience Design</li>
           <li>Digital Banking Solutions</li>
           <li>Financial Technology</li>
           <li>Mobile Applications</li>
         </ul>
       </section>
     </div>
   );
 };


```

# src/src/styles/components/_hero.scss

```scss
.hero {
   position: relative;
   width: 1200px;
   height: 400px;
   overflow: hidden;
   border: 1px solid red;
   border-radius: 1rem;
   margin: 0 auto;

   &__slide {
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
   }

   &__image {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }

   &__overlay {
     position: absolute;
     inset: 0;
     background-color: rgba(0, 0, 0, 0.4);
   }

   &__content {
     position: absolute;
     top: 50%;
     left: 2rem;
     transform: translateY(-50%);
     max-width: 32rem;
     color: white;
   }

   &__title {
     font-size: 2.5rem;
     font-weight: bold;
     margin-bottom: 1rem;
     font-family: $font-header;
   }

   &__description {
     font-size: 1.25rem;
     margin-bottom: 2rem;
     font-family: $font-body;
   }

   &__cta {
     background-color: $accent;
     color: white;
     padding: 0.75rem 2rem;
     border-radius: 0.5rem;
     border: none;
     cursor: pointer;
     transition: all 300ms;

     &:hover {
       background-color: rgba($accent, 0.9);
       transform: scale(1.05);
     }
   }

   &__arrow {
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     z-index: 10;
     background-color: rgba(white, 0.2);
     padding: 0.75rem;
     border-radius: 50%;
     border: none;
     cursor: pointer;
     transition: background-color 300ms;

     svg {
       color: white;
       width: 1.5rem;
       height: 1.5rem;
     }

     &:hover {
       background-color: rgba(white, 0.3);
     }

     &--prev {
       left: 1rem;
     }

     &--next {
       right: 1rem;
     }
   }

   &__dots {
     position: absolute;
     bottom: 1rem;
     left: 50%;
     transform: translateX(-50%);
     display: flex;
     gap: 0.5rem;
     z-index: 10;
   }

   &__dot {
     width: 0.75rem;
     height: 0.75rem;
     border-radius: 50%;
     border: none;
     background-color: rgba(white, 0.5);
     cursor: pointer;
     transition: background-color 300ms;

     &:hover {
       background-color: rgba(white, 0.9);
     }

     &--active {
       background-color: white;
     }
   }
 }

// .hero {
//    position: relative;
//    width: 1200px;
//    height: 400px;
//    overflow: hidden;
//    border: 1px solid red;
//    border-radius: 1rem;
//    margin: 0 auto;

//    &__slider {
//      position: relative;
//      height: 100%;
//      transition: transform 500ms ease-in-out;
//      transform: translateX(var(--slide-position));
//      width: 100%;
//    }

//    &__slide {
//      position: absolute;
//      width: 100%;
//      height: 100%;
//      opacity: 0;
//      transition: opacity 500ms ease-in-out;

//      &--active {
//        opacity: 1;
//      }

//      img {
//        width: 1200px;
//        height: 400px;
//        object-fit: cover;
//      }
//    }
// }

// // .hero {
// //    position: relative;
// //    width: 1200px;
// //    height: 400px;
// //    overflow: hidden;
// //    border: 1px solid red;
// //    border-radius: 1rem;
// //    margin: 0 auto;

// //    &__slider {
// //      position: relative;
// //      display: flex;
// //      height: 100%;
// //      transition: transform 500ms ease-in-out;
// //    }

// //    &__slide {
// //      min-width: 100%;
// //      height: 100%;
// //      position: relative;
// //      flex-shrink: 0;

// //      img {
// //        width: 100%;
// //        height: 100%;
// //        object-fit: cover;
// //      }
// //    }

// //    &__overlay {
// //      position: absolute;
// //      inset: 0;
// //      background-color: rgba(0, 0, 0, 0.4);
// //    }

// //    &__content {
// //      position: absolute;
// //      top: 50%;
// //      left: 2rem;
// //      transform: translateY(-50%);
// //      max-width: 32rem;
// //      color: white;
// //      text-align: left;

// //      &--active {
// //        opacity: 1;
// //      }
// //    }

// //    &__title {
// //      font-size: 2.5rem;
// //      font-weight: bold;
// //      margin-bottom: 1rem;
// //      font-family: $font-header;
// //    }

// //    &__description {
// //      font-size: 1.25rem;
// //      margin-bottom: 2rem;
// //      font-family: $font-body;
// //    }

// //    &__cta {
// //      background-color: $accent;
// //      color: white;
// //      padding: 0.75rem 2rem;
// //      border-radius: 0.5rem;
// //      transition: all 300ms;

// //      &:hover {
// //        background-color: rgba($accent, 0.9);
// //        transform: scale(1.05);
// //      }
// //    }

// //    // Rest of the styles remain the same
// // }
```

# src/styles/_variables.scss

```scss
// src/styles/_variables.scss

// Colors
$primary: #8465C3;
$secondary: #3AF1F9;
$accent: #F46A47;
$success: #A2C465;
$warning: #FAD8B4;
$danger: #F5536A;
$black: #000000;
$white: #ffffff;
$light: #F8F8F8;
$dark: #1A1A1A;
$textLight: #F8F8F8;
$textDark: #1A1A1A;

// Fonts
$font-header: 'Libre Baskerville', serif;
$font-body: 'Open Sans', sans-serif;

// Spacing
$space-xs: 0.25rem;
$space-sm: 0.5rem;
$space-md: 1rem;
$space-lg: 1.5rem;
$space-xl: 2rem;
$space-2xl: 2.5rem;
$space-3xl: 3rem;

// Font sizes
$font-xs: 0.75rem;
$font-sm: 0.875rem;
$font-base: 1rem;
$font-lg: 1.125rem;
$font-xl: 1.25rem;
$font-2xl: 1.5rem;
$font-3xl: 2rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;

// Z-index
$z-modal: 1000;
$z-dropdown: 900;
$z-header: 800;
$z-footer: 700;

// Border radius
$radius-sm: 0.125rem;
$radius-base: 0.25rem;
$radius-md: 0.375rem;
$radius-lg: 0.5rem;
$radius-xl: 0.75rem;
$radius-full: 9999px;

// Transitions
$transition-fast: 150ms;
$transition-base: 200ms;
$transition-slow: 300ms;

// Shadows
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);

// Mixins
@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

# src/styles/App.module.scss

```scss
// src/styles/App.module.scss
@import 'variables';

.appContainer {
  min-height: 100vh;
  padding-top: 70px;
  transition: background-color $transition-base ease,
              color $transition-base ease;
  font-family: $font-body;
//   border: 1px solid red;

  &.light {
    background-color: #ffffff;
    color: #333333;
  }

  &.dark {
    background-color: #1a1a1a;
    color: #ffffff;
  }
}

.content {
  padding: $space-xl;
  max-width: $breakpoint-lg;
  margin: 0 auto;
  text-align: center;
//   border: 1px solid red;

  @include respond-to($breakpoint-md) {
    padding: $space-2xl;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: $font-header;
    margin-bottom: $space-md;
  }

  p {
    font-family: $font-body;
    margin-bottom: $space-md;
  }
}

.heading {
  font-family: $font-header;
  font-size: $font-2xl;
  color: $primary;
  margin-bottom: $space-lg;
  font-weight: 700;
}

.paragraph {
  font-family: $font-body;
  font-size: $font-base;
  line-height: 1.6;
  margin-bottom: $space-md;
}
```

# src/styles/global.scss

```scss
// src/styles/global.scss
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
@import 'variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  &[data-theme='light'] {
    --bg-primary: #{$light};
    --text-primary: #{$textDark};
    --bg-secondary: #{lighten($light, 3%)};
    --border-color: #{rgba($black, 0.1)};
  }

  &[data-theme='dark'] {
    --bg-primary: #{$dark};
    --text-primary: #{$textLight};
    --bg-secondary: #{lighten($dark, 3%)};
    --border-color: #{rgba($white, 0.1)};
  }
}

body {
  font-family: $font-body;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color $transition-base ease,
              color $transition-base ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-header;
  font-weight: 700;
  line-height: 1.2;
}
```

# src/styles/pages/Pages.module.scss

```scss
// src/styles/pages/Pages.module.scss
@import '../variables';

.pageContainer {
  padding: $space-lg;
  max-width: $breakpoint-lg;
  margin: 0 auto;

  @include respond-to($breakpoint-md) {
    padding: $space-2xl;
  }

  h1 {
    color: $primary;
    margin-bottom: $space-lg;
    font-family: $font-header;
    font-size: $font-2xl;

    @include respond-to($breakpoint-md) {
      font-size: $font-3xl;
      margin-bottom: $space-xl;
    }
  }

  h2 {
    color: $accent;
    margin: $space-md 0;
    font-family: $font-header;
    font-size: $font-xl;

    @include respond-to($breakpoint-md) {
      font-size: $font-2xl;
      margin: $space-lg 0;
    }
  }

  h3 {
    color: $secondary;
    margin: $space-sm 0;
    font-family: $font-header;
    font-size: $font-lg;

    @include respond-to($breakpoint-md) {
      font-size: $font-xl;
      margin: $space-md 0;
    }
  }

  p {
    margin-bottom: $space-md;
    line-height: 1.6;
    font-size: $font-sm;

    @include respond-to($breakpoint-md) {
      margin-bottom: $space-lg;
      font-size: $font-base;
    }
  }
}

.content {
  margin-top: $space-xl;

  @include respond-to($breakpoint-md) {
    margin-top: $space-2xl;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: $space-sm 0;
      padding-left: $space-lg;
      position: relative;
      font-size: $font-sm;

      @include respond-to($breakpoint-md) {
        margin: $space-md 0;
        font-size: $font-base;
      }

      &::before {
        content: "•";
        color: $secondary;
        position: absolute;
        left: 0;
      }
    }
  }
}

.blogPost {
  .postPreview {
    margin: $space-md 0;
    padding: $space-md;
    border-radius: $radius-md;
    background-color: rgba($primary, 0.05);
    transition: transform $transition-base ease;

    @include respond-to($breakpoint-md) {
      margin: $space-lg 0;
      padding: $space-lg;
      border-radius: $radius-lg;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.colorPalette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: $space-sm;

  @include respond-to($breakpoint-md) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: $space-md;
  }

  .colorSwatch {
    aspect-ratio: 1;
    border-radius: $radius-md;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: $font-sm;

    @include respond-to($breakpoint-md) {
      border-radius: $radius-lg;
      font-size: $font-base;
    }
  }
}

.profileInfo {
  .infoSection {
    padding: $space-md;
    background-color: rgba($secondary, 0.05);
    border-radius: $radius-md;
    margin: $space-md 0;

    @include respond-to($breakpoint-md) {
      padding: $space-lg;
      border-radius: $radius-lg;
      margin: $space-lg 0;
    }
  }
}
```

# src/styles/TopNav.module.scss

```scss
// src/styles/TopNav.module.scss
@import 'variables';

.topNav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px; // Adjust if needed to accommodate logo height
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $space-md;
  font-family: $font-body;
  box-shadow: $shadow-base;
  z-index: $z-header;
  transition: all $transition-base ease;

  &.light {
    background-color: #ffffff;
    color: $textDark;
  }

  &.dark {
    background-color: #1a1a1a;
    color: lighten($primary, 20%);
  }

  @include respond-to($breakpoint-md) {
    padding: 0 $space-xl;
    height: 80px; // Slightly taller on desktop if needed
  }
}

// Mobile menu button
.mobileMenuButton {
  display: block;
  z-index: $z-header + 1;
  cursor: pointer;
  padding: $space-sm;

  @include respond-to($breakpoint-lg) {
    display: none;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background-color: currentColor;
    position: relative;
    transition: background-color $transition-base ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: currentColor;
      transition: transform $transition-base ease;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }

    &.open {
      background-color: transparent;

      &::before {
        transform: translateY(8px) rotate(45deg);
      }

      &::after {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}

.containerOne {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $space-xl;

  @media (max-width: #{$breakpoint-lg - 1px}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background-color: var(--bg-primary);
    padding: $space-xl;
    transform: translateX(-100%);
    transition: transform $transition-base ease;
    opacity: 0;
    visibility: hidden;

    .middleContainer {
      order: -1; // Move logo to top in mobile menu
      margin-bottom: $space-xl;
    }

    &.open {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }

    .leftContainer,
    .rightContainer {
      flex-direction: column;
      align-items: center;
      gap: $space-xl;
    }
  }
}

.leftContainer,
.rightContainer {
  display: flex;
  gap: $space-lg;

  @include respond-to($breakpoint-lg) {
    gap: $space-xl;
  }
}

.middleContainer {
   .logo {
     display: flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     transition: opacity $transition-base ease;

     &:hover {
       opacity: 0.9;
     }
   }

   .logoImage {
     height: 40px; // Adjust this value based on your logo's proportions
     width: auto;
     object-fit: contain;

     @include respond-to($breakpoint-md) {
       height: 50px; // Slightly larger on desktop
     }
   }
 }

.navLink {
  color: inherit;
  text-decoration: none;
  font-size: $font-base;
  transition: all $transition-base ease;
  position: relative;

  &:hover,
  &.active {
    color: $accent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -$space-xs;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $secondary;
    transition: width $transition-base ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
}

.containerTwo {
  margin-right: $space-sm;

  @include respond-to($breakpoint-md) {
    margin-right: $space-xl;
  }
}

.themeToggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: $space-sm;
  color: inherit;
  transition: all $transition-base ease;
  border-radius: $radius-full;

  &:hover {
    background-color: rgba($secondary, 0.1);
  }
}
```

# src/types/theme.ts

```ts
// src/types/theme.ts
export type Theme = 'light' | 'dark';
```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

declare module '*.png' {
   const content: string;
   export default content;
 }
```

# tsconfig.json

```json
// tsconfig.json
{
   "compilerOptions": {
     "target": "ES2020",
     "useDefineForClassFields": true,
     "lib": ["ES2020", "DOM", "DOM.Iterable"],
     "module": "ESNext",
     "skipLibCheck": true,
     "incremental": true,
     "tsBuildInfoFile": "./.tsbuildinfo",

     /* Bundler mode */
     "moduleResolution": "bundler",
     "allowImportingTsExtensions": true,
     "resolveJsonModule": true,
     "isolatedModules": true,
     "noEmit": true,
     "jsx": "react-jsx",

     /* Linting */
     "strict": true,
     "noUnusedLocals": true,
     "noUnusedParameters": true,
     "noFallthroughCasesInSwitch": true,
     "forceConsistentCasingInFileNames": true,

     /* Path Aliases */
     "baseUrl": ".",
     "paths": {
       "@/*": ["src/*"]
     }
   },
   "include": ["src"],
   "references": [{ "path": "./tsconfig.node.json" }]
 }


```

# tsconfig.node.json

```json
// tsconfig.node.json
{
   "compilerOptions": {
     "composite": true,
     "skipLibCheck": true,
     "module": "ESNext",
     "moduleResolution": "bundler",
     "allowSyntheticDefaultImports": true,
     "strict": true,
     "forceConsistentCasingInFileNames": true
   },
   "include": ["vite.config.ts"]
 }
```

# vite.config.ts

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      }
    }
  },
  assetsInclude: ['**/*.png'] // Ensure PNG files are handled correctly
})


```

