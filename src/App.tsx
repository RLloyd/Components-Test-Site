// src/App.tsx

// import Hero from './components/Hero/Hero';
// import { heroSlides } from './components/Hero/heroData';
// import './App.scss';

// const App = () => {
//   return (
//     <div className="app">
//       <main className="main-content">
//         <Hero slides={heroSlides} />
//       </main>
//     </div>
//   );
// };

// export default App;
/*-==========================================================================================-*/
// import React from 'react';
// import Hero from './components/Hero';
// import styles from './App.module.scss';  // Changed to module.scss

// const App = () => {
//   const slides = [
//     {
//       image: "/src/assets/Hero/veil-1.webp",
//       title: "Discover Innovation",
//       description: "Explore cutting-edge solutions that transform your digital experience",
//       ctaText: "Learn More",
//       ctaLink: "#learn-more"
//     },
//     {
//       image: "/src/assets/Hero/veil-2.webp",
//       title: "Build the Future",
//       description: "Create powerful applications with our advanced technology stack",
//       ctaText: "Start Building",
//       ctaLink: "#start-building"
//     },
//     {
//       image: "/src/assets/Hero/veil-3.webp",
//       title: "Expert Support",
//       description: "Get dedicated assistance from our team of experienced developers",
//       ctaText: "Contact Us",
//       ctaLink: "#contact"
//     }
//   ];

//   return (
//     <div style={{
//       minHeight: '100vh',
//       backgroundColor: '#0a0a0a',
//       padding: '2rem'
//     }}>
//       <div style={{ border: '2px solid yellow' }}>
//         <Hero slides={slides} />
//       </div>
//     </div>
//   );
// };

// export default App;

/*-==========================================================================================-*/
// import React from 'react';
// import Hero from './components/HeroOld';
// import './App.css';
// // import './App.css';

// const App = () => {
//   const slides = [
//     {
//       image: "/src/assets/Hero/veil-1.webp",
//       title: "Discover Innovation",
//       description: "Explore cutting-edge solutions that transform your digital experience",
//       ctaText: "Learn More",
//       ctaLink: "#learn-more"
//     },
//     {
//       image: "/src/assets/Hero/veil-2.webp",
//       title: "Build the Future",
//       description: "Create powerful applications with our advanced technology stack",
//       ctaText: "Start Building",
//       ctaLink: "#start-building"
//     },
//     {
//       image: "/src/assets/Hero/veil-3.webp",
//       title: "Expert Support",
//       description: "Get dedicated assistance from our team of experienced developers",
//       ctaText: "Contact Us",
//       ctaLink: "#contact"
//     }
//   ];

//   return (
//     <div className="app-container">
//       <main className="main-content">
//         <Hero slides={slides} />
//       </main>
//     </div>
//   );
// };

// export default App;

/*-==========================================================================================-*/

// import React from 'react';
// import Hero from './components/Hero';
// import './App.scss';

// const App = () => {
//   const slides = [
//     {
//       image: "/src/assets/Hero/veil-1.webp",
//       title: "Discover Innovation",
//       description: "Explore cutting-edge solutions that transform your digital experience",
//       ctaText: "Learn More",
//       ctaLink: "#learn-more"
//     },
//     {
//       image: "/src/assets/Hero/veil-2.webp",
//       title: "Build the Future",
//       description: "Create powerful applications with our advanced technology stack",
//       ctaText: "Start Building",
//       ctaLink: "#start-building"
//     },
//     {
//       image: "/src/assets/Hero/veil-3.webp",
//       title: "Expert Support",
//       description: "Get dedicated assistance from our team of experienced developers",
//       ctaText: "Contact Us",
//       ctaLink: "#contact"
//     }
//   ];

//   return (
//     <div className="app">
//       <Hero slides={slides} />
//     </div>
//   );
// };

// export default App;

/*-==========================================================================================-*/

// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "./types/theme";
import styles from "./styles/App.module.scss";
import TopNav from "./components/TopNav";
import { MashMediaStudio, DigitalOne, Zenmonics, Blog, Styleguide, Profile } from "./pages";
import Hero from "./components/Hero/Hero";


// Custom hook for theme persistence
const useThemePersistence = () => {
	// Get initial theme from localStorage or default to 'light'
	const getInitialTheme = (): Theme => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
			return savedTheme;
		}

		// Check system preference if no saved theme
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}

		return "light";
	};

	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	// Update localStorage when theme changes
	useEffect(() => {
		localStorage.setItem("theme", theme);
		// Optionally update body/root element class for global theming
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return { theme, toggleTheme };
};

function App() {
	const { theme, toggleTheme } = useThemePersistence();

	const slides = [
		{
			image: "src/assets/Hero/veil-1.webp",
			title: "Welcome to Our Platform",
			description: "Discover amazing features and opportunities",
			ctaText: "Get Started",
			ctaLink: "/start",
		},
		{
			image: "src/assets/Hero/veil-2.webp",
			title: "Welcome to Our Platform",
			description: "Discover amazing features and opportunities",
			ctaText: "Get Started",
			ctaLink: "/start",
		},
		// Add more slides as needed
	];

	return (
		<Router>
			<div className={`${styles.appContainer} ${styles[theme]}`}>
				<TopNav theme={theme} onThemeToggle={toggleTheme} />
				<main className={styles.content}>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<h1>Welcome to the Components Test Site</h1>
									<p>This is a test environment for our navigation components.</p>
									<Hero slides={slides}/>
								</>
							}
						/>
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
