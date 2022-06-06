import React from 'react';
import styles from "../../ProfileInfo/Avatar/Avatar.module.scss";

export const Avatar = () => {


  return (

    <img className={styles.avatar}
         src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
         alt="avatar"/>

  );
};
