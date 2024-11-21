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

