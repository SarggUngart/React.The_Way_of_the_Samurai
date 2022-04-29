import React from 'react';
import styles from './Nav.module.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {

  const activeLink = (navLinks: any | null) => navLinks.isActive ? styles.navLinkActive : styles.navLink

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink className={activeLink} to="/profile">Profile</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={activeLink} to="/dialogs">Messages</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={activeLink} to="/news">News</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={activeLink} to="/music">Music</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={activeLink} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

