import React from 'react';
import preloader from "../../assets/preloader/preloader.gif";
import styles from "./Preloader.module.scss"




export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img  src={preloader} alt={preloader}/>
    </div>
  );
};

