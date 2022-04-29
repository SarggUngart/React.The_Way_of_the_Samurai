import React from 'react';
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg"
           alt="logo"/>
    </header>
  );
};
