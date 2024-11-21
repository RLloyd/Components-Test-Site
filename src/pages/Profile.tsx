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

