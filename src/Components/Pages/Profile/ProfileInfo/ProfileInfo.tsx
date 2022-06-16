import React, {FC} from 'react';
import styles from "../Profile.module.scss";
import {Avatar} from "./Avatar/Avatar";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {ProfileType} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
  profile: ProfileType | null
}

export const ProfileInfo:FC <ProfileInfoPropsType> = props => {
  const {profile} = props

  return (
    <div className={styles.infoWrapper}>

      <Avatar profile={profile}/>

      <ProfileDescription profile={profile}/>

    </div>
  );
};

