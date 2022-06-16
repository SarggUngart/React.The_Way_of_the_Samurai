import React, {FC} from 'react';
import styles from "../../Profile.module.scss";
import {ProfileType} from "../../../../../redux/profile-reducer";
import {Preloader} from "../../../../../common/preloader/Preloader";

type ProfileDescriptionPropsType = {
  profile: ProfileType | null
}


export const ProfileDescription: FC<ProfileDescriptionPropsType> = props => {
  const {profile} = props

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div className={styles.infoDescription}>
      <h3>{profile.fullName}</h3>
      <div>{profile.aboutMe}</div>
      <div>{profile.lookingForAJobDescription}</div>
    </div>
  );
};

