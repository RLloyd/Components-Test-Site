import { FC } from 'react';
import styles from '../styles/TopNav.module.scss';
import { Theme } from '../types/theme';

interface TopNavProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export const TopNav: FC<TopNavProps> = ({ theme, onThemeToggle }) => {
  return (
    <nav className={`${styles.topNav} ${styles[theme]}`}>
      <div className={styles.containerOne}>
        <div className={styles.leftContainer}>
          <a href="/mashmedia" className={styles.navLink}>
            MashMedia Studio
          </a>
          <a href="/digitalone" className={styles.navLink}>
            DigitalOne
          </a>
          <a href="/zenmonics" className={styles.navLink}>
            Zenmonics
          </a>
        </div>

        <div className={styles.middleContainer}>
          <a href="/" className={styles.logo}>
            LOGO
          </a>
        </div>

        <div className={styles.rightContainer}>
          <a href="/blog" className={styles.navLink}>
            Blog
          </a>
          <a href="/styleguide" className={styles.navLink}>
            Styleguide
          </a>
          <a href="/profile" className={styles.navLink}>
            Profile
          </a>
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