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

