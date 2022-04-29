import React from 'react';
import styles from "../../Profile.module.scss";

export const ProfileDescription = () => {
  return (
    <div className={styles.infoDescription}>
      <h3>name</h3>
      <div>city</div>
      <div>education</div>
      <div>work</div>
    </div>
  );
};

