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