import React from 'react';
import styles from "../Profile.module.scss";
import {Avatar} from "./Avatar/Avatar";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";

export const ProfileInfo = () => {
  return (
    <div className={styles.infoWrapper}>

      <Avatar/>

      <ProfileDescription/>

    </div>
  );
};

