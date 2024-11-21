// src/App.tsx
import { useState } from 'react';
import { Theme } from './types/theme';
import styles from './styles/App.module.scss';
import TopNav from './components/TopNav';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${styles.appContainer} ${styles[theme]}`}>
      <TopNav theme={theme} onThemeToggle={toggleTheme} />
      <main className={styles.content}>
        <h1>Welcome to the Components Test Site</h1>
        <p>This is a test environment for our navigation components.</p>
      </main>
    </div>
  );
}

export default App;

