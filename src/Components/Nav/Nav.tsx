import React from 'react';
import styles from './Nav.module.scss'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a className={styles.navLink} href="#">Messages</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="#">News</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="#">Music</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="#">Profile</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

