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

