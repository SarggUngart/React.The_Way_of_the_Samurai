import React from 'react';
import styles from './Nav.module.scss'
import {Link} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link className={styles.navLink} to="/profile">Profile</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/dialogs">Messages</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/news">News</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/music">Music</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

