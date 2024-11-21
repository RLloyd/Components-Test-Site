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

