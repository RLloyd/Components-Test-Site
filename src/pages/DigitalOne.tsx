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

